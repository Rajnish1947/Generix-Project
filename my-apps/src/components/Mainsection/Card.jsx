
'use client';
import React from "react";
import { Flame, Wallpaper, Trophy, LampDesk } from "lucide-react";
import { useTheme } from "@/Context/ThemeContext/page";

const Card = () => {
  const { dark } = useTheme();

  const items = [
    {
      icon: <Wallpaper className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Discounts and credits",
      desc: "Unlock Pro plan features for free for the first six months and extended AI credits.",
    },
    {
      icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Priority support",
      desc: "Get fast support from our team, with a dedicated channel for startup founders.",
    },
    {
      icon: <LampDesk className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Startup pack",
      desc: "Access discounts and perks from popular products for startups.",
    },
    {
      icon: <Flame className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Startup survival kit",
      desc: "Get access to our startup survival kit sent to your doorstep.",
    },
  ];

  return (
    <section
      className="
      max-w-6xl mx-auto
      px-4 sm:px-6 lg:px-8
      py-12 sm:py-16 lg:py-20
      "
    >
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-4 sm:gap-6 lg:gap-8
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`
            rounded-2xl
            p-5 sm:p-6 lg:p-8
            flex flex-col items-center text-center
            min-h-[220px] sm:min-h-[240px]
            transition duration-300 hover:scale-[1.02]
            ${dark ? "bg-neutral-900 text-white" : "bg-gray-100 text-black"}
            `}
          >
            {/* Icon */}
            <div className="mb-3 sm:mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3
              className="
              mb-2 sm:mb-3
              text-base sm:text-lg lg:text-xl
              font-semibold
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`
              text-sm sm:text-[15px] lg:text-base
              leading-relaxed
              ${dark ? "text-gray-400" : "text-gray-600"}
              `}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
