import React from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";
import {  ChosenCandleType } from "../../../utils/types/candles";

const ShoppingCartButton = ({
  actionButtonInfo,
  shoppingCartArray,
  shoppingCartAmount,
}: {
  actionButtonInfo: ActionButtonInfoT;
  shoppingCartArray: Array<ChosenCandleType> | undefined;
  shoppingCartAmount: number;
}) => {
  
  return (
    <GenericActionButton
      amount={shoppingCartAmount}
      type="shoppingCart"
      candles={shoppingCartArray}
      actionButtonInfo={actionButtonInfo}
    />
  );
};

export default ShoppingCartButton;
