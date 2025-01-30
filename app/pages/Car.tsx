import React from "react";
import { FaPlus } from "react-icons/fa";
import { carsData } from "../lib/CarData";
import { Sidebar } from "../components/Sidebar";
import { TopStats } from "../components/TopStats";
import { VehicleCard } from "../components/VehicleCard";
import { Pagination } from "../components/Pagination";
import { PublishOptions } from "../components/PublishOptions";
import { PostComponent } from "../components/PostComponent";

export default function Car() {
  return (
    <div className="car-component flex mx-auto border rounded-md shadow-md">
      <Sidebar />

      <div className="border-r border-gray-100 w-0.5"></div>
      
      <div className="flex-1 p-6 relative overflow-visible">
        <TopStats />
        
        <h1 className="text-2xl font-bold mb-4">Vehicles</h1>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Search for vehicles"
            className="mb-6 p-2 border rounded w-1/2"
          />
          <div className="">
            <button className="p-2 gap-2 bg-purple-800 flex items-center mb-2 rounded-md">
              <FaPlus className="text-white" />
              <span className="text-white">Add Vehicle</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-4 gap-6">
          {carsData.map((car, index) => (
            <VehicleCard key={index} car={car} />
          ))}
        </div>

        <Pagination />

        <PublishOptions />

        <PostComponent />
      </div>
    </div>
  );
}