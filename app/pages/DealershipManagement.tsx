import React from 'react';
import VehiclesPage from './VehiclePage';
import { SiTicktick } from 'react-icons/si';

function DealershipManagementSystem() {
  return (
    <div className="lg:flex pt-20 bg-gray-100 lg:p-10 overflow-hidden">
      <div className="right lg:w-2/3 p-10 space-y-10">
        <h1 className="text-5xl font-bold">Dealership Management System</h1>
        <p className="text-gray-600 text-lg mt-4">
          OneLot&apos;s digital platform has been built with the single goal to help used car dealers operate their business more efficiently.
        </p>

        <div className="h-0.5 bg-gray-300 my-4"></div>

        <ul className="list-disc pl-5 text-gray-700 space-y-6">
          <ol className="flex items-center gap-2">
            <SiTicktick className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-200 flex-shrink-0" />
            <span className="text-lg">
              <strong>Inventory Management:</strong> Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.
            </span>
          </ol>
          <ol className="flex items-center gap-2">
            <SiTicktick className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-200 flex-shrink-0" />
            <span className="text-lg">
              <strong>Marketing Tools:</strong> Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click of a button.
            </span>
          </ol>
          <ol className="flex items-center gap-2">
            <SiTicktick className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-200 flex-shrink-0" />
            <span className="text-lg">
              <strong>Market Insights (Coming Soon):</strong> Get insights on prices and volumes for all cars in the market. We provide you all the data by combining data from various sources with a single click of a button.
            </span>
          </ol>
        </ul>

        <div className="h-0.5 bg-gray-300 my-4"></div>

        <p className="text-wrap text-lg text-gray-400">
          Sign-up for OneLot&apos;s dealer platform today and manage your cars more efficiently.
        </p>

        <div className="mt-6">
          <button className="px-8 py-4 bg-purple-800 text-white rounded-lg font-medium hover:bg-yellow-500">
            Explore Now →
          </button>
        </div>
      </div>
      <div className="right lg:w-[50%] max-sm:mt-10 lg:pl-8">
        <VehiclesPage />
      </div>
    </div>
  );
}

export default DealershipManagementSystem;