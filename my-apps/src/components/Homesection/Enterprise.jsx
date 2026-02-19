
"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";

const Enterprise = () => {
  const { dark } = useTheme();

  return (
    <section
      className={`
        w-full
        mt-10 sm:mt-12 md:mt-16
        py-12 sm:py-14 md:py-16 lg:py-20
        ${dark ? "bg-black" : "bg-gray-100"}
      `}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-10">
          
          {/* LEFT */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl text-center md:text-left">
            
            <p className="text-green-700 font-semibold text-sm sm:text-base">
              Enterprise-reinvention
            </p>

            <h1
              className={`
                font-semibold leading-tight
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                ${dark ? "text-white" : "text-black"}
              `}
            >
              Bring intelligence to <br className="hidden sm:block" />
              enterprise knowledge
            </h1>

            <p
              className={`
                text-sm sm:text-base md:text-lg
                ${dark ? "text-white/80" : "text-gray-700"}
              `}
            >
              Modernize without the rebuild with enterprise-grade professional
              service & security.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="flex justify-center md:justify-end">
            <button
              className={`
                px-5 sm:px-6
                py-2.5 sm:py-3
                rounded-xl sm:rounded-2xl
                font-semibold
                text-sm sm:text-base
                transition-all duration-200
                hover:scale-105
                ${dark ? "bg-white text-black" : "bg-black text-white"}
              `}
            >
              Explore for enterprise
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-8 sm:gap-10 md:gap-12
            mt-12 sm:mt-14 md:mt-16
          "
        >
          
          {/* CARD 1 */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                   <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-green-800"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.50781 2.75C5.50781 1.3689 6.62671 0.25 8.00781 0.25C9.3889 0.25 10.5078 1.3689 10.5078 2.75C10.5078 4.1311 9.3889 5.25 8.00781 5.25C6.62671 5.25 5.50781 4.1311 5.50781 2.75Z"
                  fill="currentColor"
                />

                <path
                  opacity="0.2"
                  d="M10.2991 3.75188C11.6788 4.38813 12.7509 5.57959 13.228 7.03861C13.3568 7.4323 13.7803 7.64709 14.174 7.51835C14.5677 7.38961 14.7825 6.96609 14.6537 6.57239C13.9915 4.54733 12.4324 2.9301 10.4446 2.18878C10.4859 2.36918 10.5078 2.55703 10.5078 2.75C10.5078 3.10632 10.4333 3.44518 10.2991 3.75188Z"
                  fill="currentColor"
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.696 11.75C10.696 10.3689 11.8149 9.25 13.196 9.25C14.5771 9.25 15.696 10.3689 15.696 11.75C15.696 13.1311 14.5771 14.25 13.196 14.25C11.8149 14.25 10.696 13.1311 10.696 11.75Z"
                  fill="currentColor"
                />

                <path
                  opacity="0.2"
                  d="M11.1854 13.2362C9.9428 14.1175 8.37078 14.4517 6.86472 14.1337C6.45945 14.0481 6.06153 14.3072 5.97593 14.7125C5.89034 15.1178 6.1495 15.5157 6.55477 15.6013C8.64416 16.0426 10.8294 15.4991 12.4672 14.1421C11.9481 13.9843 11.5007 13.6621 11.1854 13.2362Z"
                  fill="currentColor"
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.319344 11.75C0.319344 10.3689 1.43823 9.25 2.81934 9.25C4.20044 9.25 5.31934 10.3689 5.31934 11.75C5.31934 13.1311 4.20044 14.25 2.81934 14.25C1.43823 14.25 0.319344 13.1311 0.319344 11.75Z"
                  fill="currentColor"
                />

                <path
                  opacity="0.2"
                  d="M3.90389 5.07739C4.18047 4.76904 4.15471 4.29487 3.84636 4.01829C3.53801 3.74172 3.06384 3.76747 2.78726 4.07582C1.35956 5.66754 0.739434 7.83649 1.09963 9.9352C1.4803 9.5743 1.97448 9.3321 2.52317 9.2673C2.38111 7.75132 2.87666 6.22263 3.90389 5.07739Z"
                  fill="currentColor"
                />
              </svg>

            <h3
              className={`
                font-semibold
                text-lg sm:text-xl md:text-2xl
                ${dark ? "text-white" : "text-gray-900"}
              `}
            >
              Build with partnership
            </h3>

            <p
              className={`
                text-sm sm:text-base
                ${dark ? "text-white/80" : "text-gray-700"}
              `}
            >
              Direct, white-glove access to our documentation experts. Dedicated
              migration support and guidance tailored to your setup.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            
                      <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-green-800"
              >
                <path
                  opacity="0.2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.16963 1.22703C8.33372 1.16922 8.67031 1.05063 9.00028 1.05075C9.1795 1.05082 9.36084 1.079 9.53357 1.13368L14.7836 2.81368C15.5071 3.04612 16 3.71943 16 4.48V11C16 12.8725 14.6025 14.2314 13.2749 15.1143C12.1533 15.8602 10.9062 16.4082 9.63302 16.8379C9.57968 16.8559 9.49355 16.8849 9.40738 16.9058C9.09216 16.9819 8.76807 16.9684 8.46011 16.8683C7.80803 16.6572 6.25089 16.1022 4.84192 15.1909C3.47441 14.3064 2 12.9239 2 11V4.48C2 3.71932 2.49139 3.04506 3.21675 2.81358C4.86562 2.28594 6.53686 1.80232 8.16963 1.22703Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.99999 5.5C7.75726 5.5 6.75061 6.50714 6.75061 7.74938C6.75061 8.72872 7.37626 9.56194 8.25 9.87075V12.5C8.25 12.9142 8.58579 13.25 9 13.25C9.41421 13.25 9.75 12.9142 9.75 12.5V9.87074C10.6237 9.56193 11.2494 8.72871 11.2494 7.74938C11.2494 6.50714 10.2427 5.5 8.99999 5.5Z"
                  fill="currentColor"
                />
              </svg>

            <h3
              className={`
                font-semibold
                text-lg sm:text-xl md:text-2xl
                ${dark ? "text-white" : "text-gray-900"}
              `}
            >
              Compliance and access control
            </h3>

            <p
              className={`
                text-sm sm:text-base
                ${dark ? "text-white/80" : "text-gray-700"}
              `}
            >
              Compliant with SOC 2, ISO/27001, and GDPR. Secure access and
              provisioning with SAML-based SSO.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Enterprise;
