import React from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";
import { useLocalCandleStorage } from "../../../utils/localCandleStorage";

const FavoritesButton = ({
  actionButtonInfo,
}: {
  actionButtonInfo: ActionButtonInfoT;
}) => {
  const {setItem, getItems} = useLocalCandleStorage("favoritesCandles");
  const candles = getItems();
  return (
    <GenericActionButton
      type="favorites"
      candles={candles}
      actionButtonInfo={actionButtonInfo}
    />
  );
};

export default FavoritesButton;
