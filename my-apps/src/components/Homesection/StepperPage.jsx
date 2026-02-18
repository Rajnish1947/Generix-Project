import React from "react";
import { useTheme } from "@/Context/ThemeContext/page";
// import ConnectedCards from "../Homesection/Card";
const StepperPage = () => {
    const { dark } = useTheme();
  return (
    <div className={`flex border rounded-lg ${dark ? "border-gray-900" : "border-gray-200"} flex-col justify-center items-center max-w-5xl mx-auto py-8 mt-10 px-6`}>
      <div className=" px-6 py-6 flex flex-col items-center text-center gap-4 ">
        <div className={`text-xl ${dark ? "text-white" : "text-green-800"} font-semibold`}>Assistant</div>
        <div className={`text-2xl font-semibold ${dark ? "text-white" : "text-gray-900"}`}>
          Intelligent assistance for your users
        </div>
        <div className={`max-w-lg text-center ${dark ? "text-white/80" : "text-gray-900"}`}>
          Turn every documentation visit into a guided conversation. Your AI
          assistant understands context and delivers what users need.
        </div>

        

       {/* < ConnectedCards /> */}
      </div>
    </div>
  );
};

export default StepperPage;
