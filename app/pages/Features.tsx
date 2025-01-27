import React from 'react';

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v-3.75m0 0v-3m0 3H9.75m2.25 0h2.25M9 21.75h6a2.25 2.25 0 002.25-2.25V4.5A2.25 2.25 0 0015 2.25H9A2.25 2.25 0 006.75 4.5v15A2.25 2.25 0 009 21.75z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Trust</h3>
            <p className="text-sm text-gray-600 mt-2">
              Regulated by Securities and Exchange Commission (SEC) Philippines
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 6.75L12 4.5m0 0l2.25 2.25M12 4.5v7.5m6 4.5H6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">High Amount</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get the highest loan amounts compared to other banks and lenders
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L12 3m0 0L10.5 4.5M12 3v6.75m6 9H6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Fast</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get the money within a few hours on the same day
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 11.25V6.75A2.25 2.25 0 0111.25 4.5h1.5A2.25 2.25 0 0115 6.75v4.5M6 18h12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Flexible</h3>
            <p className="text-sm text-gray-600 mt-2">
              Loans are tailored to your needs
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 12l3 3 6-6"
                />
              </svg>
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
