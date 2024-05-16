import { useState, useMemo } from "react";
import { CandleType } from "../../types/candles";

const CandlePictures = ({ currentCandle }: { currentCandle: CandleType }) => {
  const [currentCandlePicture, setCurrentCandlePicture] = useState(
    currentCandle.pictures[0],
  );
  const chooseCandlePicture = (picture: string) => {
    setCurrentCandlePicture(picture);
  };
  return (
    <>
      <img
        src={currentCandlePicture}
        alt={currentCandle.name}
        className="min-h-96 w-full object-cover"
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
                  <img src={picture} alt={`Picture ${index + 1}`} />
                </button>
              );
            }),

          [currentCandle.pictures],
        )}
      </div>
    </>
  );
};

export default CandlePictures;
