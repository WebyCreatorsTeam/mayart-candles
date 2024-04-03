import React from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import ActionButtons from "./ActionButtons";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  return (
    <>
      {/* header */}
      <div className="relative flex w-full basis-1 items-center justify-between bg-white px-6 py-5">
        <ActionButtons />
        <Logo />
        <MenuToggle />
        <NavBarMenu />
      </div>
    </>
  );
};

export default NavBar;
