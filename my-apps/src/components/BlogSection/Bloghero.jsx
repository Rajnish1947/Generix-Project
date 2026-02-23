
"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";

const BlogHero = () => {
  const { dark } = useTheme();

  return (
    <section
      className={`w-full flex justify-center items-center flex-col
      ${dark ? "bg-black" : ""}
      mx-auto
      pt-24 md:pt-28
      pb-6 md:pb-10
      px-4 sm:px-6`}
    >
      {/* Card Container */}
      <div
        className="
        relative w-full max-w-[61rem] mx-auto
        min-h-[440px]
        
        md:min-h-[460px]
        lg:min-h-[480px]
        rounded-3xl overflow-hidden
        flex items-center
        "
      >
        {/* Background Image */}
        <img
          src="https://www.mintlify.com/_next/image?url=%2Fimages%2F2025-year-in-review.png&w=1200&q=75"
          alt="Blog Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div
          className="
          absolute inset-0 z-10
          flex flex-col justify-end lg:justify-center
mt-15 lg:mt-44 
          px-8 py-18
          
          md:px-12 md:py-10
          lg:px-10 lg:py-0
        "
        >
          {/* Text Content */}
          <div className="space-y-3 sm:space-y-4 max-w-md lg:max-w-xl">

            {/* Date */}
            <div className="text-xs sm:text-sm text-white/60">
              December 31, 2025 · 4 min read
            </div>

            {/* Title */}
            <h2
              className="
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              font-semibold
              text-white
              leading-snug
              "
            >
              2025: A Year in Review
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/70">
              Scaling to 8-figures ARR, onboarding 100,000+ companies, and evolving
              from a documentation platform into an infrastructure layer for how
              AI understands technical knowledge.
            </p>

          </div>

          {/* Author */}
          <div className="mt-5 sm:mt-6 flex items-center gap-3 sm:gap-4">

            <img
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 object-cover"
              src="https://www.mintlify.com/blog/authors/han.webp"
              alt="Author"
            />

            <div className="text-white">
              <p className="text-sm font-medium">Han Wang</p>
              <p className="text-xs sm:text-sm text-white/60">Co-Founder</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogHero;