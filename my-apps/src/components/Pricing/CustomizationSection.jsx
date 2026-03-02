"use client";
import React from "react";

const features = [
  {
    name: "Built-in components",
    hobby: true,
    pro: false,
    enterprise: false,
  },
  {
    name: "Custom components",
    hobby: true,
    pro: false,
    enterprise: false,
  },
  {
    name: "Custom CSS and JS",
    hobby: true,
    pro: false,
    enterprise: false,
  },
  {
    name: "White labeling",
    hobby: false,
    pro: false,
    enterprise: true,
  },
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 14 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
  >
    <path
      d="M0.75 6.5L4.5 10.25L13.25 1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CustomizationSection() {
  return (
    <section className="relative mt-20 max-w-6xl mx-auto px-6">

      {/* Section Title */}
      <div className="flex items-center gap-2 pt-10 mb-6 md:sticky md:top-24 z-10 w-max">
        <span className="text-lg font-semibold">
          Customization
        </span>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 max-md:grid-cols-2 border-b pb-3 text-sm font-medium text-gray-500">
        <div></div>
        <div className="text-center hidden md:block">Hobby</div>
        <div className="text-center hidden md:block">Pro</div>
        <div className="text-center hidden md:block">Enterprise</div>
      </div>

      {/* Features */}
      {features.map((feature, index) => (
        <div
          key={index}
          className="grid grid-cols-4 max-md:grid-cols-2 border-b py-4 items-center"
        >
          <div className="text-sm text-gray-600">
            {feature.name}
          </div>

          {/* Hobby */}
          <div className="flex justify-center hidden md:flex">
            {feature.hobby && <CheckIcon />}
          </div>

          {/* Pro */}
          <div className="flex justify-center hidden md:flex">
            {feature.pro && <CheckIcon />}
          </div>

          {/* Enterprise */}
          <div className="flex justify-center hidden md:flex">
            {feature.enterprise && <CheckIcon />}
          </div>

          {/* Mobile View (show only Hobby as example) */}
          <div className="md:hidden flex justify-end">
            {feature.hobby && <CheckIcon />}
          </div>
        </div>
      ))}
    </section>
  );
}