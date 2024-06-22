import React from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";

const SearchButton = ({
  actionButtonInfo,
}: {
  actionButtonInfo: ActionButtonInfoT;
}) => {
  return <GenericActionButton
   actionButtonInfo={actionButtonInfo} />;
};

export default SearchButton;
