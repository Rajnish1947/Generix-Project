"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
const filters = ["All", "AI", "Developer tools", "Finance", "Enterprise"];


import customers from "@/data/customers.json";
export default function TrustedCustomers() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? customers
      : customers.filter((c) => c.category === active);

  return (
    <section className="py-20">
      {/* Header */}
      <div className=" max-w-[72rem] mx-auto px-6 my-10">
        <p className="uppercase font-mono text-xs tracking-wide text-gray-800">
          Trusted by the best
        </p>
        <h2 className="text-xl text-gray-900 font-medium mt-2">
          These teams ship to millions of users every day
        </h2>
      </div>

      {/* Filters */}
      <div className="max-w-[69rem] mx-auto px-6 mb-8">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition
                ${
                  active === filter
                    ? "bg-black text-white"
                    : "bg-gray-50 text-gray-950 hover:text-black"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((customer, index) => {
          const isFeatured = customer.featured;

          return (
            <div
              key={index}
              className={`group rounded-3xl overflow-hidden bg-bgray transition hover:bg-gray-100
        ${isFeatured ? "md:col-span-2 lg:col-span-2" : ""}
      `}
            >
              {/* FEATURED LAYOUT */}
              {isFeatured ? (
                <div className="grid md:grid-cols-[1.0fr_0.7fr] h-full">
                  {/* Content */}
                  <div className="px-[1rem] py-6 flex flex-col space-y-12  justify-between">
                    <div className="py-3">
                      <h3 className="text-lg text-blue-600 font-semibold mb-4">
                        {customer.name}
                      </h3>

                      {customer.title && (
                        <div className="mb-3">
                          <p className="text-3xl text-gray-800 font-medium">
                            {customer.title}
                          </p>
                          <p className="text-sm text-gray-800">
                            {customer.subtitle}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="py-3 w-full">
                      <hr className="my-4 text-gray-800" />
                      <p className="text-gray-800 text-[16px] ">
                        {customer.description}
                      </p>
                      <span className="mt-4 text-sm font-medium flex items-center gap-2">
                        Read story <ChevronRight size={12} />
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative ml-3 aspect-[16/9] md:aspect-auto">
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="group relative h-full rounded-2xl overflow-hidden bg-black/5 transition-colors flex flex-col">
                
                  <div className="relative aspect-[4/3]">
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Logo Overlay Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={customer.logo}
                        alt={customer.name}
                        className="h-8 w-auto max-w-[60%] brightness-0 invert"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1">
                    <p className="text-gray-800 line-clamp-3">
                      {customer.description}
                    </p>
                  </div>

                  {/* Read Story */}
                  <div className="w-fit px-5 pb-5">
                    <span className="group flex items-center gap-1.5 text-[15px] font-medium">
                      Read story
                      <svg
                        viewBox="0 0 18 18"
                        className="size-2.5 -rotate-90 group-hover:translate-x-0.5 transition-transform duration-150"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                      >
                        <path
                          d="M15.25 6.5L9 12.75L2.75 6.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
