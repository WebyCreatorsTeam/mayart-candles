import React from "react";
import AllCandles from "../../views/Candles/AllCandles/AllCandles";

const Home = () => {
  return (
    <div>
      <img
        src="/images/hero-image.webp"
        alt="hero"
        className="flex h-[700px] w-[100vw] flex-col-reverse"
      />
      <div className="absolute mt-[-30%] h-[48px] w-[676px] gap-5 rounded-xl bg-white text-center">
        <span>
          חג שמח! 50% על כל הנרות ב <h1>MAYART</h1>{" "}
          <img src="../../../public/images/Heart-Streamline-Core.png" alt="" />
        </span>
      </div>
      <AllCandles />
    </div>
  );
};

export default Home;
