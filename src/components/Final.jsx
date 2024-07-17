import React from "react";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


function Final() {
  return (
    <div className="relative">
      <div>
        <img
          className=" h-[100vh] w-[100vw] laptop:hidden"
          src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="mobile burger"
        />
      </div>
      <img
        className=" w-full h-[100vh] tablet:hidden no-scrollbar"
        src="https://images.pexels.com/photos/9588852/pexels-photo-9588852.jpeg?auto=compress&cs=tinysrgb&w=2400&lazy=load"
        alt="burger"
      />
      <div className="bg-white absolute h-96 w-72 bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-3xl">
         <div className="ml-32"><HorizontalRuleIcon fontSize="large"/></div>
        <img
          className="w-24 m-auto mt-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasBMOyjorFLPnsOSbtWGAVwGxMDQ-Cscm9A&s"
          alt="sucess"
        />
        <h1 className="text-2xl text-center mt-4">
          <b>Login Sucessful</b>
        </h1>
        <button className="bg-orange-500 rounded-full shadow-lg w-60 ml-6 mt-6 p-2 text-white">
            Go to Tracking Screen
        </button>
        <h1 className="text-gray-400 text-center mt-3 cursor-pointer">Logout</h1>
      </div>
    </div>
  );
}

export default Final;
