
import React from "react";

const Features = () => {
  return (
    <div className="flex  flex-col items-center relative justify-center gap-4 space-y-2 py-15 mt-10 px-6">
      {/* Small heading */}
      <span className="text-green-500 text-center font-mono text-sm font-semibold leading-[150%] tracking-[0.6px] uppercase">
        Mintlify for startups
      </span>

      {/* Main heading */}
      <h3 className="text-black text-[40px] text-center font-semibold leading-[110%] tracking-[-0.8px]">
        Apply to the Mintlify startup program
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-center text-base/[150%] max-w-[640px]">
        Designed for venture-backed businesses that are just getting started.
        Receive discount to the platform, extended AI credits, priority support,
        and partnership resources to help accelerate growth.
      </p>

      {/* Button */}
      <a
        
        className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full font-medium px-6 py-[0.4375rem] w-fit mt-4 bg-black text-white border border-black shadow-sm hover:bg-black/85 transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-green-500"
      >
        Apply now
      </a>
    </div>
  );
};

export default Features;
