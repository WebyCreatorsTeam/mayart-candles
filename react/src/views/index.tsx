import React from "react";
import HeroImageSection from "../Components/HeroImageSection";
import AllCandles from "./Candles/AllCandles/AllCandles";

const Home = () => {
  return (
    <div className="scrollbar-none flex flex-col">
      <HeroImageSection />
      <AllCandles home />
    </div>
  );
};

export default Home;
