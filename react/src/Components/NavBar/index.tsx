import React from "react";
import DesktopMenu from "./DesktopMenu";
import Header from "./Header";
import { CandleType } from "../../utils/types/candles";

const NavBar = ({
  favoritesArray,
}: {
  favoritesArray: CandleType[];
}) => {
  const [navBarMenuIsOpen, setNavBarMenuIsOpen] = React.useState(false);
  const toggleNavBarMenu = () => setNavBarMenuIsOpen(!navBarMenuIsOpen);
  return (
    <span className="sticky top-0 z-[1000] flex w-full flex-col">
      <Header
        navBarMenuIsOpen={navBarMenuIsOpen}
        setNavBarMenuIsOpen={setNavBarMenuIsOpen}
        toggleNavBarMenu={toggleNavBarMenu}
        favoritesArray={favoritesArray}
      />
      <DesktopMenu />
    </span>
  );
};

export default NavBar;
