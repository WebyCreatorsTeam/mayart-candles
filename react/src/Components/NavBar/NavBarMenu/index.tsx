import React from "react";
import MenuNavLink from "./MenuNavLink";
import CandlesBySizeMenu from "./CandlesBySizeMenu";
import NavBarMenuSocials from "./NavBarMenuSocials";
import Logo from "../Logo";

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
      <span
        dir="rtl"
        className={`absolute top-0  w-72  bg-white text-xl font-semibold transition-all lg:w-[543px] lg:py-5 duration-500 
        ${navBarMenuIsOpen ? "left-0" : "-left-full"}`}
      >
        <Logo />
        <nav className="flex flex-col items-start divide-y-[1px] border-[[#B0C4B1]/30] lg:items-center lg:pt-20">
          <MenuNavLink onClick={closeMenus} to="/" text="ראשי" />
          <MenuNavLink onClick={closeMenus} to="/candles" text="כל הנרות" />
          <MenuNavLink
            onClick={closeMenus}
            to="/candles/designed"
            text="נרות מעוצבים"
          />
          <CandlesBySizeMenu
            closeMenus={closeMenus}
            sizeMenuIsOpen={sizeMenuIsOpen}
            toggleSizeMenu={toggleSizeMenu}
          />
          <MenuNavLink
            onClick={closeMenus}
            to="/candles/in-vessel"
            text="נרות בכלי"
          />
          <MenuNavLink onClick={closeMenus} to="/about" text="אודות" />
          <MenuNavLink onClick={closeMenus} to="/contact" text="צור קשר" />
          <NavBarMenuSocials />
        </nav>
      </span>
    </div>
  );
};

export default NavBarMenu;
