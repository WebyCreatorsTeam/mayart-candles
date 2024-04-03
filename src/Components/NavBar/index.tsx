import React from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import ActionButtons from "./ActionButtons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* header */}
      <div className="relative flex w-full basis-1 items-center justify-between bg-white px-6 py-5">
        <ActionButtons />
        <Logo />
        <MenuToggle />
        <div className="absolute left-0 top-full flex flex-col">
          <NavLink to="/">ראשי</NavLink>
          <NavLink to="/candles">כל הנרות</NavLink>
          <NavLink to="/candles/designed">נרות מעוצבים</NavLink>
          <NavLink to="/candles/in-vessel">נרות בכלי</NavLink>
          <button>
            נרות לפי גודל
            <NavLink to="/candles/large">גדול</NavLink>
            <NavLink to="/candles/medium">בינוני</NavLink>
            <NavLink to="/candles/small">קטן</NavLink>
          </button>
          <NavLink to="/about">אודות</NavLink>
          <NavLink to="/contact">צור קשר</NavLink>
        </div>
      </div>
      {/* menu */}
    </>
  );
};

export default NavBar;
