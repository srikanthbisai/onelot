import React from 'react';
import { features } from '../lib/FeatureData';
import { FeatureCard } from '../components/FeatureCard';


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
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
