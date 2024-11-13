import { TodoListProps } from "../../types/todoListProps";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../../hooks/useTodo";

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onUpdate,
  onDelete,
}) => {
  const { loadingStates } = useTodos();

  return (
    <div className="space-y-2 py-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onUpdate={onUpdate}
          onDelete={onDelete}
          isLoading={loadingStates.deleteTodo === todo.id}
        />
      ))}
    </div>
  );
};
