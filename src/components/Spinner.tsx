export const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="
          animate-spin 
          rounded-full 
          border-2
          border-t-transparent
          w-12 h-12
          border-[#0071FF]
        "
      />
    </div>
  );
};
