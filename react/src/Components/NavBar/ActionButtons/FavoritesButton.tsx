import React from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";
import { CandleType } from "../../../utils/types/candles";

const FavoritesButton = ({
  actionButtonInfo,
  favoritesArray,
  handleAddToFavoritesArray,
}: {
  actionButtonInfo: ActionButtonInfoT;
  favoritesArray: CandleType[];
  handleAddToFavoritesArray: (value: CandleType) => void;
}) => {
  return (
    <GenericActionButton
      type="favorites"
      candles={favoritesArray}
      actionButtonInfo={actionButtonInfo}
    />
  );
};

export default FavoritesButton;
