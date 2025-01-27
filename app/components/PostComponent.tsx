export const PostComponent = () => {
    return (
      <div className="bg-white p-4 shadow-lg rounded-lg border absolute z-10 -translate-y-[570px] -translate-x-[400px] w-96">
        {/* Header */}
        <div className="flex items-start gap-4 ">
          <div className="relative w-8 h-8">
            <img
              src="/profilepic.png"
              alt="Profile Picture"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-sm font-semibold">Ryan Agoncillo</h2>
            <p className="text-xs text-gray-500">October 30 · 🌍</p>
          </div>
          <button className="text-gray-500 hover:bg-gray-100 rounded-full p-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </div>
  
        {/* Post Content */}
        <div className="mt-3">
          <p className="text-sm text-gray-800">
            Rev up your dreams with our stunning lineup of high-performance
            vehicles! 🚗💨
            <span className="text-blue-600"> #CarEnthusiast #DreamRide</span>
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-sm">
              <span className="font-medium">Location:</span> Quezon City, Manila
            </p>
            <p className="text-sm">
              <span className="font-medium">Year:</span> 2022
            </p>
            <p className="text-sm">
              <span className="font-medium">Make:</span> Mitsubishi
            </p>
          </div>
        </div>
  
        {/* Image */}
        <div className="mt-3 rounded-lg overflow-hidden">
          <img src="/car4.webp" alt="Car" className="w-full h-auto" />
        </div>
  
        {/* Reactions Count */}
        <div className="flex items-center justify-between mt-3 pb-3 border-b text-gray-500">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-1">
              <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px]">👍</span>
              </span>
              <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px]">❤️</span>
              </span>
            </div>
            <span className="text-xs ml-1">177</span>
          </div>
          <div className="flex gap-3 text-xs">
            <span>42 Comments</span>
            <span>5 Shares</span>
          </div>
        </div>
  
        {/* Action Buttons */}
        <div className="flex justify-between py-1 border-b ">
          <button className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            Like
          </button>
          <button className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            Comment
          </button>
          <button className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Share
          </button>
        </div>
  
        {/* Comment Input */}
        <div className="flex items-center gap-2 mt-3">
          <div className="w-8 h-8">
            <img
              src="/profilepic.png"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Write a comment..."
              className="w-full px-3 py-1.5 bg-gray-100 rounded-full text-sm focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500">
              <button className="hover:text-gray-700">😊</button>
              <button className="hover:text-gray-700">📷</button>
              <button className="hover:text-gray-700">😃</button>
            </div>
          </div>
        </div>
  
        {/* View Comments Link */}
        <button className="text-sm text-gray-500 hover:underline mt-2">
          View comments
        </button>
      </div>
    );
  };