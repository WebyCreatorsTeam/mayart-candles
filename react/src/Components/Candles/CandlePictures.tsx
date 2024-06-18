import { useState, useMemo } from "react";
import { CandleType } from "../../utils/types/candles";

const CandlePictures = ({ currentCandle }: { currentCandle: CandleType }) => {
  const [currentCandlePicture, setCurrentCandlePicture] = useState(
    currentCandle.pictures[0],
  );
  const chooseCandlePicture = (picture: string) => {
    setCurrentCandlePicture(picture);
  };
  return (
    <div className="flex flex-col">
      <img
        src={currentCandlePicture}
        alt={currentCandle.name}
        className=" aspect-square h-full w-full object-cover"
      />
      <div className="flex justify-center gap-3 py-5">
        {useMemo(
          () =>
            currentCandle.pictures.map((picture, index) => {
              return (
                <button
                  key={index}
                  className={`h-16 w-16`}
                  onClick={() => chooseCandlePicture(picture)}
                >
                  <img
                    src={picture}
                    alt={`number ${index + 1}`}
                    className="aspect-square overflow-hidden object-cover"
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
