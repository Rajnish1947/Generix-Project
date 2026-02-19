"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";
const Hero = () => {
  const { dark, setDark } = useTheme();
  return (
    <section
      className="relative bg-white min-h-screen bg-cover bg-center"
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
pt-20 sm:pt-24 md:pt-32
pb-16 md:pb-28 lg:flex-row items-start lg:items-center gap-12"
      >
        <div className="lg:w-1/2 ">
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
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
