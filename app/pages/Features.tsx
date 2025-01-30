import React from 'react';
import { AiOutlineCheckCircle, AiOutlineDollarCircle, AiOutlineClockCircle, AiOutlineFileText, AiOutlineCheckSquare } from 'react-icons/ai';

function Features() {
  return (
    <div className="bg-white px-6 py-12 md:py-16 lg:py-20">
      <div className="w-[90%] mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
          Why OneLot?
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <AiOutlineCheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Trust</h3>
            <p className="text-sm text-gray-600 mt-2">
              Regulated by Securities and Exchange Commission (SEC) Philippines
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <AiOutlineDollarCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">High Amount</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get the highest loan amounts compared to other banks and lenders
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <AiOutlineClockCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Fast</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get the money within a few hours on the same day
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <AiOutlineFileText className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Flexible</h3>
            <p className="text-sm text-gray-600 mt-2">
              Loans are tailored to your needs
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <AiOutlineCheckSquare className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Easy</h3>
            <p className="text-sm text-gray-600 mt-2">
              Run through an easy process and get your first loans within days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
