import { Menu, Settings } from "lucide-react";
import { TodoHeaderProps } from "../../types/todoHeaderProps";

export const TodoHeader: React.FC<TodoHeaderProps> = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <header className="todo-header">
      <div className="px-6 grid grid-flow-col justify-between items-center">
        <div className="grid grid-flow-col items-center">
          <Menu className="text-white" />
          <h1 className="pl-6 text-2xl font-bold text-white">Todo List</h1>
          <h2 className="pl-4 text-lg font-bold">
            進度: {completedTodos}/{todos.length}
          </h2>
        </div>
        <Settings className="text-white"/>
      </div>
    </header>
  );
};
