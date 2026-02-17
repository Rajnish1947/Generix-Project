
// import React from "react";
// import {  Flame , Wallpaper ,Trophy,LampDesk} from "lucide-react";

// const Card = () => {
//   const items = [
//     {
//       icon: <Wallpaper size={28} />,
//       title: "Discounts and credits",
//       desc: "Unlock Pro plan features for free for the first six months and extended AI credits.",
//     },
//     {
//       icon: <Trophy size={28} />,
//       title: "Priority support",
//       desc: "Get fast support from our team, with a dedicated channel for startup founders.",
//     },
//     {
//       icon: <LampDesk size={28} />,
//       title: "Startup pack",
//       desc: "Access discounts and perks from popular products for startups.",
//     },
//     {
//       icon: <Flame  size={28} />,
//       title: "Startup survival kit",
//       desc: "Get access to our startup survival kit sent to your doorstep.",
//     },
//   ];

//   return (
//     <section className="max-w-5xl relative mx-auto px-6 py-20">
//       <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 items-stretch">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="h-full w-full rounded-2xl  bg-gray-100 p-8
//                        flex flex-col items-center justify-between text-center"
//           >
//             {/* Icon */}
//             <div className="text-black mb-3">
//               {item.icon}
//             </div>

//             {/* Content */}
//             <div className="flex-1 flex flex-col justify-center">
//               <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                 {item.title}
//               </h3>

//               <p className="text-[15px] leading-relaxed text-gray-500">
//                 {item.desc}
//               </p>
//             </div>
//             <div className="flex items-center gap-2">

// </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Card;
'use client';
import React from "react";
import { Flame, Wallpaper, Trophy, LampDesk } from "lucide-react";
import { useTheme } from "@/Context/ThemeContext/page";

const Card = () => {
  const { dark } = useTheme();

  const items = [
    {
      icon: <Wallpaper size={28} />,
      title: "Discounts and credits",
      desc: "Unlock Pro plan features for free for the first six months and extended AI credits.",
    },
    {
      icon: <Trophy size={28} />,
      title: "Priority support",
      desc: "Get fast support from our team, with a dedicated channel for startup founders.",
    },
    {
      icon: <LampDesk size={28} />,
      title: "Startup pack",
      desc: "Access discounts and perks from popular products for startups.",
    },
    {
      icon: <Flame size={28} />,
      title: "Startup survival kit",
      desc: "Get access to our startup survival kit sent to your doorstep.",
    },
  ];

  return (
    <section className="max-w-5xl relative mx-auto px-6 py-20">
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 items-stretch">
        {items.map((item, index) => (
          <div
            key={index}
            className={`h-full w-full rounded-2xl p-8
              flex flex-col items-center justify-between text-center
              ${dark ? "bg-neutral-900" : "bg-gray-100"}`}
          >
            {/* Icon */}
            <div className={`mb-3 ${dark ? "text-white" : "text-black"}`}>
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
              <h3
                className={`mb-4 text-xl font-semibold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`text-[15px] leading-relaxed ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {item.desc}
              </p>
            </div>

            <div className="flex items-center gap-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
