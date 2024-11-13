import { Todo } from "./todo.type";

export interface TodoFormProps {
  onAddTodo: (todo: Omit<Todo, "id" | "order">) => void;
  isLoading: boolean
}
