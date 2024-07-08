import { CandleColorT } from "../../../utils/types/candles";

const ColorsMenu = ({
  chooseCandleColor,
  currentCandleColor,
  currentCandleColorOptions,
}: {
  chooseCandleColor: (color: CandleColorT["_id"]) => void;
  currentCandleColor: CandleColorT;
  currentCandleColorOptions: CandleColorT[];
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-lg leading-[36px] sm:text-[38.49px]  sm:leading-[76.98px]">
        צבע: {currentCandleColor.color}
      </span>
      <div className="flex w-64 flex-wrap justify-center gap-6 sm:w-fit">
        {currentCandleColorOptions.map((color) => (
          <ColorOption
            key={color._id}
            color={color}
            chooseCandleColor={chooseCandleColor}
            currentCandleColor={currentCandleColor}
          />
        ))}
      </div>
    </div>
  );
};

const ColorOption = ({
  color,
  chooseCandleColor,
  currentCandleColor,
}: {
  color: CandleColorT;
  chooseCandleColor: (color: CandleColorT["_id"]) => void;
  currentCandleColor: CandleColorT;
}) => {
  return (
    <div
      onClick={() => chooseCandleColor(color._id)}
      className={`h-16 w-16 rounded-full  border-[#121515] sm:h-32 sm:w-32 ${currentCandleColor._id === color._id ? "border-2" : "border-[0.88px]"}`}
      style={{ background: `${color.hexCode}` }}
    ></div>
  );
};

export default ColorsMenu;
