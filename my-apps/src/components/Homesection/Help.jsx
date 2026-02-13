import React from "react";
import { ChevronRight } from "lucide-react";
const Help = () => {
  const items = [
    {
      title: "Pricing on your terms",
      desc: "Pick the plan that works best for you",
      link: "mailto:gtm@mintlify.com",
      linkText: "pricing details",
      icon: (
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 shrink-0 select-none text-green-900"
        >
          <path
            opacity="0.2"
            d="M7.56788 0.89724C8.72116 0.409204 10 1.2559 10 2.509V6H8.75C7.78379 6 7 6.78379 7 7.75V16.25C7 16.6631 7.33394 16.9981 7.74658 17H2.75C2.33579 17 2 16.6642 2 16.25V4.41199C2 3.7099 2.41973 3.07374 3.06862 2.79992L7.56788 0.89724Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75 6C7.78379 6 7 6.78379 7 7.75V16.25C7 16.6642 7.33579 17 7.75 17H15.25C15.6642 17 16 16.6642 16 16.25V7.75C16 6.78379 15.2162 6 14.25 6H8.75ZM10.25 9C10.6642 9 11 9.33579 11 9.75V10.25C11 10.6642 10.6642 11 10.25 11C9.83579 11 9.5 10.6642 9.5 10.25V9.75C9.5 9.33579 9.83579 9 10.25 9ZM13.5 9.75C13.5 9.33579 13.1642 9 12.75 9C12.3358 9 12 9.33579 12 9.75V10.25C12 10.6642 12.3358 11 12.75 11C13.1642 11 13.5 10.6642 13.5 10.25V9.75ZM10.25 12C10.6642 12 11 12.3358 11 12.75V13.25C11 13.6642 10.6642 14 10.25 14C9.83579 14 9.5 13.6642 9.5 13.25V12.75C9.5 12.3358 9.83579 12 10.25 12ZM13.5 12.75C13.5 12.3358 13.1642 12 12.75 12C12.3358 12 12 12.3358 12 12.75V13.25C12 13.6642 12.3358 14 12.75 14C13.1642 14 13.5 13.6642 13.5 13.25V12.75Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 16.25C1 15.8358 1.33579 15.5 1.75 15.5H16.25C16.6642 15.5 17 15.8358 17 16.25C17 16.6642 16.6642 17 16.25 17H1.75C1.33579 17 1 16.6642 1 16.25Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Start building",
      desc: "Deploy your documentation in minutes",
      link: "mailto:founders@mintlify.com",
      linkText: "Quickstart",
      icon: (
        <svg
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-8 shrink-0 select-none text-green-900"
        >
          <path
            d="M5.37701 2.01401C3.78843 2.01401 2.56755 2.561 1.85582 2.9811C1.31588 3.29978 1.00101 3.87517 1.00101 4.48701V13.57C1.00101 14.7707 2.20639 15.6627 3.36965 15.2049C3.9013 14.9951 4.57667 14.8229 5.36584 14.822C6.60305 14.8203 7.5635 15.2391 8.13255 15.5674C8.39841 15.7201 8.69579 15.801 9.00001 15.801V3.05078C8.29992 2.62423 7.0284 2.01401 5.37701 2.01401Z"
            fill="currentColor"
          />
          <path
            opacity="0.2"
            d="M12.623 2.01401C14.2116 2.01401 15.4325 2.561 16.1442 2.9811C16.6841 3.29978 16.999 3.87517 16.999 4.48701V13.57C16.999 14.7707 15.7936 15.6627 14.6304 15.2049C14.0987 14.9951 13.4233 14.8229 12.6342 14.822C11.397 14.8203 10.4379 15.2383 9.86882 15.5666C9.60296 15.7193 9.30422 15.801 9 15.801V3.05078C9.70009 2.62423 10.9716 2.01401 12.623 2.01401Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
   <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
        Make documentation <br className="hidden sm:block" />
        your winning advantage
      </h3>

      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
        Join the leaders of tomorrow to future proof your documentation today.
      </p>
    </div>

    {/* Grid */}
    <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 rounded-3xl overflow-hidden  bg-white">

      {items.map((item, i) => (
        <div
          key={i}
          className={`
            flex flex-col items-center text-center
            gap-5 sm:gap-6
            p-8 sm:p-10
            transition hover:bg-gray-50

            /* horizontal divider */
            ${i < 2 ? "sm:border-b border-gray-200" : ""}

            /* vertical divider */
            ${i % 2 === 0 ? "sm:border-r border-gray-200" : ""}
          `}
        >

          {/* Icon */}
          <div className="p-3 sm:p-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="w-6 h-6 sm:w-8 sm:h-8">
              {item.icon}
            </div>
          </div>

          {/* Text */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              {item.title}
            </h4>

            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xs mx-auto">
              {item.desc}
            </p>
          </div>

          {/* Link */}
          <a
            href={item.link}
            className="flex items-center gap-2 text-sm sm:text-base text-green-700 font-medium hover:translate-x-1 transition"
          >
            {item.linkText}
            <ChevronRight size={16} />
          </a>

        </div>
      ))}

    </div>
  </div>
</section>

  );
};

export default Help;
