import React, { useEffect, useState } from "react";
import AnticlockwiseClock from "./AnticlockwiseClock";
import Slider from "./Slider";

function TrackingPage() {

  const API = `https://type.fit/api/quotes`;

  const [quote, setQuote] = useState('');
  // const [state, setState] = useState(true);
  
  // const handleChange = () => {
  //   setTimeout(() => {
  //     setQuote()
  //   }, 5000);
  // }

  useEffect(()=> {
      const fetchData = async() => {
          const result = await fetch(API);
          result.json().then(json => {
            setQuote(json[1].text);
          })
      }
      fetchData();
  })

  return (
    <div className="relative">
      <h1 className="absolute mt-2 text-white w-80" style={{ marginLeft: "42rem", marginTop: "2.5rem", fontWeight: "400", fontSize: "18px"}}>{quote}</h1>
      <div className="flex bg-gray-300 w-[60%] h-96 m-auto rounded-lg mt-24">
        <div className="-mt-40 ml-4">
        <AnticlockwiseClock  />
        </div>
         <Slider />
        <button className="bg-orange-600 w-28 h-10 rounded-lg  " style={{marginTop: "19.4rem", marginLeft: "4rem"}}>
          Share
        </button>
      </div>
    </div>
  );
}

export default TrackingPage;
