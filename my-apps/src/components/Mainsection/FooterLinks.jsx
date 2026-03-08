

import React from "react";
import Link from "next/link";
import { useTheme } from "@/Context/ThemeContext/page";
import { Sun, Moon } from "lucide-react";

const FooterLinks = () => {
  const { dark, setDark } = useTheme();

  return (
    <section
      className={`relative z-20 border-t transition-colors duration-300 bg-bgray border-primary 
      `}
    >
      <div className="w-full flex items-stretch">
        
        {/* LEFT BORDER */}
        <div
          className={`hidden md:block w-[200px] border-primary border-r `}
        />

        {/* CENTER */}
        <div className="w-full">
          <div className="max-w-[69rem] mx-auto">

            {/* Top Section */}
            <div
              className={`mb-10 border-b px-9 pt-10 pb-3 flex items-center justify-between border-primary`}
            >
              <Link href="/" className="flex items-center gap-2">
                <svg
                  width="104"
                  height="24"
                  viewBox="0 0 104 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ "--color-text-main": dark ? "#ffffff" : "#000000" }} // conditional color
                >
                  <path
                    d="M18.4725 9.60528V3.91396C18.4725 3.30323 17.977 2.81641 17.3754 2.81641H11.6867C10.7931 2.81641 9.90842 2.99342 9.08564 3.32977C8.26285 3.67497 7.51085 4.17064 6.88271 4.80793L6.83847 4.85219C6.00684 5.69305 5.41408 6.73749 5.11328 7.88815C5.65296 7.74653 6.2103 7.67572 6.76767 7.66687C8.25399 7.64916 9.71378 8.12713 10.8993 9.02111C11.9698 9.81771 12.7837 10.9153 13.2261 12.181C13.6861 13.4644 13.7392 14.8629 13.3942 16.1817C14.5354 15.8808 15.5883 15.2878 16.4288 14.4558L16.473 14.4115C17.1011 13.7831 17.6054 13.0307 17.9504 12.2075C18.2955 11.3844 18.4636 10.4993 18.4636 9.60528H18.4725Z"
                    fill="#18E299"
                  />
                  <path
                    d="M4.9434 9.50941C4.95221 7.76347 5.64849 6.08807 6.87361 4.83594L2.14058 9.57113C2.12296 9.58876 2.10532 9.59758 2.08769 9.61522C0.933084 10.7615 0.23681 12.2959 0.122231 13.9183C0.0164654 15.435 0.413078 16.934 1.2592 18.1862C1.33991 18.3056 1.5589 18.3449 1.68229 18.2303L4.58202 15.338C5.48985 14.4298 5.7719 13.0806 5.34002 11.8726C5.06679 11.1231 4.93459 10.3207 4.9434 9.50941Z"
                    fill="#0C8C5E"
                  />
                  <path
                    d="M16.4445 14.4121C15.5367 15.3027 14.3997 15.92 13.1658 16.1933C11.923 16.4667 10.6362 16.3873 9.43757 15.9641C9.43757 15.9641 9.42874 15.9641 9.41992 15.9641C8.21243 15.532 6.86394 15.8141 5.95612 16.7136L3.05634 19.6058C2.93295 19.7293 2.95057 19.9321 3.10041 20.0291C4.35197 20.8668 5.85035 21.2724 7.36632 21.1666C8.98806 21.052 10.5128 20.3553 11.6674 19.2002L11.7115 19.1561L16.4445 14.4209V14.4121Z"
                    fill="#0C8C5E"
                  />
                  {/* All remaining paths now use the CSS variable for theme */}
                  <path
                    d="M96.2355 23.5H92.6842L95.1868 17.8513L90.1816 6.60156H93.7568L96.6734 13.6537C96.7753 13.9002 97.1246 13.8997 97.2259 13.653L100.12 6.60156H103.719L96.2355 23.5Z"
                    fill="var(--color-text-main)"
                  />
                  <path
                    d="M85.4483 18.5186V9.46164H83.041V6.60154H85.4483V5.05232C85.4483 3.63816 85.8773 2.5259 86.7353 1.71554C87.5933 0.90518 88.6818 0.5 90.0006 0.5C90.8109 0.5 91.5021 0.587392 92.0742 0.762175V3.64611C91.6928 3.5031 91.2479 3.4316 90.7394 3.4316C90.0244 3.4316 89.508 3.59049 89.1902 3.90828C88.8724 4.21018 88.7135 4.72659 88.7135 5.4575V6.60154H92.0742V9.46164H88.7135V18.5186H85.4483Z"
                    fill="var(--color-text-main)"
                  />
                  <path
                    d="M80.1204 4.64714C79.5643 4.64714 79.0797 4.44852 78.6666 4.05129C78.2534 3.63816 78.0469 3.14559 78.0469 2.57357C78.0469 2.00155 78.2534 1.51692 78.6666 1.11969C79.0797 0.706563 79.5643 0.5 80.1204 0.5C80.7084 0.5 81.2009 0.706563 81.5982 1.11969C82.0113 1.51692 82.2178 2.00155 82.2178 2.57357C82.2178 3.14559 82.0113 3.63816 81.5982 4.05129C81.2009 4.44852 80.7084 4.64714 80.1204 4.64714ZM78.4997 18.5186V6.60154H81.765V18.5186H78.4997Z"
                    fill="var(--color-text-main)"
                  />
                  <path
                    d="M72.8125 18.5182V0.642578H76.0778V18.5182H72.8125Z"
                    fill="var(--color-text-main)"
                  />
                  <path
                    d="M69.1256 18.6621C67.7909 18.6621 66.6945 18.2966 65.8365 17.5657C64.9943 16.8189 64.5733 15.7464 64.5733 14.3481V9.46211H62.166V6.60201H64.5733V3.28906H67.8385V6.60201H71.1992V9.46211H67.8385V13.7046C67.8385 14.4355 67.9974 14.9598 68.3152 15.2776C68.633 15.5795 69.1494 15.7305 69.8644 15.7305C70.3729 15.7305 70.8178 15.659 71.1992 15.516V18.3999C70.6271 18.5747 69.9359 18.6621 69.1256 18.6621Z"
                    fill="var(--color-text-main)"
                  />
                  <path
                    d="M49.9434 18.5191V6.60202H53.2086V7.47307C53.2086 7.62037 53.4091 7.6855 53.5066 7.57513C54.2346 6.75161 55.2713 6.33984 56.6169 6.33984C58.047 6.33984 59.1672 6.81653 59.9775 7.76989C60.8038 8.70737 61.2169 9.96263 61.2169 11.5357V18.5191H57.9516V12.0839C57.9516 11.21 57.7689 10.5347 57.4034 10.058C57.038 9.5654 56.5216 9.31911 55.8542 9.31911C55.0598 9.31911 54.4162 9.60512 53.9237 10.1771C53.447 10.7492 53.2086 11.5913 53.2086 12.7036V18.5191H49.9434Z"
                    fill="var(--color-text-main)"
                  />
                  <path
                    d="M45.8783 4.64714C45.3221 4.64714 44.8375 4.44852 44.4244 4.05129C44.0113 3.63816 43.8047 3.14559 43.8047 2.57357C43.8047 2.00155 44.0113 1.51692 44.4244 1.11969C44.8375 0.706563 45.3221 0.5 45.8783 0.5C46.4662 0.5 46.9587 0.706563 47.356 1.11969C47.7691 1.51692 47.9757 2.00155 47.9757 2.57357C47.9757 3.14559 47.7691 3.63816 47.356 4.05129C46.9587 4.44852 46.4662 4.64714 45.8783 4.64714ZM44.2575 18.5186V6.60154H47.5228V18.5186H44.2575Z"
                    fill="var(--color-text-main)"
                  />
                  <path
                    d="M38.7147 18.5191V12.1554C38.7147 10.2645 38.095 9.31911 36.8557 9.31911C36.1406 9.31911 35.5686 9.58923 35.1396 10.1295C34.7265 10.6697 34.504 11.4721 34.4722 12.5367V18.5191H31.207V12.1554C31.207 10.2645 30.5873 9.31911 29.3479 9.31911C28.617 9.31911 28.037 9.60512 27.608 10.1771C27.179 10.7492 26.9645 11.5913 26.9645 12.7036V18.5191H23.6992V6.60202H26.9645V7.48165C26.9645 7.62818 27.1615 7.69271 27.2578 7.58222C27.9791 6.75397 28.938 6.33984 30.1344 6.33984C31.7067 6.33984 32.8909 6.98895 33.687 8.28717C33.7498 8.38958 33.9044 8.38799 33.9668 8.28535C34.311 7.71964 34.7893 7.26975 35.4018 6.9357C36.1009 6.53846 36.808 6.33984 37.523 6.33984C38.9372 6.33984 40.0335 6.80858 40.8121 7.74606C41.5907 8.68353 41.98 9.97058 41.98 11.6072V18.5191H38.7147Z"
                    fill="var(--color-text-main)"
                  />
                </svg>
              </Link>

              {/* Social Buttons */}
              <div className="flex items-center gap-2">
                  <button className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 p-1`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-small"
                >
                  <path
                    d="M11.4595 11.5714V18.889H8.06641V6.24428H11.2672L11.3238 9.39982H11.1202C11.452 8.3442 11.9534 7.52987 12.6244 6.95682C13.3031 6.37623 14.1777 6.08594 15.2484 6.08594C16.1231 6.08594 16.8846 6.27821 17.5331 6.66275C18.189 7.03976 18.6942 7.58642 19.0486 8.30273C19.4105 9.0115 19.5915 9.85977 19.5915 10.8475V18.889H16.1985V11.4356C16.1985 10.6515 15.9949 10.0369 15.5877 9.59209C15.1881 9.14722 14.6301 8.92479 13.9138 8.92479C13.4388 8.92479 13.0128 9.03035 12.6358 9.24148C12.2663 9.44506 11.976 9.74289 11.7649 10.135C11.5613 10.5271 11.4595 11.0059 11.4595 11.5714Z"
                    fill="currentColor"
                  />
                  <path
                    d="M1.77748 18.889V6.2442H5.17054V18.889H1.77748ZM3.47401 4.59292C2.96128 4.59292 2.52395 4.42326 2.16203 4.08396C1.8001 3.74465 1.61914 3.33372 1.61914 2.85115C1.61914 2.36858 1.8001 1.95765 2.16203 1.61834C2.52395 1.27903 2.96128 1.10938 3.47401 1.10938C3.98674 1.10938 4.42406 1.27903 4.78599 1.61834C5.15546 1.9501 5.34019 2.36104 5.34019 2.85115C5.34019 3.33372 5.15546 3.74465 4.78599 4.08396C4.42406 4.42326 3.98674 4.59292 3.47401 4.59292Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* Repeat other buttons with same classes */}
              <button className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 p-1`}>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               className="icon-small"
                >
                  <mask
                    id="mask0_9208_2830"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="21"
                    height="20"
                    style={{
                      maskType: "luminance",
                      WebkitMaskType: "luminance",
                    }}
                  >
                    <path d="M20.6055 0H0.605469V20H20.6055V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_9208_2830)">
                    <path
                      d="M12.1188 8.75562L18.0382 1.875H16.6357L11.4957 7.84938L7.39062 1.875H2.65625L8.86375 10.9094L2.65625 18.125H4.05875L9.48625 11.8156L13.8213 18.125H18.5563L12.1188 8.75562ZM10.1975 10.9888L9.56875 10.0894L4.56437 2.93125H6.71875L10.7575 8.70812L11.3863 9.6075L16.6363 17.1169H14.4819L10.1975 10.9888Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>

              

              <button className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 p-1`}>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="icon-small"
                >
                  <mask
                    id="mask0_9208_2837"
                     style={{
                      maskType: "luminance",
                      WebkitMaskType: "luminance",
                    }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="21"
                    height="20"
                  >
                    <path
                      d="M20.6055 0H0.605469V20H20.6055V0Z"
                      fill="white"
                    ></path>
                  </mask>
                  <g mask="url(#mask0_9208_2837)">
                    <path
                      d="M10.6055 1.46484C15.4399 1.46484 19.3555 5.38046 19.3555 10.2149C19.3543 13.9742 16.9561 17.3142 13.3949 18.5161C12.9574 18.6036 12.793 18.3299 12.793 18.1005C12.793 17.8049 12.8043 16.8642 12.8043 15.6942C12.8043 14.8742 12.5311 14.3492 12.2136 14.0755C14.1605 13.8567 16.2061 13.113 16.2061 9.75546C16.2061 8.79296 15.8668 8.01609 15.3093 7.40421C15.3968 7.18546 15.703 6.28859 15.2218 5.08546C15.2218 5.08546 14.4886 4.84484 12.8155 5.98234C12.1155 5.78546 11.3718 5.68734 10.628 5.68734C9.88422 5.68734 9.14047 5.78546 8.44047 5.98234C6.76735 4.85609 6.03422 5.08546 6.03422 5.08546C5.55297 6.28859 5.85922 7.18546 5.94672 7.40421C5.38922 8.01671 5.04985 8.80421 5.04985 9.75546C5.04985 13.1024 7.08422 13.8574 9.0311 14.0761C8.77922 14.2949 8.54985 14.678 8.47297 15.2461C7.96985 15.4761 6.71172 15.848 5.92485 14.5242C5.76047 14.2617 5.2686 13.6167 4.57985 13.6274C3.84672 13.6386 4.28485 14.043 4.59047 14.2067C4.96235 14.4142 5.3886 15.1911 5.48735 15.443C5.66235 15.9349 6.2311 16.8761 8.42922 16.4711C8.42922 17.2042 8.44047 17.893 8.44047 18.1005C8.44047 18.3305 8.2761 18.5924 7.8386 18.5161C4.26422 17.3261 1.8536 13.9817 1.85547 10.2142C1.85547 5.37984 5.7711 1.46484 10.6055 1.46484Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </button>
              </div>
            </div>

            {/* Grid */}
            <div className="px-6 md:px-8 py-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                  {
                    title: "Explore",
                    items: ["Startups", "Enterprise", "Switch", "OSS Program"],
                  },
                  {
                    title: "Resources",
                    items: [
                      "Customers",
                      "Blog",
                      "Pricing",
                      "Guides",
                      "Feature Requests",
                    ],
                  },
                  {
                    title: "Documentation",
                    items: [
                      "Getting Started",
                      "API Reference",
                      "Components",
                      "Changelog",
                    ],
                  },
                  {
                    title: "Company",
                    items: ["Careers", "Wall of Love"],
                  },
                  {
                    title: "Legal",
                    items: [
                      "Privacy Policy",
                      "Responsible Disclosure",
                      "Terms of Service",
                      "Security",
                      "DSR / DSAR",
                    ],
                  },
                ].map((col) => (
                  <div key={col.title}>
                    <h3
                      className={`mb-3 uppercase text-xs tracking-wider font-medium text-gray-500`}
                    >
                      {col.title}
                    </h3>

                    <ul className="space-y-2">
                      {col.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className={`text-sm px-3 py-1.5 rounded-full inline-block transition text-gray-800
                            `}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
           <div
            className={`border-t border-secondary px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center gap-6`}
          >
            <p className="text-sm font-medium text-center">
              Backed by enterprise-grade security
            </p>

            {/* SOC Badge */}
            <div className="relative size-[60px] grid place-items-center scale-125">
              <svg viewBox="0 0 150 150" className="absolute size-[51px]">
                <circle
                  cx="75"
                  cy="75"
                  r="74"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                  fill="none"
                  className="text-gray-400"
                />
              </svg>

              <svg viewBox="0 0 110 110" className="absolute size-[35px]">
                <circle
                  cx="55"
                  cy="55"
                  r="54"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                  fill="none"
                  className="text-gray-400"
                />
              </svg>

              <div className="size-[35px] rounded-full bg-gray-100 absolute" />

              <div className="z-10 text-center scale-105">
                <p className="text-[7.5px] font-semibold text-gray-500">
                  AICPA
                </p>
                <div className="w-6 h-px bg-gray-300 my-0.5 mx-auto" />
                <p className="text-[7.5px] font-semibold text-gray-500">
                  SOC II
                </p>
              </div>
            </div>
             </div>

            {/* Bottom */}
            <div
              className={`border-t px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center gap-4 border-primary justify-between`}
            >
              <div className="flex-1">All systems normal</div>

              <div
                className={`flex-1 text-center text-sm
                  text-gray-500
                `}
              >
                © 2026 Mintlify, Inc.
              </div>

              {/* Toggle */}
              <div className="flex items-center justify-center">
                <div
                  onClick={() => setDark(!dark)}
                  className={`relative flex items-center rounded-full p-1 w-[110px] h-10 cursor-pointer transition ${
                    dark
                      ? "bg-gray-950 border border-gray-700"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                >
                  <div
                    className={`absolute top-1 h-8 w-[48px] rounded-full shadow-md transition-all duration-300 ${
                      dark
                        ? "translate-x-[52px] bg-white"
                        : "translate-x-0 bg-black"
                    }`}
                  />

                  <div className="relative z-10 flex-1 flex items-center justify-center">
                    <Sun
                      size={14}
                      className={dark ? "text-gray-500" : "text-white"}
                    />
                  </div>

                  <div className="relative z-10 flex-1 flex items-center justify-center">
                    <Moon
                      size={14}
                      className={dark ? "text-black" : "text-gray-500"}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT BORDER */}
        <div
          className={`hidden md:block w-[200px] 
border-l border-primary
          `}
        />
      </div>
    </section>
  );
};

export default FooterLinks;