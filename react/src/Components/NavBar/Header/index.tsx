import React, { Dispatch, SetStateAction } from "react";
import ActionButtons from "../ActionButtons";
import Logo from "../Logo";
import MenuToggle from "../MenuToggle";
import NavBarMenu from "../NavBarMenu";

const Header = ({
  navBarMenuIsOpen,
  setNavBarMenuIsOpen,
  toggleNavBarMenu,
}: {
  navBarMenuIsOpen: boolean;
  setNavBarMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleNavBarMenu: () => void;
}) => {
  return (
    <header className="relative flex w-full z-10 basis-1 items-center justify-between bg-white px-6 py-5 sm:px-11 sm:py-14">
      <ActionButtons />
      <Logo />
      <MenuToggle toggleNavBarMenu={toggleNavBarMenu} />
      <NavBarMenu
        navBarMenuIsOpen={navBarMenuIsOpen}
        setNavBarMenuIsOpen={setNavBarMenuIsOpen}
      />
    </header>
  );
};

export default Header;
