
'use client';
import React from "react";
import { Flame, Wallpaper, Trophy, LampDesk } from "lucide-react";
import { useTheme } from "@/Context/ThemeContext/page";

const Card = () => {
  const { dark } = useTheme();

  const items = [
    {
      icon: <Wallpaper className="card-icon" />,
      title: "Discounts and credits",
      desc: "Unlock Pro plan features for free for the first six months and extended AI credits.",
    },
    {
      icon: <Trophy className="card-icon" />,
      title: "Priority support",
      desc: "Get fast support from our team, with a dedicated channel for startup founders.",
    },
    {
      icon: <LampDesk className="card-icon" />,
      title: "Startup pack",
      desc: "Access discounts and perks from popular products for startups.",
    },
    {
      icon: <Flame className="card-icon" />,
      title: "Startup survival kit",
      desc: "Get access to our startup survival kit sent to your doorstep.",
    },
  ];

  return (
    <section
      className="
      section-maxwidth mx-auto
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
            min-h-[220px] sm:min-h-[200px]
            transition duration-300 hover:scale-[1.02]
            ${dark ? "bg-neutral-900 text-primary" : "bg-cardBg text-secondary"}
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
             card-title 
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`
              card-desc
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
