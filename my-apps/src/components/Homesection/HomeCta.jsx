"use client";

import React, { useEffect, useState } from "react";
import { Copy, Check, ArrowRight } from "lucide-react";
const HomeCta = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 8000); // 8 sec delay only for last circle

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto py-8 mt-10 px-6">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-black text-[38px] font-semibold leading-[110%] tracking-[-0.8px]">
          Built for the intelligence age
        </h3>

        <p className="text-gray-500 text-base leading-[150%] max-w-[640px]">
          Integrate AI into every part of your docs lifecycle. Woven into how
          your knowledge is written, maintained, and understood by both users
          and LLMs.
        </p>
      </div>

      {/* Content */}
      <div className="flex gap-4 mt-10">
        {/* Left */}
        <div className="w-1/2 border rounded-lg  border-gray-200 p-4">
          {/* Text */}
          <div className="space-y-3 max-w-sm px-2 py-4">
            <div className="font-medium text-green-400">LLMs.txt & MCP</div>
            <div className="font-semibold text-2xl">
              Built for both people and AI
            </div>
            <div className="text-md  text-gray-800">
              Ensure your product shows up in the AI workflows users already
              rely on. We support llms.txt, MCP, and whatever comes next.
            </div>
          </div>

          {/* Stacked UI */}
          <div className="relative px-2 py-5 mt-19 h-[300px]">
            {/* Back layer */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%]
    border border-gray-300 rounded-xl p-4 bg-white z-[10]"
            >
              <div className="bg-gray-100 justify-start items-start px-2 py-2"></div>
            </div>

            {/* Middle layer */}
            <div
              className="absolute top-6 left-1/2 -translate-x-1/2 w-[70%]
    rounded-xl p-4 bg-green-600 z-[20]"
            ></div>

            {/* Front layer */}
            <div
              className="absolute top-12 left-1/2 -translate-x-1/2 w-[78%]
    border border-gray-300 rounded-xl bg-white z-[30]"
            >
              <div className="bg-gray-100 py-3 m-2 rounded-md"></div>
              <div className="bg-gray-100 py-3 m-2 rounded-md"></div>
              <div className="flex justify-center   px-2 py-3 text-sm">
                <div className="flex items-center justify-center gap-2 px-2 py-1 border border-gray-200 rounded">
                  <Copy className="w-4 h-4" />
                  <span>Copy page</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 border border-gray-200 p-4">
          <div className="space-y-3 max-w-sm px-2 py-4">
            <div className="font-medium text-green-800">agent</div>
            <div className="font-semibold text-2xl">
              Self-updating knowledge management
            </div>
            <div className="text-md  text-gray-800">
              Draft, edit, and maintain content with a context-aware agent. Move
              faster and more consistently without the documentation debt.
            </div>
          </div>

          <div className="relative px-2 mt-7 py-5">
            {/* Line (centered) */}
            <div className="absolute top-1/2  mx-5 w-sm h-[1px] bg-gray-400" />

            {/* Circles */}
            <div className="relative z-10 flex mx-5 justify-between">
              {[0, 1, 2, 3].map((_, i) => {
                const isLast = i === 3;
                const isCompleted = !isLast || done;

                return (
                  <div
                    key={i}
                    className={`w-15 h-15 flex items-center justify-center rounded-full border transition-all duration-500
            ${
              isCompleted
                ? "bg-green-600 border-green-600 text-white"
                : "bg-white border-gray-300"
            }`}
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
    </div>
  );
};

export default HomeCta;
