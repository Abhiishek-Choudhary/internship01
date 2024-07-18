import React from "react";
import AnticlockwiseClock from "./AnticlockwiseClock";
import Slider from "./Slider";

function TrackingPage() {
  return (
    <div>
      <div className="flex bg-gray-300 w-[70%] h-96 m-auto rounded-lg mt-24">
        <div className="-mt-40 ml-4">
        <AnticlockwiseClock />
        </div>
         <Slider />
        <button className="bg-orange-600 w-28 h-10 rounded-xl mt-80 ">
          Share
        </button>
      </div>
    </div>
  );
}

export default TrackingPage;
