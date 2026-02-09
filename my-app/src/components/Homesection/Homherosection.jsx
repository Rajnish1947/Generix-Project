import React from "react";

const Homeherosection = () => {
  return (
    <section
      className="relative bg-white min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.mintlify.com/hero/bg-light.svg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-10  pt-32 pb-28 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        <div className="items-center justify-center">
          <div className="mt-8 ">
           

            <button className="text-white flex items-center gap-2 font-medium">
              Apply for Startup Program <span className="text-xl">&gt;</span>
            </button>
          </div>
          <h1 className="text-5xl font-bold leading-tight text-white">
            The Intelligent <br /> Knowledge Platform
          </h1>

          <p className="mt-6 text-stone-50 text-lg">
            Helping teams create and maintain world-class documentation built
            for both humans and AI
          </p>

           <div>
          <img
            src="https://www.mintlify.com/hero/hero-image-light.svg"
            alt=""
          />
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default Homeherosection;
