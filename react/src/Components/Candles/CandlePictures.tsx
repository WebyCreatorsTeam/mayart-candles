import { useState, useMemo } from "react";
import { CandleType } from "../../utils/types/candles";

const CandlePictures = ({ currentCandle }: { currentCandle: CandleType }) => {
  const [currentCandlePicture, setCurrentCandlePicture] = useState(
    currentCandle.pictures[0].img,
  );
  const chooseCandlePicture = (picture: string) => {
    setCurrentCandlePicture(picture);
  };
  return (
    <div className="flex flex-col">
      <img
        src={currentCandlePicture}
        alt={currentCandle.name}
        className=" h-[508px] w-full object-cover"
      />
      <div className="flex justify-center gap-3 py-5">
        {useMemo(
          () =>
            currentCandle.pictures.map((picture, index) => {
              return (
                <button
                  key={index}
                  className={`h-[98px] w-[68px]`}
                  onClick={() => chooseCandlePicture(picture.img)}
                >
                  <img
                    src={picture.img}
                    alt={`number ${index + 1}`}
                    className="aspect-[0.69/1] overflow-hidden object-cover"
                  />
                </button>
              );
            }),
          [currentCandle.pictures],
        )}
      </div>
    </div>
  );
};

export default CandlePictures;
