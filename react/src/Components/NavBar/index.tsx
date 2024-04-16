import React from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import ActionButtons from "./ActionButtons";
import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  const [navBarMenuIsOpen, setNavBarMenuIsOpen] = React.useState(false);
  const toggleNavBarMenu = () => setNavBarMenuIsOpen(!navBarMenuIsOpen);
  return (
    <>
      {/* header */}
      <div className="relative flex w-full basis-1 items-center justify-between bg-white px-6 py-5 sm:py-14 sm:px-11">
        <ActionButtons />
        <Logo />
        <MenuToggle toggleNavBarMenu={toggleNavBarMenu} />
        <NavBarMenu
          navBarMenuIsOpen={navBarMenuIsOpen}
          setNavBarMenuIsOpen={setNavBarMenuIsOpen}
        />
      </div>
    </>
  );
};

export default NavBar;
