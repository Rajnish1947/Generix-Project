
import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";

const FounderNote = () => {
  const { dark } = useTheme();

  return (
    <section
      className={`w-full flex items-center justify-center py-32 px-6 ${
        dark ? "bg-black" : "bg-neutral-50"
      }`}
    >
      <div
        className={`relative max-w-xl w-full p-10 md:p-12 rounded-lg shadow-sm ${
          dark ? "bg-neutral-900" : "bg-white"
        }`}
      >
        {/* Decorative underline SVG */}
        <svg
          className={`absolute -bottom-4 right-2 -z-10 blur-[2px] ${
            dark ? "text-white" : "text-black"
          }`}
          width="289"
          height="34"
          viewBox="0 0 289 34"
          fill="none"
          aria-hidden="true"
        >
          <path
            opacity="0.2"
            d="M288.458 33.3723C242.931 18.8686 83.231 13.1837 0 9.53782L288.458 0V33.3723Z"
            fill="currentColor"
          />
        </svg>

        {/* Heading */}
        <h3
          className={`text-2xl font-medium tracking-tight ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          From one founder to another
        </h3>

        {/* Content */}
        <p
          className={`mt-4 text-base leading-relaxed max-w-[464px] ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Supporting startups and empowering builders is in our DNA.
          <br />
          <br />
          Mintlify exists because we went through the messy, uncertain,
          pivot-hell part of building a company.
          <br />
          <br />
          We’ve had stretches where nothing worked (7 pivots, to be exact).
          Where every week felt like a new idea and a new letdown.
          <br />
          <br />
          So if things feel hard right now, we get it. Truly.
          <br />
          <br />
          This program is just a small way for us to stay close to our roots and
          support other teams still in the thick of it.
          <br />
          <br />
          If there’s anything else we can do to help, reach out.
        </p>

        {/* Divider */}
        <hr
          className={`w-[120px] my-8 ${
            dark ? "border-neutral-700" : "border-gray-200"
          }`}
        />

        {/* Signature */}
        <div
          className={`py-1 ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <div className="text-[20px]/[150%] font-sans font-normal my-2 tracking-[-0.24px]">
            Han & Hahnbee
          </div>

          <div className={dark ? "text-gray-300" : "text-gray-700"}>
            FOUNDERS OF MINTLIFY
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
