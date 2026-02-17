
import React from "react";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@/Context/ThemeContext/page";

const HelpCTA = () => {
  const { dark } = useTheme();

  const items = [
    {
      title: "Startup sales",
      desc: "Get a custom proposal from our sales team",
      link: "mailto:gtm@mintlify.com",
      linkText: "Contact sales",
      icon: (
        <svg viewBox="0 0 16 16" className="size-7 text-green-600">
          <rect width="16" height="12" y="4" rx="3" fill="currentColor" opacity="0.2" />
          <rect width="6" height="4" x="5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Contact the founder",
      desc: "Yes, you can reach out to our founders ",
      link: "mailto:founders@mintlify.com",
      linkText: "Contact founders",
      icon: (
        <svg viewBox="0 0 16 16" className="size-8 text-green-600">
          <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.2" />
          <circle cx="8" cy="6" r="2" fill="currentColor" />
          <path d="M3 14c1-3 9-3 10 0" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Quickstart guide",
      desc: "Learn more about how to get started right ",
      link: "/docs",
      linkText: "Go to documentation",
      icon: (
        <svg viewBox="0 0 16 16" className="size-8 text-green-600">
          <path d="M2 2h5a3 3 0 013 3v9a3 3 0 00-3-3H2z" fill="currentColor" />
          <path d="M14 2h-5a3 3 0 00-3 3v9a3 3 0 013-3h5z" fill="currentColor" opacity="0.2" />
        </svg>
      ),
    },
    {
      title: "Guide to technical writing",
      desc: "A  how to write great documentation",
      link: "/guides",
      linkText: "Open guide",
      icon: (
        <svg viewBox="0 0 18 18" className="size-8 text-green-600">
          <circle cx="9" cy="9" r="8" fill="currentColor" opacity="0.2" />
          <path d="M9 4v10M4 9h10" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className={`relative py-28 px-6 transition-colors duration-300 ${
        dark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h3 className="text-[45px] font-semibold text-center">
          Need help?
        </h3>

        <p className={`mt-4 text-center ${dark ? "text-white/70" : "text-gray-600"}`}>
          Join the leaders of tomorrow to future proof your documentation today.
        </p>

        {/* Grid */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-2 rounded-3xl overflow-hidden ${
            dark ? "bg-black  " : "  "
          }`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center text-center gap-6 p-10
                transition-colors duration-300
                ${dark ? "border-gray-800" : "border-gray-200"}
                ${i < 2 ? "sm:border-b" : ""}
                ${i % 2 === 0 ? "sm:border-r" : ""}
              `}
            >
              {/* Icon */}
              <div
                className={`p-3 rounded-2xl border shadow-sm ${
                  dark
                    ? "bg-black border-gray-700"
                    : " border-gray-200"
                }`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className={`text-xl font-medium ${dark ? "text-white" : "text-gray-900"}`}>
                  {item.title}
                </h4>
                <p className={`mt-2 max-w-xs ${dark ? "text-gray-400" : "text-gray-600"}`}>
                  {item.desc}
                </p>
              </div>

              {/* Link */}
              <a
                href={item.link}
                className="flex items-center gap-2 font-medium text-green-600 hover:translate-x-1 transition"
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

export default HelpCTA;
