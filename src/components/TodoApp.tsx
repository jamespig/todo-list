import React, { useState } from "react";
import { useTodos } from "../hooks/useTodo";
import { TodoFilter } from "./TodoFilter/TodoFilter";
import { TodoForm } from "./TodoForm/TodoForm";
import { TodoHeader } from "./TodoHeader/TodoHeader";
import { TodoList } from "./TodoList/TodoList";
import "../TodoApp.scss";
import { TodoSkeleton } from "./TodoSkeleton";
import { Spinner } from "./Spinner";

const TodoApp: React.FC = () => {
  const {
    todos,
    loadingStates,
    addTodo,
    updateTodo,
    deleteTodo,
    reorderTodos,
  } = useTodos();
  const [filters, setFilters] = useState({ search: "", category: "all" });

  const handleFiltersChange = (newFilters: {
    search: string;
    category: string;
  }) => {
    setFilters(newFilters);
  };

  const filteredTodos = todos.filter(
    (todo) =>
      todo.text.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.category === "all" || todo.category === filters.category)
  );

  return (
    <>
      <div className="min-h-screen relative bg-[#ECECEC] py-2 flex flex-col">
        <div>
          <TodoHeader todos={filteredTodos} />
        </div>
        <div className="grow relative mt-14 mx-4 p-4 bg-white rounded-lg self-center w-11/12">
          <div>
            <TodoFilter onFiltersChange={handleFiltersChange} />
            <TodoList
              todos={filteredTodos}
              onReorder={reorderTodos}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
            {loadingStates.addTodo && <TodoSkeleton></TodoSkeleton>}
            {loadingStates.deleteTodo && <Spinner></Spinner>}
          </div>
          <TodoForm onAddTodo={addTodo} isLoading={loadingStates.addTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
