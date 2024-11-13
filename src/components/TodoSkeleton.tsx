export const TodoSkeleton = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-md bg-gray-100 animate-pulse">
      <div className="flex items-center space-x-2 flex-1">
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-4 bg-gray-300 rounded w-32"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};
