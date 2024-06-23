import React, { useState } from "react";
import "./output.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

import { CandleType } from "./utils/types/candles";
import { useLocalFavoriteCandlesStorage } from "./utils/localCandleStorage";
import ContactKnob from "./Components/ContactKnob";

export type ContextType = {
  favoritesArray: CandleType[];
  handleAddToFavoritesArray: (value: CandleType) => void;
};
function App() {
  const { getItems, addItem } = useLocalFavoriteCandlesStorage();
  const initialFavoritesArray = getItems();
  const [favoritesArray, setFavoritesArray] = useState<CandleType[]>(
    initialFavoritesArray || [],
  );
  const handleAddToFavoritesArray = (value: CandleType) => {
    const alreadyFavorite = favoritesArray.findIndex(
      (candle) => candle._id === value._id,
    );
    if (alreadyFavorite === -1) setFavoritesArray([...favoritesArray, value]);
    else {
      const filteredArray = favoritesArray.filter(
        (favorite) => favorite._id !== value._id,
      );
      setFavoritesArray(filteredArray);
    }
    addItem(value);
  };
  return (
    <div className="scrollbar-none relative flex h-fit min-h-svh flex-col justify-between overflow-x-clip">
      <div className="h-full ">
        <NavBar
          favoritesArray={favoritesArray}
          handleAddToFavoritesArray={handleAddToFavoritesArray}
        />
        <div className="flex h-fit w-full flex-col">
          <Outlet
            context={{
              favoritesArray,
              handleAddToFavoritesArray,
            }}
          />
          <ContactKnob />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
