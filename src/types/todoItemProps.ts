import { Todo } from "./todo.type";

export interface TodoItemProps {
  todo: Todo;
  index: number;
  isLoading: boolean;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
  onDelete: (id: string) => void;
}
