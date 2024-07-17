import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Hero({setLogin}) {

  const handleLogin = () => {
    setTimeout(() => {
      setLogin(false);
    });
  }

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
      <div className="bg-orange-600 h-80 w-60 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 rounded-3xl text-white">
        <h1 className="font-sans text-2xl text-center mt-4 font-bold">
          We serve incomparable delicacies
        </h1>
        <p className="font-sans text-center text-sm mt-2 ml-5 mr-5">
          All the best restaurants with their top menu waiting for you, they
          cant’t wait for your order!!
        </p>
        <h1 className="text-3xl text-center hover:text-blue-600 cursor-pointer">
          ---
        </h1>
        <div className="flex mt-14 ">
        <p className="ml-6">skip</p>
        <p className="ml-28 cursor-pointer" onClick={handleLogin}>next <ArrowForwardIcon /></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
