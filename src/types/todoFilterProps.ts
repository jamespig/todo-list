import { TodoFilters } from "./todo.type";

export interface TodoFilterProps {
  onFiltersChange: (filters: TodoFilters) => void;
}
