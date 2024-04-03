import React from "react";
import MenuNavLink from "./MenuNavLink";

const NavBarMenu = () => {
  return (
    <div className="absolute left-0 top-full flex flex-col text-xl font-semibold">
      <MenuNavLink to="/" text="ראשי" />
      <MenuNavLink to="/candles" text="כל הנרות" />
      <MenuNavLink to="/candles/designed" text="נרות מעוצבים" />
      <MenuNavLink to="/candles/in-vessel" text="נרות בכלי" />
      <button>
        נרות לפי גודל
        <MenuNavLink to="/candles/large" text="גדול" />
        <MenuNavLink to="/candles/medium" text="בינוני" />
        <MenuNavLink to="/candles/small" text="קטן" />
      </button>
      <MenuNavLink to="/about" text="אודות" />
      <MenuNavLink to="/contact" text="צור קשר" />
    </div>
  );
};

export default NavBarMenu;
