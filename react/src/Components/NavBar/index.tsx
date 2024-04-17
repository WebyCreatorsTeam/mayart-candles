import React from "react";
import DesktopMenu from "./DesktopMenu";
import Header from "./Header";

const NavBar = () => {
  const [navBarMenuIsOpen, setNavBarMenuIsOpen] = React.useState(false);
  const toggleNavBarMenu = () => setNavBarMenuIsOpen(!navBarMenuIsOpen);
  return (
    <span className="flex w-full flex-col">
      <Header
        navBarMenuIsOpen={navBarMenuIsOpen}
        setNavBarMenuIsOpen={setNavBarMenuIsOpen}
        toggleNavBarMenu={toggleNavBarMenu}
      />
      <DesktopMenu />
    </span>
  );
};

export default NavBar;
