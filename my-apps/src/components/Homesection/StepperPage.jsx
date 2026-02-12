import React from "react";
// import ConnectedCards from "../Homesection/Card";
const StepperPage = () => {
  
  return (
    <div className="flex border rounded-lg border-gray-200 flex-col justify-center items-center max-w-5xl mx-auto py-8 mt-10 px-6">
      <div className=" px-6 py-6 flex flex-col items-center text-center gap-4 ">
        <div className="text-sm text-green-800 font-bold">Assistant</div>
        <div className="text-gray-900 text-2xl font-semibold">
          Intelligent assistance for your users
        </div>
        <div className="max-w-lg text-center text-gray-900">
          Turn every documentation visit into a guided conversation. Your AI
          assistant understands context and delivers what users need.
        </div>

        

       {/* < ConnectedCards /> */}
      </div>
    </div>
  );
};

export default StepperPage;
