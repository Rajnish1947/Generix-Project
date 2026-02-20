"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";
const Hero = () => {
  const { dark, setDark } = useTheme();
  return (
    <section
      className="relative bg-white min-h-[65vh] lg:min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: dark
          ? "url('https://www.mintlify.com/startups/hero-dark.svg')"
          : "url('https://www.mintlify.com/startups/hero-light.svg')",
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${dark ? "from-black/95 via-gray-900/10 to-transparent" : "from-white/90 via-white/10 to-transparent"}`}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto  flex flex-col px-4 sm:px-6 lg:px-10
pt-38 sm:pt-29 md:pt-32 
pb-16 md:pb-28 lg:flex-row items-start lg:items-center gap-12"
      >
        <div className="lg:w-1/2  flex flex-col items-center text-center md:items-start md:text-left  ">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
            Built for startups <br /> and scaleups
          </h1>

          <p className="mt-6 max-w-md md:max-w-xl text-stone-50 text-sm md:text-[16px]">
          Ambitious startups build world-class experiences with Mintlify, scaling from pre-seed to billion dollar valuations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-gray-900 px-30 py-1 md:px-7 md:py-2 rounded-3xl font-medium hover:bg-gray-100">
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
