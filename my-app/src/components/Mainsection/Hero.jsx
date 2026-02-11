
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-white min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.mintlify.com/startups/hero-light.svg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-10  pt-32 pb-28 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        <div className="lg:w-1/2 ">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Built for startups <br /> and scaleups
          </h1>

          <p className="mt-6 text-stone-50 text-lg">
            Ambitious startups build world-class experiences with Mintlify,
            scaling from pre-seed to billion dollar valuations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-gray-700 px-7 py-2 rounded-3xl font-medium hover:bg-gray-100">
              Get Started
            </button>

            <button className="text-white flex items-center gap-2 font-medium">
              Apply for Startup Program <span className="text-xl">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
