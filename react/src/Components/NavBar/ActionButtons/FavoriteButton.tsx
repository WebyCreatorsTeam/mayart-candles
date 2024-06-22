import React from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";
import { useLocalCandleStorage } from "../../../utils/localCandleStorage";

const FavoriteButton = ({
  actionButtonInfo,
}: {
  actionButtonInfo: ActionButtonInfoT;
}) => {
  const {setItem, getItems} = useLocalCandleStorage("favoriteCandles");
  const candles = getItems();
  return (
    <GenericActionButton
      candles={candles}
      actionButtonInfo={actionButtonInfo}
    />
  );
};

export default FavoriteButton;
