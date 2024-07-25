import React, { useState, useEffect } from 'react';

const AnticlockwiseClock = ({speed}) => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [initialTime, setInitialTime] = useState(new Date(currentTime.getTime() - 120 * 60000)); // 120 minutes earlier

  useEffect(() => {
    const interval = setInterval(() => {
      setInitialTime(prevTime => new Date(prevTime.getTime() - 1000)); // Decrement by 1 second
    },speed); // Update every second

    return () => clearInterval(interval);
  },[speed]);

  const getClockRotation = (time) => {
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondHandRotation = seconds * 6;
    const minuteHandRotation = minutes * 6;
    const hourHandRotation = (hours % 12) * 30 + minutes * 0.5;

    return {
      secondHandRotation,
      minuteHandRotation,
      hourHandRotation,
    };
  };

  const { secondHandRotation, minuteHandRotation, hourHandRotation } = getClockRotation(initialTime);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-72 h-72 border-4 border-black rounded-full bg-slate-400">
        <div className='absolute'>
          <p className='ml-32'>12</p>
          <p className='ml-52 -mt-3'>1</p>
          <p className='ml-14 -mt-5'>11</p>
          <p className='ml-64 mt-6'>2</p>
          <p className='ml-2 -mt-5'>10</p>
          <p className=' mt-11' style={{ marginLeft: "17rem" }}>3</p>
          <p className='-mt-6'>9</p>
          <p className='ml-60 mt-10'>4</p>
          <p className='ml-6 -mt-7'>8</p>
          <p className='ml-52 mt-6'>5</p>
          <p className=' -mt-1' style={{ marginLeft: "8.6rem" }}>6</p>
          <p className='ml-16 -mt-11'>7</p>
        </div>
        <div
          className="absolute w-1/2 h-1 bg-black"
          style={{ transform: `rotate(-${secondHandRotation}deg) translateX(-50%)`, marginTop: "8.5rem", marginLeft: "4.3rem" }}
        ></div>
        <div
          className="absolute w-1/2 h-2 bg-red-500"
          style={{ transform: `rotate(-${minuteHandRotation}deg) translateX(-50%)`, marginTop: "8.4rem", marginLeft: "4.3rem" }}
        ></div>
        <div
          className="absolute w-1/3 h-3 bg-blue-500"
          style={{ transform: `rotate(-${hourHandRotation}deg) translateX(-50%)`, marginTop: "8.3rem", marginLeft: "5.4rem" }}
        ></div>
      </div>
    </div>
  );
};

export default AnticlockwiseClock;
