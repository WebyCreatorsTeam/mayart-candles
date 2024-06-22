import React from "react";
import SearchButton from "./SearchButton";
import FavoriteButton from "./FavoriteButton";
import ShoppingCartButton from "./ShoppingCartButton";
import { ActionButtonInfoT } from "./GenericActionButton";

const searchActionButtonInfo: ActionButtonInfoT = {
  mobile: {
    src: "/icons/nav/mobile/search-icon.svg",
    alt: "search icon",
  },
  tablet: {
    src: "/icons/nav/tablet/search-icon.svg",
    alt: "search icon",
  },
};

const favoriteActionButtonInfo: ActionButtonInfoT = {
  mobile: {
    src: "/icons/nav/mobile/heart-icon.svg",
    alt: "heart icon",
  },
  tablet: {
    src: "/icons/nav/tablet/heart-icon.svg",
    alt: "heart icon",
  },
};

const shoppingCartActionButtonInfo: ActionButtonInfoT = {
  mobile: {
    src: "/icons/nav/mobile/shopping-cart-icon.svg",
    alt: "shopping cart icon",
  },
  tablet: {
    src: "/icons/nav/tablet/shopping-cart-icon.svg",
    alt: "shopping cart icon",
  },
};
const ActionButtons = () => {
  return (
    <div className="flex gap-7 sm:gap-[29.93px]">
      <SearchButton actionButtonInfo={searchActionButtonInfo} />
      <FavoriteButton actionButtonInfo={favoriteActionButtonInfo} />
      <ShoppingCartButton actionButtonInfo={shoppingCartActionButtonInfo} />
    </div>
  );
};

export default ActionButtons;
