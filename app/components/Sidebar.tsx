import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="w-1/5 p-4 -z-10">
      <ul className="space-y-4 text-center p-1">
        <li className="text-gray-700 font-medium flex flex-row gap-2 items-center">
          <IoPerson className="text-cyan-500" /> Dashboard
        </li>
        <li className="text-gray-700 font-medium flex flex-row gap-2 items-center">
          <FaTruck className="text-cyan-500" /> Fleet
          <MdOutlineKeyboardArrowDown />
        </li>
        <li className="text-gray-700 font-medium bg-cyan-100 rounded-md p-2">
          Vehicles
        </li>
        <li className="text-gray-700 font-medium flex flex-row gap-2 items-center">
          <FaTruck className="text-cyan-500" /> Marketing
          <MdOutlineKeyboardArrowDown />
        </li>
        <li className="text-gray-700 font-medium -ml-4">Posts</li>
      </ul>
    </div>
  );
};