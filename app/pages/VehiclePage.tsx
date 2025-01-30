import React from "react";
import { Sidebar } from "../components/Sidebar";

const VehiclesPage = () => {
  return (
    <div className="flex bg-gray-100 vehicles-page">
      <Sidebar />

      <div className="border-r border-gray-300"></div>

      <div className="flex flex-col flex-1 bg-gray-100 main-content">
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Vehicles</h1>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">John Doe</span>
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </header>

        <main className="overflow-hidden">
          <div className="bg-white shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Search for vehicles"
                className="border border-gray-300 rounded-lg px-4 py-2 w-1/3"
              />
              <div className="flex items-center gap-4">
                <button className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                  + New vehicle
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2">
                  Filter
                </button>
              </div>
            </div>

            <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden">
              <table className="w-full shadow-md text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 rounded-tl-md">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded-sm"
                      />
                    </th>
                    <th className="py-2 px-4 ">
                      LICENSE PLATE
                    </th>
                    <th className="py-2 px-4 ">MAKE</th>
                    <th className="py-2 px-6  ">
                      CATEGORY
                    </th>
                    <th className="py-2 px-4">MODEL</th>
                    <th className="py-2 px-4 ">
                      MILEAGE
                    </th>
                    <th className="py-2 px-4">
                      BUYING PRICE
                    </th>
                    <th className="py-2 px-10">
                      DATE ADDED
                    </th>
                    <th className="py-2 px-4 ">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((_, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-300 text-gray-500"
                    >
                      <td className="py-2 px-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded-sm "
                        />
                      </td>
                      <td className="py-2 px-4">ATZ324</td>
                      <td className="py-2 px-4">Audi</td>
                      <td className="py-2 px-4 text-purple-600">
                        Cars & Trucks
                      </td>
                      <td className="py-2 px-4">A3 Sedan</td>
                      <td className="py-2 px-4">1,000</td>
                      <td className="py-2 px-4">₱18,000,000</td>
                      <td className="py-2 px-4">Oct 16 2023</td>
                      <td className="py-2 px-4">...</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Section Pagination buttons */}
            <div className="mt-4 w-full flex justify-between ">
              <span>Showing 1-10 of 1000</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded">1</button>
                <button className="px-3 py-1 border rounded bg-gray-200">
                  2
                </button>
                <button className="px-3 py-1 border rounded">3</button>
                <button className="px-3 py-1 border rounded">100</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VehiclesPage;
