import { useState } from "react";
import { TodoItemProps } from "../../types/todoItemProps";
import { Trash2 } from "lucide-react";
import { TodoSkeleton } from "../TodoSkeleton";

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  isLoading,
  onUpdate,
  onDelete,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  if(isLoading){
    return <TodoSkeleton></TodoSkeleton>
  }

  return (
    <>
      <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {editingId === todo.id ? (
          <input
            type="text"
            value={todo.text}
            onChange={(e) => onUpdate(todo.id, { text: e.target.value })}
            onBlur={() => setEditingId(null)}
            className="edit-input"
            autoFocus
          />
        ) : (
          <div className="flex items-center gap-3 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                onUpdate(todo.id, {
                  completed: !todo.completed,
                })
              }
              className="todo-checkbox"
            />
            <span
              onDoubleClick={() => setEditingId(todo.id)}
              className="flex-1"
            >
              {todo.text}
            </span>
            {todo.dueDate && (
              <span className="text-sm text-gray-500">
                Due: {new Date(todo.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        )}
        <div className="todo-actions">
          <button
            onClick={() => onDelete(todo.id)}
            disabled={isLoading}
            className="delete-btn"
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </>
  );
};
