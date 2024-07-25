import React, { useEffect, useState } from "react";
import AnticlockwiseClock from "./AnticlockwiseClock";
import Slider from "./Slider";
import axios from "axios";

function TrackingPage() {
  const API = `https://type.fit/api/quotes`;

  const [quote, setQuote] = useState("");
  const [state, setState] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [sliderValue, setSliderValue] = useState(0);

  // console.log(speed);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(API);
        setQuote(response.data);
      } catch (error) {
        console.error("Error while calling the api", error.message);
      }
    };

    fetchQuote();
  }, []);

  useEffect(() => {
      const interval = setInterval(() => {
        setState((prevIndex) => (prevIndex + 1) % quote.length);
      }, 2000);

      return () => clearInterval(interval);
  }, [quote]);

  const handleShare = () => {
    const shareUrl = `${window.location.origin}?slider=${sliderValue}`;
    // history.push(`?slider=${sliderValue}`);
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('URL copied to clipboard: ' + shareUrl);
    });
  };

  return (
    <div className="relative">
      <h1
        className="absolute mt-2 text-white w-80"
        style={{
          marginLeft: "42rem",
          marginTop: "2.5rem",
          fontWeight: "400",
          fontSize: "18px",
        }}
      >
        {quote.length > 0 ? <p>{quote[state].text}</p> : <p>...Loading</p>}
        {/* {quote[state].text} */}
      </h1>
      <div className="flex bg-gray-300 w-[60%] h-96 m-auto rounded-lg mt-24">
        <div className="-mt-40 ml-4">
          <AnticlockwiseClock  speed={speed}/>
        </div>
        <Slider value={speed} onChange={newSpeed => setSpeed(Number(newSpeed))}/>
        <button
          className="bg-orange-600 w-28 h-10 rounded-lg  "
          style={{ marginTop: "19.4rem", marginLeft: "4rem" }}
          onClick={handleShare}
        >
          Share
        </button>
      </div>
    </div>
  );
}

export default TrackingPage;
