import React, { Dispatch, SetStateAction } from "react";
// import ActionButtons from "../ActionButtons";
import Logo from "../Logo";
import MenuToggle from "../MenuToggle";
import SideNavBar from "../SideNavBar";
import { CandleType } from "../../../utils/types/candles";
import FavoritesButton from "../ActionButtons/FavoritesButton";
import SearchButton from "../ActionButtons/SearchButton";
import ShoppingCartButton from "../ActionButtons/ShoppingCartButton";
import { ActionButtonInfoT } from "../ActionButtons/GenericActionButton";

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

const favoritesActionButtonInfo: ActionButtonInfoT = {
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

const Header = ({
  navBarMenuIsOpen,
  setNavBarMenuIsOpen,
  toggleNavBarMenu,
  favoritesArray,
  handleAddToFavoritesArray,
}: {
  navBarMenuIsOpen: boolean;
  setNavBarMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleNavBarMenu: () => void;
  favoritesArray: CandleType[];
  handleAddToFavoritesArray: (value: CandleType) => void;
}) => {
  return (
    <header className="relative z-10 flex w-full basis-1 items-center justify-between bg-white px-6 py-5 sm:px-11 sm:py-14">
      <div className="flex gap-7 sm:gap-[29.93px]">
        <SearchButton actionButtonInfo={searchActionButtonInfo} />
        <FavoritesButton
          favoritesArray={favoritesArray}
          handleAddToFavoritesArray={handleAddToFavoritesArray}
          actionButtonInfo={favoritesActionButtonInfo}
        />
        <ShoppingCartButton actionButtonInfo={shoppingCartActionButtonInfo} />
      </div>
      <Logo />
      <MenuToggle toggleNavBarMenu={toggleNavBarMenu} />
      <SideNavBar
        navBarMenuIsOpen={navBarMenuIsOpen}
        setNavBarMenuIsOpen={setNavBarMenuIsOpen}
      />
    </header>
  );
};

export default Header;
