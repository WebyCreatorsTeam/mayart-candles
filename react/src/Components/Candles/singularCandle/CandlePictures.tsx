import { useState, useMemo } from "react";
import { CandleType } from "../../../utils/types/candles";
import AddToFavoritesButton from "./AddToFavoritesButton";

const CandlePictures = ({ currentCandle }: { currentCandle: CandleType }) => {
  const [currentCandlePicture, setCurrentCandlePicture] = useState(
    currentCandle.pictures[0].img,
  );
  const chooseCandlePicture = (picture: string) => {
    setCurrentCandlePicture(picture);
  };
  return (
    <div className=" relative flex flex-col xl:self-start">
      <img
        src={currentCandlePicture}
        alt={currentCandle.name}
        // not actual square, to achieve close to 1:1 aspect ratio, like the figma design, add xl:min-w-[776px].
        // to achieve w of 530px, add xl:min-w-[530px] xl:max-w-[530px]
        className="aspect-square h-[508px] w-full object-cover xl:h-[840px]"
      />
      <AddToFavoritesButton candle={currentCandle} />
      <div className="flex justify-center gap-3 py-5 xl:justify-start">
        {useMemo(
          () =>
            currentCandle.pictures.map((picture, index) => {
              return (
                <button
                  key={index}
                  className={`h-[98px] w-[68px] xl:h-fit xl:w-[153px]`}
                  onClick={() => chooseCandlePicture(picture.img)}
                >
                  <img
                    src={picture.img}
                    alt={`number ${index + 1}`}
                    className="aspect-[0.69/1] object-cover "
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
