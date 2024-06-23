import React from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";
import { useLocalShoppingCartCandlesStorage } from "../../../utils/localCandleStorage";

const ShoppingCartButton = ({
  actionButtonInfo,
}: {
  actionButtonInfo: ActionButtonInfoT;
}) => {
  const { getItems } = useLocalShoppingCartCandlesStorage();
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
