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
          <img
            src="/mintlify-wordmark.svg"
            alt="Mintlify"
            className={`h-6 w-auto transition ${
              dark
                ? scrolled
                  ? "invert-0"
                  : "invert"
                : scrolled
                ? "invert"
                : ""
            }`}
          />
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
