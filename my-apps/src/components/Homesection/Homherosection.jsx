
import React from "react";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@/Context/ThemeContext/page";

const Homeherosection = () => {
  const { dark } = useTheme();

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen bg-cover bg-center
                 py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: dark
          ? "url('https://www.mintlify.com/hero/bg-dark.svg')"
          : "url('https://www.mintlify.com/hero/bg-light.svg')",
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          dark
            ? "from-black/95 via-gray-900/20 to-transparent"
            : "from-white/90 via-white/20 to-transparent"
        }`}
      />

      {/* Content */}
      <div
        className="relative z-10
                   max-w-5xl mx-auto
                   px-4 sm:px-6 lg:px-8 lg:pt-5
                   flex flex-col items-center text-center
                   gap-6 sm:gap-8 lg:gap-10"
      >
        {/* Badge */}
        <div className="w-full hidden md:flex justify-center">
          <div
            className="
              flex items-center justify-center gap-2
              px-2 py-1.5 sm:px-3 sm:py-2
              w-full sm:w-auto
              max-w-xs sm:max-w-md lg:max-w-lg
              bg-black/20 backdrop-blur-md
              rounded-full shadow-md
            "
          >
            <span className="bg-green-600 px-2 py-0.5 rounded-full text-white font-semibold text-xs">
              New
            </span>

            <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
              Self updating documentation with AI
            </span>

            <ChevronRight className="w-4 h-4 text-white shrink-0" />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            text-4xl   lg:text-3xl xl:text-5xl
            font-semibold leading-tight text-white
            max-w-3xl
          "
        >
          The Intelligent <br className="hidden sm:block" />
          Knowledge Platform
        </h1>

        {/* Description */}
        <p
          className="
            text-white/90
            text-sm sm:text-base lg:text-lg
            max-w-xs sm:max-w-md lg:max-w-xl
          "
        >
          Helping teams create and maintain world-class documentation built
          for both humans and AI.
        </p>

        {/* Email CTA */}
        <div
          className="
            flex items-center
            w-full sm:w-auto
            max-w-xs sm:max-w-md lg:max-w-lg
            bg-white/20 backdrop-blur-md
            rounded-full border border-white/30 shadow-md
            overflow-hidden
          "
        >
          <input
            type="email"
            placeholder="Email address"
            className="
              flex-1 px-4 py-2 sm:py-3
              outline-none bg-transparent
              placeholder-white/80 text-white
              text-sm sm:text-base
            "
          />

          <button
            className="
              text-black bg-white
              px-4 sm:px-6 py-2 sm:py-3
              m-1 font-semibold
              rounded-full
              whitespace-nowrap
              text-sm sm:text-base
              hover:bg-gray-200 transition
            "
          >
            Start now
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-8
          mt-10 sm:mt-14 lg:mt-20
        "
      >
        <img
          src={
            dark
              ? "https://www.mintlify.com/hero/hero-image-dark.svg"
              : "https://www.mintlify.com/hero/hero-image-light.svg"
          }
          alt="Hero"
          className="
            w-full p-2
            rounded-lg 
            shadow-lg
          "
        />
      </div>
    </section>
  );
};

export default Homeherosection;
