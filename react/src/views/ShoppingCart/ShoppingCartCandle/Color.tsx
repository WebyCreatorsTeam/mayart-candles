import React from "react";
import { CandleColorT } from "../../../utils/types/candles";

const Color = ({ color }: { color: CandleColorT }) => {
  return (
    <div className="flex w-full items-start justify-center gap-[18px] sm:gap-[38.49px] xl:justify-start">
      <h2>צבע: {color.color}</h2>
      <div
        aria-description={`צבע ${color.color}`}
        style={{
          backgroundColor: `${color.hexCode}`,
          border: color.color === "לבן" ? "1px solid black" : "0",
        }}
        className={`size-[31px] self-center rounded-full`}
      ></div>
    </div>
  );
};

export default Color;
