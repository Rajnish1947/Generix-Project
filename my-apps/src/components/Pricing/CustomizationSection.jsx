"use client";
import { useState } from "react";

const plans = [
  {
    name: "Hobby",
    icon: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 select-none size-4.5"
      >
        <path
          d="M2.60517 13.1674C3.69057 10.7157 6.14167 9 8.99998 9C11.7634 9 14.1462 10.6037 15.2822 12.9257C15.3564 13.0774 15.4289 13.2326 15.4797 13.3894C15.8649 14.5805 15.1811 15.8552 13.9874 16.2313C12.705 16.6354 11.0072 17 8.99998 17C6.99282 17 5.29502 16.6354 4.01258 16.2313C2.74424 15.8317 2.05161 14.4186 2.60517 13.1674Z"
          fill="currentColor"
        ></path>
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    text: "Get started",
  },
  {
    name: "Pro",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 select-none size-4.5"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.46148 7.63048C2.87064 7.62076 2.35841 7.67397 1.95575 7.74172C1.6394 7.79494 1.31809 7.86129 1.01562 7.97129C0.70943 8.08724 0.36321 7.99117 0.16061 7.73371C-0.0425085 7.4756 -0.0540475 7.11534 0.132141 6.84476L2.38782 3.5666C2.86364 2.89451 3.44415 2.53832 4.13069 2.42604C4.75112 2.32456 5.41491 2.43441 6.02435 2.54367L7.05109 2.7275C10.8169 -0.404221 14.9351 0.00110188 15.2994 0.0444519C15.6433 0.0853719 15.9145 0.356442 15.9555 0.700322C15.9989 1.06405 16.4042 5.18313 13.2724 8.94897L13.4562 9.9755C13.5655 10.585 13.6754 11.2487 13.5739 11.8692C13.4617 12.5558 13.1055 13.1363 12.4334 13.6121L9.1551 15.8678C8.88452 16.0539 8.52427 16.0424 8.26616 15.8393C8.02842 15.6522 7.92828 15.3427 8.00566 15.0552C8.02695 14.9761 8.04892 14.8977 8.07082 14.8195C8.14245 14.5636 8.21342 14.3101 8.25817 14.0441C8.32592 13.6415 8.37912 13.1293 8.36943 12.5386C7.80953 12.7667 7.35869 12.9017 7.08221 12.9775C6.82224 13.0489 6.54397 12.9753 6.35335 12.7846L3.21546 9.6467C3.02484 9.4561 2.95118 9.1778 3.02254 8.91787C3.09844 8.64138 3.23338 8.19047 3.46148 7.63048ZM5.72024 4.01309C5.0973 3.90235 4.69357 3.8539 4.37281 3.90637C4.11225 3.94898 3.87495 4.06366 3.61483 4.42955L2.41681 6.17062C2.92635 6.12386 3.51965 6.10979 4.17364 6.16566C4.56153 5.48427 5.06609 4.74574 5.72024 4.01309ZM9.8343 11.8264C10.5156 11.4385 11.2542 10.9339 11.9868 10.2798C12.0976 10.9028 12.146 11.3064 12.0936 11.6272C12.051 11.8878 11.9363 12.1251 11.5705 12.3852L9.8293 13.5832C9.876 13.0736 9.8901 12.4804 9.8343 11.8264ZM12.2445 5.25552C12.2445 6.084 11.5725 6.75552 10.7445 6.75552C9.9165 6.75552 9.2445 6.084 9.2445 5.25552C9.2445 4.42704 9.9165 3.75552 10.7445 3.75552C11.5725 3.75552 12.2445 4.42704 12.2445 5.25552Z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.52701 11.1322C2.71313 11.5022 2.56404 11.9531 2.194 12.1392C1.77791 12.3485 1.5 12.7683 1.5 13.25V14.5H2.75C3.23151 14.5 3.65125 14.2222 3.8605 13.8063C4.04665 13.4362 4.49752 13.2872 4.86755 13.4733C5.23758 13.6595 5.38665 14.1103 5.2005 14.4804C4.75195 15.372 3.83189 16 2.75 16H0.75C0.33579 16 0 15.6642 0 15.25V13.25C0 12.1677 0.62827 11.2477 1.51998 10.7992C1.89002 10.6131 2.34089 10.7622 2.52701 11.1322Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    text: "start for free ",
  },
  {
    name: "Enterprise",
    icon: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5  h-5 select-none size-4.5"
      >
        <path
          d="M10.75 1.25C11.715 1.25 12.5 2.035 12.5 3V4.75H14.25C15.767 4.75 17 5.983 17 7.5V8.26855C14.606 9.52755 11.887 10.25 9 10.25C6.113 10.25 3.394 9.52755 1 8.26855V7.5C1 5.983 2.233 4.75 3.75 4.75H5.5V3C5.5 2.035 6.285 1.25 7.25 1.25H10.75ZM7.25 2.75C7.112 2.75 7 2.862 7 3V4.75H11V3C11 2.862 10.888 2.75 10.75 2.75H7.25Z"
          fill="currentColor"
        ></path>
        <path
          d="M9 11.7516C6.136 11.7516 3.43 11.0866 1 9.93359V14.0016C1 15.5186 2.233 16.7516 3.75 16.7516H14.25C15.767 16.7516 17 15.5186 17 14.0016V9.93359C14.57 11.0866 11.864 11.7516 9 11.7516Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    text: "Contact us",
    
  },
];

const features = [
  {
    category: "Customization",
    items: [
      "Built-in components",
      "Custom components",
      "Custom CSS and JS",
      "White labeling",
    ],
  },
  {
    category: "Features",
    items: [
      "Web editor",
      "API playground",
      "Git sync",
      "Search",
      "Third-party integrations",
      "Webhooks",
      "Websockets",
      "Developer API",
    ],
  },
];

export default function PricingComparison() {
  const [selectedPlan, setSelectedPlan] = useState("Hobby");

  const CheckIcon = () => (
    <svg
      viewBox="0 0 14 11"
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0.75 6.5L4.5 10.25L13.25 1.5" />
    </svg>
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      {/* 🔹 Mobile Plan Switch */}
      <div className="md:hidden sticky top-[66px] z-10 bg-white flex items-center justify-between mb-6">
     <div className="flex gap-6">
  {plans.map((plan) => (
    <div key={plan.name} className="flex items-center gap-4">
      <button
        onClick={() => setSelectedPlan(plan.name)}
        className={`flex items-center gap-2 py-3 text-base font-medium transition ${
          selectedPlan === plan.name
            ? "border-b-2 border-black"
            : "opacity-60"
        }`}
      >
        {plan.icon}
        {plan.name}
      </button>

      <button className="border px-4 py-1.5 rounded-full text-sm">
        {plan.text}
      </button>
    </div>
  ))}
</div>
      </div>

      {/* 🔹 Desktop Header */}
      <div className="hidden md:grid grid-cols-4 mb-10">
        <div></div>
        {plans.map((plan) => (
          <div key={plan.name} className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {plan.icon}
              <span className="font-medium">{plan.name}</span>
            </div>
            <button className="border px-4 py-1.5 rounded-full text-sm">
              Get started
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 Feature Table */}
      {features.map((group) => (
        <div key={group.category} className="mb-12">
          <h3 className="text-lg font-semibold mb-6">{group.category}</h3>

          {group.items.map((item) => (
            <div
              key={item}
              className="grid md:grid-cols-4 grid-cols-2 border-b py-4 items-center"
            >
              {/* Feature Name */}
              <div className="text-gray-600 text-sm">{item}</div>

              {/* Plan Columns */}
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex justify-center ${
                    selectedPlan !== plan.name ? "md:flex hidden" : ""
                  }`}
                >
                  <CheckIcon />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
