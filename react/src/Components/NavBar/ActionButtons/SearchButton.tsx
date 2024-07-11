import { SyntheticEvent } from "react";
import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";

const SearchButton = ({
  actionButtonInfo,
  openSearchBar,
}: {
  actionButtonInfo: ActionButtonInfoT;
  openSearchBar: (e: SyntheticEvent) => void;
}) => {
  return (
    <GenericActionButton
      openSearchBar={openSearchBar}
      actionButtonInfo={actionButtonInfo}
    />
  );
};

export default SearchButton;
