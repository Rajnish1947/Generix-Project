

// "use client";
// import React from "react";
// import { useTheme } from "@/Context/ThemeContext/page";
// const Hero = () => {
//   const { dark, setDark } = useTheme();
//   return (
//     <section
//       className="relative bg-white min-h-[65vh] lg:min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: dark
//           ? "url('https://www.mintlify.com/startups/hero-dark.svg')"
//           : "url('https://www.mintlify.com/startups/hero-light.svg')",
//       }}
//     >
//       {/* Overlay */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-t ${dark ? "from-black/95 via-gray-900/10 to-transparent" : "from-white/90 via-white/10 to-transparent"}`}
//       ></div>

//       {/* Content */}
//       <div
//         className="relative z-10 max-w-[69rem] mx-auto  flex flex-col px-4 sm:px-6 lg:px-10
// pt-38 sm:pt-29 md:pt-36 
// pb-16 md:pb-28 lg:flex-row items-start lg:items-center gap-12"
//       >
//         <div className="lg:w-1/2  flex flex-col items-center text-center md:items-start md:text-left  ">
//           <h1 className="text-3xl max-w-[50rem] text-text-main hero-title leading-[110%] text-balance text-center sm:text-left sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-white">
//             Built for startups <br /> and scaleups
//           </h1>

//           <p className="mt-6 max-w-md md:max-w-xl text-stone-50 text-sm md:text-[16px]">
//           Ambitious startups build world-class experiences with Mintlify, scaling from pre-seed to billion dollar valuations.
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row gap-4">
//             <button className="bg-white text-gray-900 px-30 py-1 md:px-7 md:py-2 rounded-3xl font-medium hover:bg-gray-100">
//               Get Started
//             </button>

//             <button className="text-white flex items-center gap-2 font-medium">
//               Apply for Startup Program <span className="text-xl">&gt;</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";

const Hero = () => {
  const { dark } = useTheme();

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
        className={`absolute inset-0 bg-gradient-to-t ${
          dark
            ? "from-black/95 via-gray-900/10 to-transparent"
            : "from-white/90 via-white/10 to-transparent"
        }`}
      ></div>

      {/* Content */}
      <div
        className="
        relative z-50 
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
            text-3xl sm:text-3xl md:text-4xl lg:text-5xl
            max-w-[58rem]
            leading-[110%]
            font-bold
            text-white
          ">
            Built for startups <br /> and scaleups
          </h1>

          <p className="
            mt-6
            max-w-md md:max-w-3xl
            text-stone-50
            text-sm md:text-[18px]
          ">
            Ambitious startups build world-class experiences with Mintlify,
            scaling from pre-seed to billion dollar valuations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <button className="
              w-full sm:w-auto
              bg-white text-gray-900
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