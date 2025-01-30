"use client"
import React, { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { faqs } from "../lib/FaqData";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className=" px-6 py-12 md:py-16 lg:py-20 bg-gray-100 mt-20">
      <div className="lg:max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Frequently asked questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-6"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex items-center space-x-2">
                <HiQuestionMarkCircle className="text-gray-500"/>
                  <span className="text-lg font-medium text-gray-900">
                   {faq.question}
                  </span>
                </div>
                <span className="text-gray-500">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <div className="mt-3 text-gray-600">
                  {faq.answer}
                  {faq.linkText && (
                    <a
                      href="#"
                      className="text-purple-600 underline hover:text-purple-800"
                    >
                      {faq.linkText}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-purple-800 text-white rounded-lg font-medium hover:bg-yellow-500">
            See all →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
