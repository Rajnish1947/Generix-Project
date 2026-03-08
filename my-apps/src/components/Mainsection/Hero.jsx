

"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";

const Hero = () => {
  const { dark } = useTheme();

  return (
    <section
      className="relative  min-h-[65vh] lg:min-h-screen  bg-cover bg-center"
      style={{
        backgroundImage: dark
          ? "url('https://www.mintlify.com/startups/hero-dark.svg')"
          : "url('https://www.mintlify.com/startups/hero-light.svg')",
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          dark
            ? "from-black/95 via-gray-900/10 to-transparent"
            : "from-white/90 via-white/10 to-transparent"
        }`}
      ></div>

      {/* Content */}
      <div
        className="
        relative z-40 
        max-w-[69rem] mx-auto
        flex flex-col
        px-4 sm:px-6 lg:px-10
        pt-28 sm:pt-32 md:pt-36 lg:pt-40
        pb-16 md:pb-28
        items-center md:items-start
        text-center md:text-left
        gap-10
        "
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start">

          <h1 className="
            heading-hero
            max-w-[58rem]
           
            text-white
          ">
            Built for startups <br /> and scaleups
          </h1>

          <p className="
            mt-6
            max-w-md md:max-w-3xl
            text-stone-50
            hero-description
          ">
            Ambitious startups build world-class experiences with Mintlify,
            scaling from pre-seed to billion dollar valuations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <button className="
              w-full sm:w-auto
              bg-white text-black
              px-6 md:px-7
              py-2
              rounded-3xl
              font-medium
              hover:bg-gray-100
              transition
            ">
              Get Started
            </button>

            <button className="
              w-full sm:w-auto
              text-white
              flex items-center justify-center sm:justify-start
              gap-2
              font-medium
            ">
              Apply for Startup Program
              <span className="text-xl">&gt;</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;