// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Equal, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   //
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { label: "Resources", href: "/features" },
//     { label: "Documentation", href: "/Documentation" },
//     { label: "Customers", href: "/startups" },
//     { label: "Blog", href: "/Blog" },
//     { label: "Pricing", href: "/pricing" },
//   ];

//   return (
//     <nav
//       className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
//     ${scrolled ? "bg-white/20 backdrop-blur-md" : "bg-transparent"}
//   `}
//     >
//       {/* Main bar */}
//       <div className="mx-auto max-w-6xl px-10 py-4 flex items-center justify-between">
//         {/* Logo → Home */}
//         <Link href="/Home" className="flex items-center gap-2">
//           <img
//             src="/mintlify-wordmark.svg"
//             alt="Mintlify"
//             className={`h-6 w-auto transition ${
//               scrolled ? "invert " : ""
//             }`}
//           />
//         </Link>

//         {/* Desktop Links */}
//         <ul
//           className={`hidden md:flex items-center gap-8 text-sm font-medium transition
//             ${scrolled ? "text-black" : "text-white"}
//           `}
//         >
//           {links.map((item) => (
//             <li key={item.label}>
//               <Link
//                 href={item.href}
//                 className="cursor-pointer hover:text-white transition-colors"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Actions */}
//         <div className="hidden md:flex items-center gap-2">
//           <Link
//             href="/contact"
//             className={`rounded-full shadow-md px-4 py-2 text-sm transition
//               ${scrolled ? "text-black bg-gray-100" : "text-white bg-white/10"}
//             `}
//           >
//             Contact Sales
//           </Link>

//           <Link
//             href="/register"
//             className={`rounded-full  px-4 py-2 text-sm font-medium  hover:bg-blue-700 transition  ${scrolled ? 'bg-black text-white':'text-black bg-white'}`}
//           >
//             Start for Free
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           aria-label="Toggle menu"
//           onClick={() => setOpen(!open)}
//           className={`md:hidden transition ${
//             scrolled ? "text-black" : "text-white"
//           }`}
//         >
//           {open ? <X size={28} /> : <Equal size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="fixed md:hidden top-16 inset-x-0 bottom-0 z-40 bg-white/90 backdrop-blur-xl">
//           <div className="h-full flex flex-col justify-between px-6 py-8 overflow-y-auto">
//             {/* Links */}
//             <ul className="space-y-3 mt-8 text-sm font-medium text-black">
//               {links.map((item) => (
//                 <li key={item.label} className="border-b border-black/10 pb-4">
//                   <Link
//                     href={item.href}
//                     onClick={() => setOpen(false)}
//                     className="block hover:opacity-70 transition"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* CTA */}
//             <div className="flex flex-col py-6 my-6 gap-4 mb-6">
//               <Link
//                 href="/contact"
//                 onClick={() => setOpen(false)}
//                 className="rounded-full bg-stone-100 py-2 w-full text-sm font-medium text-black text-center hover:bg-black/5 transition"
//               >
//                 Contact Sales
//               </Link>

//               <Link
//                 href="/register"
//                 onClick={() => setOpen(false)}
//                 className="rounded-full bg-black py-2 w-full text-sm font-semibold text-white text-center hover:bg-blue-700 transition"
//               >
//                 Start for Free
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Equal, X } from "lucide-react";
import { useTheme } from "@/Context/ThemeContext/page";

export default function Navbar() {
  const { dark } = useTheme();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
// this is evening 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Resources", href: "/features" },
    { label: "Documentation", href: "/Documentation" },
    { label: "Customers", href: "/startups" },
    { label: "Blog", href: "/Blog" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
      ${
        scrolled
          ? dark
            ? "bg-black/70 backdrop-blur-md"
            : "bg-white/70 backdrop-blur-md"
          : "bg-transparent"
      }
    `}
    >
      <div className="mx-auto max-w-6xl px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/Home" className="flex items-center gap-2">
             
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

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition
            ${
              scrolled
                ? dark
                  ? "text-white"
                  : "text-black"
                : dark
                ? "text-white"
                : "text-white"
            }
          `}
        >
          {links.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="cursor-pointer hover:opacity-80 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/contact"
            className={`rounded-full shadow-md px-4 py-2 text-sm transition
              ${
                dark
                  ? scrolled
                    ? "text-white bg-white/10"
                    : "text-white bg-white/10"
                  : scrolled
                  ? "text-black bg-gray-100"
                  : "text-white bg-white/10"
              }
            `}
          >
            Contact Sales
          </Link>

          <Link
            href="/register"
            className={`rounded-full px-4 py-2 text-sm font-medium transition
              ${
                dark
                  ? "bg-white text-black hover:bg-white/85"
                  : scrolled
                  ? "bg-black text-white"
                  : "text-black bg-white"
              }
            `}
          >
            Start for Free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`md:hidden transition ${
            scrolled
              ? dark
                ? "text-white"
                : "text-black"
              : "text-white"
          }`}
        >
          {open ? <X size={28} /> : <Equal size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`fixed md:hidden top-16 inset-x-0 bottom-0 z-40 backdrop-blur-xl
          ${dark ? "bg-black/95 text-white" : "bg-white/95 text-black"}
        `}
        >
          <div className="h-full flex flex-col justify-between px-6 py-8 overflow-y-auto">
            <ul className="space-y-3 mt-8 text-sm font-medium">
              {links.map((item) => (
                <li
                  key={item.label}
                  className={`pb-4 ${
                    dark ? "border-b border-white/10" : "border-b border-black/10"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block hover:opacity-70 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col py-6 my-6 gap-4 mb-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`rounded-full py-2 w-full text-sm font-medium text-center transition
                  ${
                    dark
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-stone-100 text-black hover:bg-black/5"
                  }
                `}
              >
                Contact Sales
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className={`rounded-full py-2 w-full text-sm font-semibold text-center transition
                  ${
                    dark
                      ? "bg-white text-black hover:bg-white/85"
                      : "bg-black text-white hover:bg-blue-700"
                  }
                `}
              >
                Start for Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
