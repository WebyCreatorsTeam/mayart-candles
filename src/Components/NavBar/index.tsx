import React from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import ActionButtons from "./ActionButtons";

const NavBar = () => {
  return (
    <div className="flex w-full basis-1 items-center justify-between bg-white px-6 py-5">
      <ActionButtons />
      <Logo />
      <MenuButton />
    </div>
  );
};

export default NavBar;
