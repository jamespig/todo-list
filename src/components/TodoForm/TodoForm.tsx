import { useState } from "react";
import { TodoFormProps } from "../../types/todoFormProps";
import { useTodos } from "../../hooks/useTodo";
import { CirclePlus } from "lucide-react";

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo, isLoading }) => {
  const today =
    new Date().getFullYear().toString() +
    "-" +
    (new Date().getMonth() + 1).toString() +
    "-" +
    new Date().getDate();

  const { categories } = useTodos();
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState(today);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].id
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    onAddTodo({
      text: newTodo,
      completed: false,
      category: selectedCategory,
      dueDate: dueDate || null,
    });

    setNewTodo("");
    setDueDate(today);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="請輸入要完成的事項..."
          disabled={isLoading}
          className="new-todo-input"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          disabled={isLoading}
          className="due-date-input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          disabled={isLoading}
          className="category-select"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <div className="pl-2 flex items-center">
          <button type="submit" className="add-btn" disabled={isLoading}>
            <CirclePlus className="self-center" />
          </button>
        </div>
      </form>
    </>
  );
};
