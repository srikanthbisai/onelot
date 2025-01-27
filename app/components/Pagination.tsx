export const Pagination = () => {
    return (
      <div className="flex justify-between mt-6">
        <span className="text-gray-500 mr-4">
          Showing <span className="text-black font-bold">1-10</span> of{" "}
          <span className="font-bold text-black">1000</span>
        </span>
        <div className="flex items-center">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-100">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-100">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm bg-purple-100 text-purple-600 font-semibold">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-100">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-100">
            ...
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-100">
            100
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-100">
            &gt;
          </button>
        </div>
      </div>
    );
  };