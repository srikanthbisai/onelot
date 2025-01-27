import React from "react";
import { FaBars } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

const carsData = [
  {
    title: "Car Loan",
    price: "PHP 878,000",
    description: "2015 Toyota Camry 2.5V VVT-i Auto 40,001 – 50,000 km",
    details: [
      "1.5%/month Interest",
      "60 Days Financing Period",
      "70% Financing for vehicle purchase",
    ],
    image: "/car2.webp", 
  },
  {
    title: "Car Loan",
    price: "PHP 1,000,000",
    description: "2020 Toyota Camry 2.5V VVT-i Auto 10,000 – 15,000 km",
    details: [
      "1.5%/month Interest",
      "60 Days Financing Period",
      "70% Financing for vehicle purchase",
    ],
    image: "car2.webp",
  },
  {
    title: "Car Loan",
    price: "PHP 788,000",
    description: "2015 Toyota Camry 2.5V VVT-i Auto 40,001 – 50,000 km",
    details: [
      "1.5%/month Interest",
      "60 Days Financing Period",
      "70% Financing for vehicle purchase",
    ],
    image: "car2.webp",
  },
];

const imagesRow = [
  "car2.webp", 
  "car2.webp",
  "car2.webp",
];

export default function CarTable() {
  return (
    <div className="car-table p-4 border border-gray-300 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">Vehicles</h1>
      <div className="flex justify-between p-2"> 
        <h2 className="text-xl mt-2">Car Loan</h2>
        <button className="border px-3 py-2 rounded-md flex items-center gap-2"><span><FaFilter/></span> Filter</button>
      </div>
   
      <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search for vehicles"
        className="mt-4 mb-6 p-2 border rounded w-1/2"
        />
        <div className="flex gap-4 pr-3">
        <FaBars className="text-xl"/>
        <IoGridOutline className="text-xl"/>
        </div>
     </div>

      <div className="grid grid-cols-3 gap-4">
        {carsData.map((car, index) => (
          <div key={index} className="border rounded shadow-md overflow-hidden">
            <img
              src={car.image}
              alt="Car"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <span className="bg-green-100 text-green-600 px-2 py-1 text-sm rounded">
                {car.title}
              </span>
              <h3 className="text-xs font-semibold mt-2">{car.price}</h3>
              <p className="text-xs text-gray-600 mt-1">{car.description}</p>
              <ul className="text-xs text-gray-500 mt-2">
                {car.details.map((detail, i) => (
                  <li key={i}>&bull; {detail}</li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-purple-800 text-white py-2 rounded">
                Choose plan
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {imagesRow.map((image, index) => (
          <div key={index} className="border rounded shadow-md overflow-hidden">
            <img
              src={image}
              alt="Car"
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}