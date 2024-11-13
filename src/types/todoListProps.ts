import { Todo } from "./todo.type";

export interface TodoListProps {
  todos: Todo[];
  onReorder: (startIndex: number, endIndex: number) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
  onDelete: (id: string) => void;
}
