"use client";
import React, { useState } from "react";

const faqs = [
  "Is the pricing seat-based or workspace based?",
  "Are LLMs used to power the Assistant?",
  "How do editor seat and Assistant overages work?",
  "Can I set a hard-limit on my AI Assistant usage?",
  "How long is my free trial?",
  "How can we migrate our existing content?",
  "Can we use our own custom domain?",
  "Are you SOC 2 certified?",
  "How do I add multiple sites to my account?",
  "What authentication methods do you support?",
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-20 mx-auto w-full max-w-5xl flex flex-col px-6">

      {/* Heading */}
      <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-center text-blue-600">
        FAQ
      </p>

      <h3 className="text-2xl font-medium text-center mb-8">
        Frequently asked questions
      </h3>

      {/* Accordion Grid */}
      <div className="grid md:grid-cols-2 gap-4">

        {faqs.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-base"
              >
                {question}

                <svg
                  className={`w-4 h-4 transition-transform ${
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

              {/* Answer */}
              <div
                className={`px-5 text-sm text-gray-600 transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p>
                  This is a placeholder answer. You can replace this
                  with real FAQ content.
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}