import { useState } from "react";
import { CandleType, CandleColorT } from "../../../utils/types/candles";

const ColorsMenu = ({ currentCandle }: { currentCandle: CandleType }) => {
  console.log(currentCandle.colors);
  
  const [currentCandleColor, setCurrentCandleColor] = useState(
    currentCandle.colors[0],
  );
  const currentCandleColorOptions = currentCandle.colors;
  const findCandleColorById = (id: string) => {
    return currentCandle.colors.find((color) => color._id === id);
  };
  const chooseCandleColor = (id: CandleColorT["_id"]) => {
    const color = findCandleColorById(id);
    if (!color) return;
    setCurrentCandleColor(color);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="sm:text-[38.49px] sm:leading-[76.98px]">
        צבע: {currentCandleColor.color}
      </span>
      <div className="flex w-64 flex-wrap justify-center gap-6 sm:w-fit">
        {currentCandleColorOptions.map((color) => (
          <ColorOption
            key={color._id}
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
  chooseCandleColor: (color: CandleColorT["_id"]) => void;
}) => {
  return (
    <div
      onClick={() => chooseCandleColor(color._id)}
      className={`h-16 w-16 rounded-full border-[0.88px] border-[#121515] sm:h-32 sm:w-32`}
      style={{ background: `${color.hexCode}` }}
    ></div>
  );
};

export default ColorsMenu;
