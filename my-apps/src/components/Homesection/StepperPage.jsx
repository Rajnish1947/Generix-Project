
import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";

const StepperPage = () => {
  const { dark } = useTheme();

  return (
    <section
      className={`
        w-full max-w-5xl mx-auto
        mt-8 sm:mt-10 md:mt-12
        px-4 sm:px-6 md:px-8
      `}
    >
      <div
        className={`
          flex flex-col items-center justify-center text-center
          border rounded-xl sm:rounded-2xl
          py-8 sm:py-10 md:py-14
          px-4 sm:px-6 md:px-10
          gap-3 sm:gap-4 md:gap-5
          
          transition-colors
         border-secondary
        `}
      >
        {/* Badge */}
        <div
          className={`
            font-semibold
            text-sm sm:text-base md:text-lg
           text-green-700
          `}
        >
          Assistant
        </div>

        {/* Heading */}
        <h2
          className={`
            font-semibold leading-tight
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            max-w-2xl
            text-secondary
          `}
        >
          Intelligent assistance for your users
        </h2>

        {/* Description */}
        <p
          className={`
            max-w-md sm:max-w-lg md:max-w-xl
            text-sm sm:text-base md:text-lg
            leading-relaxed
           text-gray-600
          `}
        >
          Turn every documentation visit into a guided conversation. Your AI
          assistant understands context and delivers what users need.
        </p>
      </div>
    </section>
  );
};

export default StepperPage;
