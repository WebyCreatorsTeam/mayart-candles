import GenericActionButton, { ActionButtonInfoT } from "./GenericActionButton";

const SearchButton = ({
  actionButtonInfo,
  openSearchBar,
}: {
  actionButtonInfo: ActionButtonInfoT;
  openSearchBar: () => void;
}) => {
  return (
    <GenericActionButton
      openSearchBar={openSearchBar}
      actionButtonInfo={actionButtonInfo}
    />
  );
};

export default SearchButton;
