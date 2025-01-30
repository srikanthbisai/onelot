import Image from 'next/image';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'; // Import icons
import { FiMoreHorizontal } from 'react-icons/fi'; // Import three dots icon

export const PostComponent = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg border absolute z-10 -translate-y-[570px] -translate-x-[400px] w-96">
      {/* Header */}
      <div className="flex items-start gap-4 ">
        <div className="relative w-8 h-8">
          <Image
            src="/profilepic.png"
            alt="Profile Picture"
            width={32}
            height={32}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-sm font-semibold">Ryan Agoncillo</h2>
          <p className="text-xs text-gray-500">October 30 · 🌍</p>
        </div>
        <button className="text-gray-500 hover:bg-gray-100 rounded-full p-1">
          <FiMoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Content */}
      <div className="mt-3">
        <p className="text-sm text-gray-800">
          Rev up your dreams with our stunning lineup of high-performance vehicles! 🚗💨
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
        <Image
          src="/car4.webp"
          alt="Car"
          width={500} 
          height={500}
          className="w-full h-auto"
        />
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
          <FaThumbsUp className="w-5 h-5" />
          Like
        </button>
        <button className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 text-gray-600">
          <FaComment className="w-5 h-5" />
          Comment
        </button>
        <button className="flex items-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 text-gray-600">
          <FaShare className="w-5 h-5" />
          Share
        </button>
      </div>

      {/* Comment Input */}
      <div className="flex items-center gap-2 mt-3">
        <div className="w-8 h-8">
          <Image
            src="/profilepic.png"
            alt="User"
            width={32}
            height={32}
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
