import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaFlagUsa } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white lg:text-center py-20 px-4">
      {/* Main Content */}
      <div className="max-w-2xl mx-auto mb-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 max-md:text-center">Get started today</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed max-md:text-center">
          We look forward to serving the needs of used car dealers across
          the Philippines and helping them thrive in this dynamic market.
        </p>
        <button className="bg-purple-800 text-white px-6 py-2.5 max-md:ml-[35%] rounded-lg text-base font-medium hover:bg-yellow-500 transition">
          Inquire now
        </button>
      </div>

      {/* Footer */}
      <div className="w-[90%] mx-auto">
        <div className="flex max-md:flex-col lg:justify-between lg:items-center mb-8">
          <div className="flex items-center">
            <img src="onelot.webp" alt="" className="h-28 w-28"/>
            <span className="text-gray-900 text-3xl font-semibold ml-2">OneLot</span>
          </div>

          {/* Navigation */}
          <div>
            <nav className="flex max-md:flex-col gap-8 text-gray-600 mb-4 max-md:ml-6">
              <a href="#" className="hover:text-gray-900">Home</a>
              <a href="#" className="hover:text-gray-900">Features</a>
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </nav>
            
            <div className="flex lg:justify-end max-md:ml-6 max-md:mt-10">
              <div className="flex lg:items-center gap-2">
                <span className="text-gray-600 uppercase text-sm">ENG</span>
                <FaFlagUsa className="text-red-500 text-xl"/>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="flex max-md:flex-col max-md:gap-3 justify-between items-start mt-8">
            <div className="text-left">
              <p className="text-gray-500 text-md">
                © 2023 OneLot Technologies Incorporated Pte. Ltd. All rights reserved.
              </p>
              <p className="text-gray-500 text-md mt-3">
                © 2023 OneLot Financing Corporation All rights reserved.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-black hover:text-gray-700">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-black hover:text-gray-700">
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;