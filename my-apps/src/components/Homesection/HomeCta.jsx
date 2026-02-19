
"use client";
import { useTheme } from "@/Context/ThemeContext/page";
import React, { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

const HomeCta = () => {
  const [done, setDone] = useState(false);
  const { dark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 mt-10">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h3
          className={`
            font-bold tracking-tight leading-tight
            text-2xl sm:text-3xl md:text-4xl lg:text-[38px]
            ${dark ? "text-white" : "text-black"}
          `}
        >
          Built for the intelligence age
        </h3>

        <p
          className={`
            text-sm sm:text-base md:text-lg
            ${dark ? "text-white/80" : "text-gray-600"}
          `}
        >
          Integrate AI into every part of your docs lifecycle. Woven into how
          your knowledge is written, maintained, and understood by both users
          and LLMs.
        </p>
      </div>

      {/* Cards container */}
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        
        {/* LEFT CARD */}
        <div
          className={`
            w-full md:w-1/2 border rounded-2xl p-4 md:p-6
            ${dark ? "border-gray-800 bg-black" : "border-gray-200 bg-white"}
          `}
        >
          <div className="space-y-3">
            <div className="text-green-700 font-medium text-sm">
              LLMs.txt & MCP
            </div>

            <div className="font-semibold text-xl md:text-2xl">
              Built for both people and AI
            </div>

            <div className={`${dark ? "text-white/80" : "text-gray-600"}`}>
              Ensure your product shows up in the AI workflows users already
              rely on.
            </div>
          </div>

          {/* Stacked cards */}
          <div className="relative mt-8 h-[200px] sm:h-[240px] md:h-[280px]">
            
            {/* back */}
            <div
              className={`
                absolute top-0 left-1/2 -translate-x-1/2
                w-[60%] sm:w-[55%]
                border rounded-xl p-4
                ${dark ? "border-gray-700 bg-black" : "border-gray-300 bg-white"}
              `}
            />

            {/* middle */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[75%] sm:w-[70%] bg-green-900 rounded-xl h-[70px]" />

            {/* front */}
            <div
              className={`
                absolute top-8 left-1/2 -translate-x-1/2
                w-[85%] sm:w-[80%]
                border rounded-xl
                ${dark ? "border-gray-700 bg-black" : "border-gray-300 bg-white"}
              `}
            >
              <div className={`${dark ? "bg-gray-900" : "bg-gray-100"} m-2 h-8 rounded`} />
              <div className={`${dark ? "bg-gray-900" : "bg-gray-100"} m-2 h-8 rounded`} />

              <div className="flex justify-center p-3">
                <div className="flex items-center gap-2 border px-3 py-1 rounded text-sm">
                  <Copy className="w-4 h-4" />
                  Copy page
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className={`
            w-full md:w-1/2 border rounded-2xl p-4 md:p-6
            ${dark ? "border-gray-800 bg-black" : "border-gray-200 bg-white"}
          `}
        >
          <div className="space-y-3">
            <div className="text-green-700 font-medium text-sm">
              AGENT
            </div>

            <div className="font-semibold text-xl md:text-2xl">
              Self-updating knowledge management
            </div>

            <div className={`${dark ? "text-white/80" : "text-gray-600"}`}>
              Draft, edit, and maintain content with a context-aware agent.
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mt-10">
            
            {/* line */}
            <div
              className={`
                absolute top-1/2 left-0 w-full h-[2px]
                ${dark ? "bg-gray-700" : "bg-gray-300"}
              `}
            />

            {/* circles */}
            <div className="relative flex justify-between">
              {[0, 1, 2, 3].map((_, i) => {
                const isLast = i === 3;
                const isCompleted = !isLast || done;

                return (
                  <div
                    key={i}
                    className={`
                      w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                      flex items-center justify-center
                      rounded-full border shadow-md
                      transition-all duration-500
                      ${
                        isCompleted
                          ? "bg-green-900 text-white border-green-900"
                          : "bg-white border-gray-300"
                      }
                    `}
                  >
                    {isCompleted ? (
                      <Check size={18} />
                    ) : (
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeCta;
