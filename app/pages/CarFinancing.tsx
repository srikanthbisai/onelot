import React from 'react';
import { SiTicktick } from "react-icons/si";
import CarTable from './CarTable';

function CarFinancing() {
  return (
    <div className="lg:flex bg-gray-100 py-10">
      <div className="left lg:w-3/5 px-10">
        <CarTable />
      </div>
      <div className="right lg:w-2/5 p-10 space-y-10">
        <h1 className="text-5xl font-bold">Car Financing</h1>
        <h3 className="font-semibold mt-4 text-3xl">Dealer Loans</h3>
        <p className="text-gray-600 text-lg mt-2">
          OneLot&apos;s working capital loans allow car dealers to buy more cars and capitalize on car purchase opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.
        </p>

        <div className="h-0.5 mt-10 bg-gray-300 my-4"></div>

        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <ol className="flex items-center gap-2">
            <SiTicktick className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-200 flex-shrink-0" />
            <span className="text-lg">
              Interest as low as 1.5% per month with daily calculation of interest
            </span>
          </ol>
          <ol className="flex items-center gap-2">
            <SiTicktick className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-200 flex-shrink-0" />
            <span className="text-lg">
              Financing up to 70% of the vehicle purchase
            </span>
          </ol>
          <ol className="flex items-center gap-2">
            <SiTicktick className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-200 flex-shrink-0" />
            <span className="text-lg">
              Financing period up to 90 days with flexible repayment schedule at any point
            </span>
          </ol>
        </ul>

        <div className="h-0.5 bg-gray-300 my-4"></div>

        <p className="text-wrap text-lg text-gray-400">
          Use OneLot&apos;s financing solution today, grow the number of cars in your lot and increase your profits
        </p>

        <div className="mt-6">
          <a href="#" className="px-8 py-4 bg-purple-800 text-white rounded-lg font-medium hover:bg-yellow-500">
            View Loans →
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarFinancing;