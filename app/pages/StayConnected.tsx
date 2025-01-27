"use client"
import React, { useState, useRef } from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { ThumbsUp } from 'lucide-react';

const StayConnected = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-white text-center py-20 mt-20 max-sm:p-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Stay connected</h2>
      <p className="text-gray-600 mb-10">
        Follow OneLot on our Facebook and Instagram page and stay up to date with our most recent offers, updates, and new product features
      </p>
      <div className="flex flex-col lg:flex-row w-1/2 mx-auto justify-center gap-6 mb-10">
        <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100">
          <RiFacebookFill className="text-2xl"/>
          Follow us on Facebook
        </button>
        <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100">
          <AiFillInstagram className="text-2xl"/>
          Follow us on Instagram
        </button>
      </div>
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-6 px-10 no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none'
        }}
      >
        {Array.from({ length: 7 }).map((_, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg shadow-sm w-[400px] flex-shrink-0 snap-center transform transition-transform "
          >
            {/* Header */}
            <div className="p-4 flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">OL</span>
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-sm">OneLot</h4>
                <p className="text-xs text-gray-500">October 30 · 🌍</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>

            <div className="px-4 pb-2 text-left text-sm">
              <p>Luxury meets performance in the exquisite Lexus UX</p>
              <a href="https://one-lot.com/" className="text-gray-500 hover:underline">https://one-lot.com/</a>
            </div>

            <img
              src="car2.webp"
              alt={`Post ${idx + 1}`}
              className="w-full object-cover"
            />

            <div className="p-2 border">
            <div className="flex justify-between items-center text-sm text-gray-500 pb-2">
            <div className="flex items-center gap-1">
                  <span className="w-4 h-4 bg-blue-500 rounded-md flex items-center justify-center">
                    <ThumbsUp className="w-3 h-3 text-white" />
                  </span>
                  <span>177</span>
                </div>
                <div className="flex gap-3">
                  <span>42 Comments</span>
                  <span>5 Shares</span>
                </div>
              </div> 
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default StayConnected;