const Skeleton = () => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-900">
      <div className="h-48 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Skeleton;
