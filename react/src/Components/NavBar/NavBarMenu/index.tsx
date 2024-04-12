import React from "react";
import MenuNavLink from "./MenuNavLink";
import CandlesBySizeMenu from "./CandlesBySizeMenu";

const NavBarMenu = ({
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
      <div
        dir="rtl"
        className={`absolute top-0 flex w-72 flex-col items-start divide-y-[1px] border-[[#B0C4B1]/30] bg-white text-xl font-semibold transition-all duration-500
        ${navBarMenuIsOpen ? "left-0" : "-left-full"}`}
      >
        <MenuNavLink onClick={closeMenus} to="/" text="ראשי" />
        <MenuNavLink onClick={closeMenus} to="/candles" text="כל הנרות" />
        <MenuNavLink
          onClick={closeMenus}
          to="/candles/designed"
          text="נרות מעוצבים"
        />
        <MenuNavLink
          onClick={closeMenus}
          to="/candles/in-vessel"
          text="נרות בכלי"
        />
        <CandlesBySizeMenu
          closeMenus={closeMenus}
          sizeMenuIsOpen={sizeMenuIsOpen}
          toggleSizeMenu={toggleSizeMenu}
        />
        <MenuNavLink onClick={closeMenus} to="/about" text="אודות" />
        <MenuNavLink onClick={closeMenus} to="/contact" text="צור קשר" />
      </div>
    </div>
  );
};

export default NavBarMenu;
