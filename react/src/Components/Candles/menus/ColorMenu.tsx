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
    <div className="flex flex-col items-center gap-3 xl:items-start xl:gap-[26px]">
      <span className="text-lg leading-[36px] sm:text-[38.49px] sm:leading-[76.98px] xl:text-[32px]  xl:leading-[42.56px]">
        צבע: {currentCandleColor.color}
      </span>
      <div className="flex w-64 flex-wrap justify-center gap-6 sm:w-fit xl:gap-[23px]">
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
      className={`group flex h-16 w-16 items-center justify-center rounded-full border-[#121515]  text-center sm:h-[70px] sm:w-[70px] ${currentCandleColor._id === color._id ? "border-2" : "border-[0.88px]"}`}
      style={{ background: `${color.hexCode}` }}
    >
      <p
        className={`hidden text-2xl leading-[31.92px] xl:group-hover:block ${color.color === "לבן" ? "text-black" : "text-white"}`}
      >
        {color.color}
      </p>
    </div>
  );
};

export default ColorsMenu;
