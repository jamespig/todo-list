import { TodoCategory } from "../types/todo.type";

export const STORAGE_KEY = 'advanced-todo-list';
export const DEFAULT_CATEGORIES: TodoCategory[] = [
  { id: '1', name: 'Work', color: 'bg-blue-200' },
  { id: '2', name: 'Personal', color: 'bg-green-200' },
  { id: '3', name: 'Shopping', color: 'bg-yellow-200' },
];