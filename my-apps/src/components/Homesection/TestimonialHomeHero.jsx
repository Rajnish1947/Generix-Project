"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const TestimonialHomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Analogue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-3 md:w-6 text-gray-500 "
          fill="currentColor"
        >
          <path d="M5.468 12.804a5.145 5.145 0 10-.644 10.27 5.145 5.145 0 00.644-10.27zm17.841 2.562L16.45 3.484a5.146 5.146 0 00-8.912 5.15l6.86 11.878a5.148 5.148 0 007.031 1.885 5.146 5.146 0 001.881-7.031z" />
        </svg>
      ),
      bg: "https://www.mintlify.com/enterprise/anthropic.svg",
    },
    {
      title: "Congition",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="md:w-6 w-3 text-gray-500 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Continente</title>
          <path d="M11.9922 0C5.3736 0 .0078 5.3814.0078 12c0 6.6334 5.3509 12 11.9844 12s12-5.3666 12-12-5.3814-12-12-12m0 2.504c5.2472 0 9.5117 4.2637 9.5117 9.496 0 5.232-4.2645 9.5098-9.5117 9.5098S2.496 17.2618 2.496 12c0-5.2472 4.249-9.496 9.496-9.496m-.0586 2.3847c-3.9354 0-7.127 3.1766-7.127 7.127s3.1916 7.1406 7.127 7.1406c1.9677 0 3.7551-.7908 5.0371-2.088a1.89 1.89 0 0 0 0-2.6835c-.7304-.7455-1.9226-.7455-2.668 0-.6111.6113-1.4449.9843-2.3691.9843-1.8484 0-3.3398-1.52-3.3398-3.3535s1.4914-3.3398 3.3398-3.3398v-.0156c.9242 0 1.758.3731 2.3691.9843.7305.7305 1.9227.7305 2.668 0s.7453-1.9233 0-2.6836c-1.282-1.282-3.0694-2.0722-5.0371-2.0722m.0586 5.7539c-.7602 0-1.3711.6128-1.3711 1.373s.6109 1.3711 1.371 1.3711c.7604 0 1.3712-.6258 1.3712-1.371 0-.7454-.6108-1.3731-1.3711-1.3731" />
        </svg>
      ),
      bg: "https://www.mintlify.com/enterprise/coinbase.svg",
    },
    {
      title: "perplexity",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="md:w-6 w-3 text-gray-500 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Perplexity</title>
          <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
        </svg>
      ),
      bg: "https://www.mintlify.com/startups/vercel.png",
    },
    {
      title: "Varcel",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="md:w-6 w-3 text-black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Vercel</title>
          <path d="m12 1.608 12 20.784H0Z" />
        </svg>
      ),
      bg: "https://www.mintlify.com/startups/resend.png",
    },
    {
      title: "replit",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="md:w-6 w-3 text-gray-500 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Replit</title>
          <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z" />
        </svg>
      ),
      bg: "https://www.mintlify.com/startups/dub.png",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center flex-col bg-gray-100 mx-auto mt-0 py-6 px-6">
      <div className="relative w-full max-w-5xl h-[380px] lg:h-[530px] rounded-3xl overflow-hidden">
        <img
          src={items[activeIndex].bg}
          alt="Y Combinator background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 hover:bg-black/25 transition-colors" />

        {/* CONTENT WRAPPER (padding moved here) */}
        <div className="relative z-10 h-full p-6 lg:p-16">
          <div className="h-7 font-semibold space-y-5 text-white lg:h-8">
            <div className="font-semibold"> CUSTOMER STORY</div>
            <div className="text-2xl">
              SEE how Anthropic accelerates <br /> Ai Developnent With Minitlify
            </div>
            <div className="flex gap-2">
              <div>Read Story</div>
              <span>
                <ChevronRight className="mt-2" size={18} />
              </span>
            </div>
          </div>

          <div className="flex items-center h-full">
            <div
              className="
            max-w-md
            text-center
            lg:text-start
            mt-0
            lg:mt-19
            py-0
            lg:py-18
            font-semibold
          "
            >
              <div className="text-white flex gap-10 mt-30 tracking-widest">
                <div>
                  <div className="text-3xl font-semibold">2M+</div>
                  <div className="text-[14px] text-white/80">
                    Montheley Active developer
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-semibold">3+</div>
                  <div className="text-sm text-white/80">
                    Montheley Active developer api code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logos (unchanged) */}
      <div className="md:mx-9 mx-2 my-2 md:my-5 flex mt-3 justify-between md:px-10 px-4 md:py-9 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="flex cursor-pointer items-center gap-1"
          >
            {item.icon}
            <span className="md:text-2xl text-[10px] font-medium text-gray-500 leading-none">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialHomeHero;
