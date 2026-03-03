"use client";
import { useState } from "react";

const plans = [
  {
    name: "Hobby",

    bgcolor: false,
    icon: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 size-4.5 select-none "
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
    bgcolor: true,
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
    bgcolor: false,
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
    icon: (
      <svg
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 size-4.5 select-none"
      >
        <path
          d="M5.5 2.135V1.75C5.5 0.785 4.715 0 3.75 0H1.75C0.785 0 0 0.785 0 1.75V7.635L5.5 2.135Z"
          fill="currentColor"
        ></path>
        <path
          d="M11.034 6.5L11.308 6.226C11.99 5.544 11.99 4.433 11.308 3.751L9.894 2.337C9.212 1.655 8.101 1.655 7.41901 2.337L3.25601 6.5H11.034Z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 8H12.25C13.215 8 14 8.785 14 9.75V12.25C14 13.215 13.215 14 12.25 14H3C1.346 14 0 12.654 0 11C0 9.346 1.346 8 3 8ZM6 12.5H8.5V9.5H6V12.5ZM12.25 12.5C12.388 12.5 12.5 12.388 12.5 12.25V9.75C12.5 9.612 12.388 9.5 12.25 9.5H10V12.5H12.25ZM3 12C3.55228 12 4 11.5523 4 11C4 10.4477 3.55228 10 3 10C2.44772 10 2 10.4477 2 11C2 11.5523 2.44772 12 3 12Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    items: [
      "Built-in components",
      "Custom components",
      "Custom CSS and JS",
      "White labeling",
    ],
  },
  {
    category: "Features",
    icon: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 size-4.5 select-none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 3.75C2 2.78379 2.78379 2 3.75 2H6.25C7.21621 2 8 2.78379 8 3.75V6.25C8 7.21621 7.21621 8 6.25 8H3.75C2.78379 8 2 7.21621 2 6.25V3.75Z"
          fill="currentColor"
        ></path>
        <path
          opacity="1"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.75 13C1.75 11.2048 3.20479 9.75 5 9.75C6.79521 9.75 8.25 11.2048 8.25 13C8.25 14.7952 6.79521 16.25 5 16.25C3.20479 16.25 1.75 14.7952 1.75 13Z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.75 10.5C13.75 10.0858 13.4142 9.75 13 9.75C12.5858 9.75 12.25 10.0858 12.25 10.5V12.25H10.5C10.0858 12.25 9.75 12.5858 9.75 13C9.75 13.4142 10.0858 13.75 10.5 13.75H12.25V15.5C12.25 15.9142 12.5858 16.25 13 16.25C13.4142 16.25 13.75 15.9142 13.75 15.5V13.75H15.5C15.9142 13.75 16.25 13.4142 16.25 13C16.25 12.5858 15.9142 12.25 15.5 12.25H13.75V10.5Z"
          fill="currentColor"
        ></path>
        <path
          opacity="1"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0817 2.20136L16.3475 6.12493C16.827 6.95657 16.2287 7.99999 15.265 7.99999H10.734C9.77029 7.99999 9.17177 6.95701 9.65128 6.12537L11.8992 2.23261C11.9046 2.22209 11.9103 2.21167 11.9163 2.20136C12.3968 1.368 13.601 1.36829 14.0817 2.20136Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
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
  {
    category: "Security",
    icon: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 size-4.5 select-none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.75 9.25C7.75 7.73122 8.98122 6.5 10.5 6.5C11.7588 6.5 12.82 7.34575 13.1465 8.5H17C17.4142 8.5 17.75 8.83579 17.75 9.25C17.75 9.66421 17.4142 10 17 10H16.25V10.75C16.25 11.1642 15.9142 11.5 15.5 11.5C15.0858 11.5 14.75 11.1642 14.75 10.75V10H13.1465C12.82 11.1543 11.7588 12 10.5 12C8.98122 12 7.75 10.7688 7.75 9.25ZM10.5 8C9.80964 8 9.25 8.55964 9.25 9.25C9.25 9.94038 9.80964 10.5 10.5 10.5C11.1904 10.5 11.75 9.94039 11.75 9.25C11.75 8.55964 11.1904 8 10.5 8Z"
          fill="currentColor"
        ></path>
        <path
          opacity="1"
          d="M9.00028 1.05075C8.67031 1.05063 8.33372 1.16922 8.16963 1.22703C7.07517 1.61265 5.96344 1.95708 4.85274 2.30119C4.30643 2.47044 3.76038 2.63962 3.21675 2.81358C2.49139 3.04506 2 3.71932 2 4.48V11C2 12.9239 3.47441 14.3064 4.84192 15.1909C6.25089 16.1022 7.80803 16.6572 8.46011 16.8683C8.76807 16.9684 9.09216 16.9819 9.40738 16.9058C9.49355 16.8849 9.57968 16.8559 9.63302 16.8379C10.9062 16.4082 12.1533 15.8602 13.2749 15.1143C14.0727 14.5837 14.8957 13.8813 15.4256 12.9988C14.7071 12.9754 14.0738 12.6153 13.6784 12.071C12.9005 12.9474 11.7656 13.5 10.5 13.5C8.15281 13.5 6.25 11.5973 6.25 9.25C6.25 6.90279 8.15279 5 10.5 5C12.0222 5 13.3553 5.79946 14.1058 7H16V4.48C16 3.71943 15.5071 3.04612 14.7836 2.81368L9.53357 1.13368C9.36084 1.079 9.1795 1.05082 9.00028 1.05075Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    items: [
      "Built-in components",
      "Custom components",
      "Custom CSS and JS",
      "White labeling",
    ],
  },
  {
    category: "Publishing",
    icon: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 size-4.5 select-none"
      >
        <path
          opacity="1"
          d="M15.2499 2.75C7.86174 3.3965 4.78163 8.6387 3.54083 12.126C3.92713 12.3299 4.20593 12.4561 4.20593 12.4561C5.01593 12.8189 5.81793 12.979 5.86493 12.9871C6.71893 13.1431 7.50793 13.221 8.23193 13.221C9.7389 13.221 10.9619 12.8831 11.8819 12.211C12.2525 11.94 12.8528 11.3975 13.2718 10.4725C11.5488 10.1244 10.8234 9.4588 10.8234 9.4588C10.8234 9.4588 12.9828 9.7125 13.9198 8.9859C14.4218 8.5679 14.8188 7.9881 15.0358 7.1551C15.1748 6.543 15.2638 5.951 15.3488 5.379C15.4838 4.4781 15.6108 3.628 15.8998 3.1231C15.9796 2.9842 15.9976 2.8287 15.9815 2.6749C15.5422 2.7184 15.2499 2.75 15.2499 2.75Z"
          fill="currentColor"
        ></path>
        <path
          d="M2.75096 16C2.72266 16 2.69436 15.9985 2.66506 15.9951C2.25396 15.9482 1.95807 15.5766 2.00487 15.165C2.01857 15.0439 3.52046 3.02342 15.1846 2.00292C15.5918 1.96482 15.961 2.27192 15.9971 2.68452C16.0332 3.09712 15.7276 3.46092 15.3155 3.49702C4.85845 4.41202 3.50786 15.2255 3.49516 15.3349C3.45126 15.7177 3.12686 16 2.75096 16Z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 0.75C4 0.33579 3.66421 0 3.25 0C2.83579 0 2.5 0.33579 2.5 0.75V2.5H0.75C0.33579 2.5 0 2.83579 0 3.25C0 3.66421 0.33579 4 0.75 4H2.5V5.75C2.5 6.16421 2.83579 6.5 3.25 6.5C3.66421 6.5 4 6.16421 4 5.75V4H5.75C6.16421 4 6.5 3.66421 6.5 3.25C6.5 2.83579 6.16421 2.5 5.75 2.5H4V0.75Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
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
  {
    category: "AI features",
    icon: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 size-4.5 select-none"
      >
        <path
          opacity="1"
          d="M15.2499 2.75C7.86174 3.3965 4.78163 8.6387 3.54083 12.126C3.92713 12.3299 4.20593 12.4561 4.20593 12.4561C5.01593 12.8189 5.81793 12.979 5.86493 12.9871C6.71893 13.1431 7.50793 13.221 8.23193 13.221C9.7389 13.221 10.9619 12.8831 11.8819 12.211C12.2525 11.94 12.8528 11.3975 13.2718 10.4725C11.5488 10.1244 10.8234 9.4588 10.8234 9.4588C10.8234 9.4588 12.9828 9.7125 13.9198 8.9859C14.4218 8.5679 14.8188 7.9881 15.0358 7.1551C15.1748 6.543 15.2638 5.951 15.3488 5.379C15.4838 4.4781 15.6108 3.628 15.8998 3.1231C15.9796 2.9842 15.9976 2.8287 15.9815 2.6749C15.5422 2.7184 15.2499 2.75 15.2499 2.75Z"
          fill="currentColor"
        ></path>
        <path
          d="M2.75096 16C2.72266 16 2.69436 15.9985 2.66506 15.9951C2.25396 15.9482 1.95807 15.5766 2.00487 15.165C2.01857 15.0439 3.52046 3.02342 15.1846 2.00292C15.5918 1.96482 15.961 2.27192 15.9971 2.68452C16.0332 3.09712 15.7276 3.46092 15.3155 3.49702C4.85845 4.41202 3.50786 15.2255 3.49516 15.3349C3.45126 15.7177 3.12686 16 2.75096 16Z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 0.75C4 0.33579 3.66421 0 3.25 0C2.83579 0 2.5 0.33579 2.5 0.75V2.5H0.75C0.33579 2.5 0 2.83579 0 3.25C0 3.66421 0.33579 4 0.75 4H2.5V5.75C2.5 6.16421 2.83579 6.5 3.25 6.5C3.66421 6.5 4 6.16421 4 5.75V4H5.75C6.16421 4 6.5 3.66421 6.5 3.25C6.5 2.83579 6.16421 2.5 5.75 2.5H4V0.75Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    items: [
      "Built-in components",
      "Custom components",
      "Custom CSS and JS",
      "White labeling",
    ],
  },
  {
    category: "Services",
    icon: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 w-5 h-5 size-4.5 select-none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.75 8.5C4.09415 8.5 4.39414 8.73422 4.47761 9.0681L4.96847 11.0315L6.9319 11.5224C7.26578 11.6059 7.5 11.9058 7.5 12.25C7.5 12.5942 7.26578 12.8941 6.9319 12.9776L4.96847 13.4685L4.47761 15.4319C4.39414 15.7658 4.09415 16 3.75 16C3.40585 16 3.10586 15.7658 3.02239 15.4319L2.53153 13.4685L0.5681 12.9776C0.23422 12.8941 0 12.5942 0 12.25C0 11.9058 0.23422 11.6059 0.5681 11.5224L2.53153 11.0315L3.02239 9.0681C3.10586 8.73422 3.40585 8.5 3.75 8.5Z"
          fill="currentColor"
        ></path>
        <path
          opacity="1"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.25 0C10.5577 0 10.8343 0.188 10.9474 0.47418L12.245 3.75506L15.5258 5.05256C15.812 5.16574 16 5.44225 16 5.75C16 6.05775 15.812 6.33426 15.5258 6.44744L12.245 7.74494L10.9474 11.0258C10.8343 11.312 10.5577 11.5 10.25 11.5C9.9423 11.5 9.6657 11.312 9.5526 11.0258L8.25505 7.74494L4.97418 6.44744C4.688 6.33426 4.5 6.05775 4.5 5.75C4.5 5.44225 4.688 5.16574 4.97418 5.05256L8.25505 3.75506L9.5526 0.47418C9.6657 0.188 9.9423 0 10.25 0Z"
          fill="currentColor"
        ></path>
      </svg>
    ),

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
import { useTheme } from "@/Context/ThemeContext/page";
export default function PricingComparison() {
  const { dark } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);
  const activePlan = plans.find((p) => p.name === selectedPlan);

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
    <section className="mx-auto mb-10 mt-[4.5rem] w-full max-w-[65rem] px-4 sm:px-8 py-14">
      <div className="flex flex-col gap-4">
        <div
          className={`w-full  ${dark ? "border-gray-800" : "border-gray-200"}`}
        >
          <div className="flex items-center justify-between">
            {/* PLAN TABS */}
            <div className="flex gap-8">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`relative py-3 text-[15px] font-medium transition ${
                    selectedPlan === plan.name
                      ? dark
                        ? "text-white"
                        : "text-black"
                      : dark
                        ? "text-gray-400"
                        : "text-gray-500"
                  }`}
                >
                  {plan.name}

                  {/* Active Underline */}
                  {selectedPlan === plan.name && (
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] w-full ${
                        dark ? "bg-white" : "bg-black"
                      }`}
                    ></span>
                  )}
                </button>
              ))}
            </div>

            {/* CTA BUTTON */}
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activePlan?.bgcolor
                  ? dark
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : dark
                    ? "border border-gray-700 text-white"
                    : "border border-gray-300 text-black"
              }`}
            >
              {activePlan?.text}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`hidden md:flex gap-[4rem] lg:gap-[6rem] px-4 justify-end sticky top-[66px] z-30 py-8 mb-6 ${
          dark ? "bg-secondary" : "bg-white"
        }`}
      >
        {plans.map((plan) => (
          <div key={plan.name} className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {plan.icon}
              <span className="font-medium dark:text-gray-200">
                {plan.name}
              </span>
            </div>

            <button
              className={`border ${dark ? "border-gray-900" : "border-gray-200"} font-semibold px-4 py-2 rounded-full text-[15px] ${
                plan.bgcolor
                  ? dark
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : dark
                    ? "text-white border-gray-700"
                    : "text-black border-gray-200"
              }`}
            >
              {plan.text}
            </button>
          </div>
        ))}
      </div>

      {features.map((group) => (
        <div key={group.category} className="relative mt-6">
          {/* Sticky category header */}
          <div
            className={`sticky top-[205px] z-20  ${
              dark ? " border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-[15px] flex font-semibold py-3 gap-2 px-2 dark:text-gray-200">
              {group.icon} {group.category}
            </h3>
          </div>

          {/* Items */}
          <div className="mt-1">
            {group.items.map((item) => (
              <div
                key={item}
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-b py-4 items-center ${
                  dark ? "text-white/80 border-gray-950" : "bg-white"
                }`}
              >
                <div
                  className={` text-sm px-2 ${dark ? "text-gray-300" : "text-gray-600"}`}
                >
                  {item}
                </div>
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex justify-center ${
                      selectedPlan === plan.name ? "flex" : "hidden md:flex"
                    }`}
                  >
                    <CheckIcon className="text-black dark:text-white" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
