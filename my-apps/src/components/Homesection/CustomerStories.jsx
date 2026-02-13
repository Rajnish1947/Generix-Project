// "use client";
// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const customers = [
//   {
//     name: "Perplexity",
//     image: "/per.webp",
//     desc: "How Perplexity transformed its documentation into an AI-native developer experience that ",
//   },
//   {
//     name: "X",
//     image: "/x.webp",
//     desc: "How X is using Mintlify to power the developer experience for the global town square",
//   },
//   {
//     name: "Kalshi",
//     image: "/kalshi.webp",
//     desc: "How Kalshi helps developers discover what's possible faster and ultimately drive broader adoption .",
//   },
//   {
//     name: "Cognition",
//     image: "/per.webp",
//     desc: "How Cognition scaled their documentation to mirror their product ethos",
//   },
//   {
//     name: "Together AI",
//     image: "/togetherai.webp",
//     desc: "How Together AI scaled their documentation into a developer experience that mirrors their own ethos",
//   },
//   {
//     name: "Laravel",
//     image: "/per.webp",
//     desc: "How Laravel scaled world-class documentation across 10+ products",
//   },
// ];

// const CustomerStories = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const scrollAmount = 400;

//     container.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="relative w-full py-28 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm font-semibold tracking-widest text-emerald-600 mb-3">
//             CUSTOMERS
//           </p>
//           <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
//             Unlock knowledge for any industry
//           </h2>
//           <p className="text-gray-600 px-1 text-lg max-w-2xl mx-auto">
//             From frontier AI companies to consumer brands, leaders across
//             industries scale with Mintlify.
//           </p>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           {/* Cards */}
//           <div
//             ref={scrollRef}
//             className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 "
//           >
//             {customers.map((item, index) => (
//               <div
//                 key={index}
//                 className="group relative min-w-[390px]  
//                 rounded-xl overflow-hidden "
//               >
//                 {/* Image Section */}
//                 <div className="relative h-55 overflow-hidden">
//                   {/* Image */}
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover rounded-xl
                 
//                    "
//                   />

//                   {/* Dark Overlay */}
//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition duration-500" />

//                   {/* Centered Title */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <h3 className="text-white text-3xl font-semibold tracking-wide text-center px-4">
//                       {item.name}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Content Below Image */}
//                 <div className="p-6">
//                   <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                     {item.desc}
//                   </p>

//                   <div className="flex items-center gap-2 text-gray-700 text-sm hover:text-green-700 font-medium cursor-pointer group/link">
//                     Read story
//                     <ChevronRight
//                       size={18}
//                       className="transition-transform duration-300 group-hover/link:translate-x-1"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Arrows */}
//           <div className="flex justify-center gap-6 mt-10">
//             <button
//               onClick={() => scroll("left")}
//               className="w-12 h-12 flex items-center justify-center 
//                          rounded-full bg-black text-white 
//                          hover:scale-110 transition"
//             >
//               <ChevronLeft size={20} />
//             </button>

//             <button
//               onClick={() => scroll("right")}
//               className="w-12 h-12 flex items-center justify-center 
//                          rounded-full bg-black text-white 
//                          hover:scale-110 transition"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerStories;
"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const customers = [
  {
    name: "Perplexity",
    image: "/per.webp",
    desc: "How Perplexity transformed its documentation into an AI-native developer experience that matches the pace of its product development.",
  },
  {
    name: "X",
    image: "/x.webp",
    desc: "How X is using Mintlify to power the developer experience for the global town square.",
  },
  {
    name: "Kalshi",
    image: "/kalshi.webp",
    desc: "How Kalshi helps developers discover what's possible faster and ultimately drive broader adoption.",
  },
  {
    name: "Cognition",
    image: "/per.webp",
    desc: "How Cognition scaled their documentation to mirror their product ethos.",
  },
  {
    name: "Together AI",
    image: "/togetherai.webp",
    desc: "How Together AI scaled their documentation into a developer experience that mirrors their own ethos.",
  },
  {
    name: "Laravel",
    image: "/per.webp",
    desc: "How Laravel scaled world-class documentation across 10+ products.",
  },
];

const CustomerStories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 400;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 mb-3">
            CUSTOMERS
          </p>
          <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
            Unlock knowledge for any industry
          </h2>
          <p className="text-gray-600 px-1 text-lg max-w-2xl mx-auto">
            From frontier AI companies to consumer brands, leaders across
            industries scale with Mintlify.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          
          {/* Cards */}
          <div
            ref={scrollRef}
            className="
              flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {customers.map((item, index) => (
              <div
                key={index}
                className="group relative min-w-[390px] snap-start rounded-xl overflow-hidden"
              >
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition duration-500" />

                  {/* Title */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-semibold tracking-wide text-center px-4">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 text-gray-700 text-sm hover:text-green-700 font-medium cursor-pointer group/link">
                    Read story
                    <ChevronRight
                      size={18}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={() => scroll("left")}
              className="p-1 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="p-1 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
