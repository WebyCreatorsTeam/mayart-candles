import React from "react";
import HeroImageSection from "../Components/HeroImageSection";
import CandlesAll from "./Candles/CandlesAll/CandlesAll";

const Home = () => {
  return (
    <div className="scrollbar-none flex flex-col">
      <HeroImageSection />
      <CandlesAll home />
    </div>
  );
};

export default Home;
