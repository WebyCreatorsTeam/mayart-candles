import React, { SyntheticEvent } from "react";
import DesktopMenu from "./DesktopMenu";
import Header from "./Header";
import { CandleType } from "../../utils/types/candles";
import SearchBar from "./SearchBar";

const NavBar = ({
  favoritesArray,
  searchInfo,
  setSearchInfo,
}: {
  favoritesArray: CandleType[];
  searchInfo: string;
  setSearchInfo: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [navBarMenuIsOpen, setNavBarMenuIsOpen] = React.useState(false);
  const [searchBarIsOpen, setSearchBarIsOpen] = React.useState(false);
  const toggleNavBarMenu = () => setNavBarMenuIsOpen(!navBarMenuIsOpen);
  const openSearchBar = () => setSearchBarIsOpen(true);
  const closeSearchBar = (e:SyntheticEvent) => {
    e.stopPropagation();
    setSearchInfo("");
    setSearchBarIsOpen(false);
  };
  return (
    <span
      onClick={searchBarIsOpen ? closeSearchBar : undefined}
      className="sticky top-0 z-[1000] flex w-full flex-col"
    >
      <Header
        navBarMenuIsOpen={navBarMenuIsOpen}
        setNavBarMenuIsOpen={setNavBarMenuIsOpen}
        toggleNavBarMenu={toggleNavBarMenu}
        favoritesArray={favoritesArray}
        openSearchBar={openSearchBar}
      />
      {searchBarIsOpen ? (
        <SearchBar
          closeSearchBar={closeSearchBar}
          searchInfo={searchInfo}
          setSearchInfo={setSearchInfo}
        />
      ) : (
        <DesktopMenu />
      )}
    </span>
  );
};

export default NavBar;
