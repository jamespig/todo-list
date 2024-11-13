import { useState, useEffect } from "react";
import { Todo, TodoCategory, TodoLoading } from "../types/todo.type";
import { DEFAULT_CATEGORIES, STORAGE_KEY } from "../constants/todo.constant";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [categories] = useState<TodoCategory[]>(DEFAULT_CATEGORIES);
  const [loadingStates, setLoadingStates] = useState<TodoLoading>({
    addTodo: false,
    deleteTodo: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const simulateApiCall = (callback: { (): void; (): void; (): void }) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        callback();
        resolve();
      }, 2000);
    });
  };

  const addTodo = async (todo: Omit<Todo, "id" | "order">) => {
    setLoadingStates((prev) => ({ ...prev, addTodo: true }));
    const newTodo: Todo = {
      ...todo,
      id: crypto.randomUUID(),
      order: todos.length,
    };
    await simulateApiCall(() => {
      setTodos((prev) => [...prev, newTodo]);
    });
    setLoadingStates((prev) => ({ ...prev, addTodo: false }));
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo))
    );
  };

  const deleteTodo = async (id: string) => {
    setLoadingStates((prev) => ({...prev, deleteTodo: id}));
    await simulateApiCall(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
    setLoadingStates((prev) => ({ ...prev, deleteTodo: '' }));
  };

  const reorderTodos = (startIndex: number, endIndex: number) => {
    const result = Array.from(todos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    const reordered = result.map((todo, index) => ({
      ...todo,
      order: index,
    }));

    setTodos(reordered);
  };

  return {
    todos,
    categories,
    loadingStates,
    addTodo,
    updateTodo,
    deleteTodo,
    reorderTodos,
  };
};
