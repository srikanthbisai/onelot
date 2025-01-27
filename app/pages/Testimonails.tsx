import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 text-center py-20 max-sm:p-6">
      <h2 className="text-3xl text-black font-bold mb-8">Testimonials</h2>

      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <img
            src="/profilepic.png" 
            alt="User"
            className="h-16 w-16 rounded-full mx-auto"
          />
        </div>
        <p className="text-lg text-gray-900 font-semibold mb-6 p-2">
          “The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.”
        </p>
        <div className="flex text-center items-center justify-center gap-6">
        <p className="text-gray-900 font-semibold text-sm">Mark Vergel de Dios</p>
        <p className="text-gray-500 text-sm">Owner, MVD Auto Works</p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-6">
        <button className="text-gray-500 hover:text-gray-700">
        <FaArrowLeft/>
        </button>

        <button className="text-gray-500 hover:text-gray-700">
        <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
