import React, { Dispatch, SetStateAction } from "react";
import ActionButtons from "../ActionButtons";
import Logo from "../Logo";
import MenuToggle from "../MenuToggle";
import SideNavBar from "../SideNavBar";
import { CandleType } from "../../../utils/types/candles";

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
      <ActionButtons
        favoritesArray={favoritesArray}
        handleAddToFavoritesArray={handleAddToFavoritesArray}
      />
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
