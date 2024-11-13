import { useState } from "react";
import { TodoFilterProps } from "../../types/todoFilterProps";
import { useTodos } from "../../hooks/useTodo";

export const TodoFilter: React.FC<TodoFilterProps> = ({ onFiltersChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { categories } = useTodos();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFiltersChange({ search: value, category: selectedCategory });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFiltersChange({ search: searchTerm, category: value });
  };

  return (
    <>
      <div className="mt-2 flex gap-4">
        <input
          type="text"
          placeholder="Search todos..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e)}
          className="category-select"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
