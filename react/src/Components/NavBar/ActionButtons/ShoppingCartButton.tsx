import React from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";
import { useLocalCandleStorage } from "../../../utils/localCandleStorage";

const ShoppingCartButton = ({
  actionButtonInfo,
}: {
  actionButtonInfo: ActionButtonInfoT;
}) => {
  const { setItem, getItems } = useLocalCandleStorage("shoppingCartCandles");
  const candles = getItems();
  return (
    <GenericActionButton
      type="shoppingCart"
      candles={candles}
      actionButtonInfo={actionButtonInfo}
    />
  );
};

export default ShoppingCartButton;
