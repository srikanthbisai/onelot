import React from "react";

export interface Car {
  id: string;
  model: string;
  image: string;
  category: string;
}

interface VehicleCardProps {
  car: Car;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ car }) => {
  return (
    <div className="relative border rounded-lg shadow-md overflow-visible p-4">
      <img
        src={car.image}
        alt="Car"
        className="w-full h-48 border object-contain rounded-lg"
      />
      <div className="absolute top-4 left-4 bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">
        {car.category}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{car.id}</h3>
        <p className="text-sm text-gray-600">{car.model}</p>
      </div>
    </div>
  );
};