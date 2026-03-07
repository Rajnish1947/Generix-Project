

"use client";
import React, { useState } from "react";
import { useTheme } from "@/Context/ThemeContext/page";

const faqs = [
  {
    question: "Is the pricing seat-based or workspace based?",
    answer:
      "Our pricing is based on individual seats, but you can also choose workspace-level plans for larger teams.",
  },
  {
    question: "Are LLMs used to power the Assistant?",
    answer:
      "Yes, we leverage large language models to provide intelligent and context-aware responses in the Assistant.",
  },
  {
    question: "How do editor seat and Assistant overages work?",
    answer:
      "If you exceed your editor seat or Assistant usage, you'll be charged for overages at the rate listed in your plan.",
  },
  {
    question: "Can I set a hard-limit on my AI Assistant usage?",
    answer:
      "Absolutely! You can configure a hard limit in your account settings to prevent overuse.",
  },
  {
    question: "How long is my free trial?",
    answer:
      "Your free trial lasts 14 days from the date of signup, giving you full access to all features.",
  },
  {
    question: "How can we migrate our existing content?",
    answer:
      "You can migrate content using our import tools or by connecting your existing CMS through our integrations.",
  },
  {
    question: "Can we use our own custom domain?",
    answer:
      "Yes, custom domains are supported on all paid plans. You can configure them in your workspace settings.",
  },
  {
    question: "Are you SOC 2 certified?",
    answer:
      "Yes, we are SOC 2 Type II certified, ensuring your data security and compliance.",
  },
  {
    question: "How do I add multiple sites to my account?",
    answer:
      "You can add multiple sites from your dashboard under the 'Sites' section. Each site can have separate settings.",
  },
  {
    question: "What authentication methods do you support?",
    answer:
      "We support email/password login, single sign-on (SSO) with Google, Microsoft, and other providers.",
  },
];

export default function FaqSection() {
  const { dark } = useTheme();
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="pb-20 mx-auto w-full max-w-5xl px-6">
      <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-center text-green-600">
        FAQ
      </p>

      <h3 className="text-2xl font-medium text-center mb-10">
        Frequently Asked Questions
      </h3>

      {/* Proper Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div
              key={index}
              className={`border ${
                dark ? "border-gray-900" : "border-gray-200"
              } rounded-2xl overflow-hidden shadow-sm`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-2 text-left text-base font-medium"
              >
                {faq.question}

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15.25 6.5L9 12.75L2.75 6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`px-5 pb-4 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                  dark ? "text-gray-300" : "text-gray-600"
                } ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="pt-1">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}