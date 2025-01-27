import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { FaBullhorn } from "react-icons/fa";

function About() {
  return (
    <div className="bg-white px-6 py-12 md:py-16 lg:py-20">
      <div className="w-[90%] mx-auto">
        {/* Main Title and Description */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex-1 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl leading-tight">
              Everything you need to grow your business
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              OneLot is your trusted lending and financing partner, exclusively tailored for used car dealerships. We also offer digital tools for streamlined operations and growth of your dealership.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>

          {/* Features Section */}
          <div className="flex flex-col space-y-6 md:w-1/2">
            {/* Dealer Loans Feature */}
            <div className="flex items-start">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-md">
                <BiDollarCircle className='text-3xl bg-cyan-500 bg-clip-text text-cyan-500 '/>
              </div>
              {/* Text */}
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Dealer Loans
                </h2>
                <a
                  href="#"
                  className="text-sm text-cyan-600 hover:underline font-medium"
                >
                  Accelerate your growth with tailored loan solutions
                </a>
                <p className="mt-2 text-sm text-gray-600">
                  Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.
                </p>
              </div>
            </div>

            {/* Dealership Management System Feature */}
            <div className="flex items-start">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-md">
               <FaBullhorn className='text-xl bg-clip-text text-purple-500 '/>
              </div>
              {/* Text */}
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Dealership Management System
                </h2>
                <a
                  href="#"
                  className="text-sm text-purple-600 hover:underline font-medium"
                >
                  Enhance efficiency and sales with free digital tools for car dealerships
                </a>
                <p className="mt-2 text-sm text-gray-600">
                  OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
