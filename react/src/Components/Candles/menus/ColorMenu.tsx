import { useState } from "react";
import { CandleType, CandleColorT } from "../../../types/candles";

const ColorsMenu = ({ currentCandle }: { currentCandle: CandleType }) => {
  const [currentCandleColor, setCurrentCandleColor] = useState(
    currentCandle.colors[0],
  );
  const currentCandleColorOptions = currentCandle.colors;
  const chooseCandleColor = (color: CandleColorT) => {
    setCurrentCandleColor(color);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <span>צבע: {currentCandleColor}</span>
      <div className="flex flex-wrap justify-center w-64 gap-6">
        {currentCandleColorOptions.map((color)=> (
          <ColorOption
            key={color}
            color={color}
            chooseCandleColor={chooseCandleColor}
            colorClass={`bg-candle-${color}`}
          />
        ))}
      
      </div>
    </div>
  );
};

const ColorOption = ({
  color,
  chooseCandleColor,
  colorClass,
}: {
  color: CandleColorT;
  chooseCandleColor: (color: CandleColorT) => void;
  colorClass: string;
}) => {
  return (
    <div
      onClick={() => chooseCandleColor(color)}
      className={`h-16 w-16 rounded-full border-[#121515] border-[0.88px] ${colorClass}`}
    ></div>
  );
};

export default ColorsMenu;
