import React from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";
import { CandleType } from "../../../utils/types/candles";

const FavoritesButton = ({
  actionButtonInfo,
  favoritesArray,
  favoritesAmount,
}: {
  actionButtonInfo: ActionButtonInfoT;
  favoritesArray: CandleType[];
  favoritesAmount: number;
}) => {
  return (
    <GenericActionButton
      amount={favoritesAmount}
      type="favorites"
      candles={favoritesArray}
      actionButtonInfo={actionButtonInfo}
    />
  );
};

export default FavoritesButton;
