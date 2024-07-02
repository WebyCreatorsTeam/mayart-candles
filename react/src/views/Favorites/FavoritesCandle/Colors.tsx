import React from "react";
import { CandleColorT } from "../../../utils/types/candles";

const Colors = ({ colors }: { colors: CandleColorT[] }) => {
  return (
    <div className="flex flex-col items-center sm:gap-[38.49px]">
      <h2>צבעים:</h2>
      <ul className="flex gap-[18px]">
        {colors.map((color) => (
          <li key={color._id}>
            {/* <p>{color.color}</p> */}
            <div
              aria-description={`צבע ${color.color}`}
              style={{
                backgroundColor: `${color.hexCode}`,
                border: color.color === "לבן" ? "1px solid black" : "0",
              }}
              className={`size-[31px] self-center rounded-full`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
