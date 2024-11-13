export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  dueDate: string | null;
  order: number;
}

export type TodoCategory = {
  id: string;
  name: string;
  color: string;
};

export type TodoFilters = {
  search: string;
  category: string;
};

export interface TodoLoading {
  addTodo: boolean;
  deleteTodo: string;
}
