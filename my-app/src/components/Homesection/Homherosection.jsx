
// import React from "react";
// import { ChevronRight } from "lucide-react";

// const Homeherosection = () => {
//   return (
//     <section
//       className="relative min-h-screen bg-cover bg-center  py-19 items-center justify-center"
//       style={{
//         backgroundImage: "url('https://www.mintlify.com/hero/bg-light.svg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto  py-10 mb-10 px-6 text-center flex flex-col items-center gap-8">
        
//         {/* Badge */}
//         <div className="max-w-5xl w-full flex justify-center ">
//           <div className="inline-flex items-center gap-1 px-1 py-1 w-[49%] bg-black/10 shadow-md rounded-full text-sm">
            
//             <div className="bg-green-600 px-2 py-0.5 rounded-full text-white font-semibold text-xs">
//               New
//             </div>

//             <div className="text-white text-sm px-3 font-medium">
//               Self updating documentation with ai check here
//             </div>

//             <ChevronRight className="w-4 h-4 text-white" />
//           </div>
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
//           The Intelligent <br /> Knowledge Platform
//         </h1>

//         {/* Description */}
//         <p className="text-white/90 text-lg max-w-lg mx-auto">
//           Helping teams create and maintain world-class documentation built
//           for both humans and AI.
//         </p>

//         {/* Email CTA */}
//         <div className="flex bg-white/20 w-[50%] rounded-full border border-white/30 shadow-md overflow-hidden  max-w-md mx-auto">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="flex-1  placeholder-white/90  px-4 py-2 outline-none"
//           />
//           <button className="text-black bg-white px-3 py-1 m-1 font-semibold rounded-full">
//             Start now
//           </button>
//         </div>

        
        
//       </div>
//       <div className="max-w-5xl mx-auto">
//           <img
//             src="https://www.mintlify.com/hero/hero-image-light.svg"
//             alt="Hero"
//             className="w-full  "
//           />
//         </div>
//     </section>
//   );
// };

// export default Homeherosection;
import React from "react";
import { ChevronRight } from "lucide-react";

const Homeherosection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('https://www.mintlify.com/hero/bg-light.svg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b  to-white/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto py-10 px-4 sm:px-6 text-center flex flex-col items-center gap-8">
        
        {/* Badge */}
        <div className="w-full flex justify-center">
          <div
            className="
              inline-flex items-center gap-1 px-1 py-1
              w-full sm:w-[85%] md:w-[65%] lg:w-[49%]
              bg-black/10 shadow-md rounded-full text-sm
            "
          >
            <span className="bg-green-600 px-2 py-0.5 rounded-full text-white font-semibold text-xs">
              New
            </span>

            <span className="text-white text-sm px-3 font-medium">
              Self updating documentation with ai check here
            </span>

            <ChevronRight className="w-4 h-4 text-white shrink-0" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
          The Intelligent <br /> Knowledge Platform
        </h1>

        {/* Description */}
        <p className="text-white/90 text-base sm:text-lg max-w-lg mx-auto">
          Helping teams create and maintain world-class documentation built
          for both humans and AI.
        </p>

        {/* Email CTA */}
        <div
          className="
            flex items-center bg-white/20
            w-full sm:w-[85%] md:w-[65%] lg:w-[50%]
            rounded-full border border-white/30 shadow-md
            overflow-hidden max-w-md mx-auto
          "
        >
          <input
            type="email"
            placeholder="Email address"
            className="
              flex-1 px-4 py-2 outline-none
              placeholder-white/90 text-white bg-transparent
            "
          />
          <button className="text-black bg-white px-4 py-2 m-1 font-semibold rounded-full whitespace-nowrap">
            Start now
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="max-w-5xl border-none mx-auto px-4 sm:px-6 mt-10">
        <img
          src="https://www.mintlify.com/hero/hero-image-light.svg"
          alt="Hero"
          className="w-full rounded-lg"
        />
      </div>
    </section>
  );
};

export default Homeherosection;
