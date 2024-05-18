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
      <span className="sm:text-[38.49px] sm:leading-[76.98px]">
        צבע: {currentCandleColor}
      </span>
      <div className="flex w-64 flex-wrap justify-center gap-6 sm:w-fit">
        {currentCandleColorOptions.map((color) => (
          <ColorOption
            key={color}
            color={color}
            chooseCandleColor={chooseCandleColor}
          />
        ))}
      </div>
    </div>
  );
};

const ColorOption = ({
  color,
  chooseCandleColor,
}: {
  color: CandleColorT;
  chooseCandleColor: (color: CandleColorT) => void;
}) => {
  const generateColorClass = (color: CandleColorT) => {
    switch (color) {
      case "כחול":
        return "bg-[#BACEFF]";
      case "ירוק":
        return "bg-[#B0C4B1]";
      case "לבן":
        return "bg-[#FFFFFF]";
      case "שחור":
        return "bg-[#121515]";
      case "גוף":
        return "bg-[#F7E1D7]";
      case "ורוד":
        return "bg-[#EAAFF9]";
    }
  };
  const colorClass = generateColorClass(color);
  return (
    <div
      onClick={() => chooseCandleColor(color)}
      className={`h-16 w-16 rounded-full border-[0.88px] border-[#121515] sm:h-32 sm:w-32 ${colorClass}`}
    ></div>
  );
};

export default ColorsMenu;
