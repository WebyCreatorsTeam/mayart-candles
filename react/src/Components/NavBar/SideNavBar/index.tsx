import React from "react";
import Logo from "../Logo";
import SideNavBarMenu from "./SideNavBarMenu";

const SideNavBar = ({
  navBarMenuIsOpen,
  setNavBarMenuIsOpen,
}: {
  navBarMenuIsOpen: boolean;
  setNavBarMenuIsOpen: (NavBarMenuIsOpen: boolean) => void;
}) => {
  const [sizeMenuIsOpen, setSizeMenuIsOpen] = React.useState(false);
  const toggleSizeMenu = () => setSizeMenuIsOpen(!sizeMenuIsOpen);
  const closeMenus = () => {
    console.log("closing menus");
    setNavBarMenuIsOpen(false);
    setSizeMenuIsOpen(false);
  };
  return (
    <div
      onClick={closeMenus}
      className={`absolute right-1/2 top-0 h-screen w-screen translate-x-1/2 bg-black/50 transition-all duration-500 
    ${navBarMenuIsOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <span
        dir="rtl"
        className={`absolute top-0  w-72  bg-white text-xl font-semibold transition-all duration-500 
        ${navBarMenuIsOpen ? "left-0" : "-left-full"}`}
      >
        <SideNavBarMenu
          closeMenus={closeMenus}
          sizeMenuIsOpen={sizeMenuIsOpen}
          toggleSizeMenu={toggleSizeMenu}
        />
      </span>
    </div>
  );
};

export default SideNavBar;
