import React from "react";

const MenuToggle = ({ toggleNavBarMenu }: { toggleNavBarMenu: () => void }) => {
  return (
    <button className="xl:hidden" onClick={toggleNavBarMenu}>
      <img
        className="sm:hidden"
        src="/icons/nav/mobile/menu-icon.svg"
        alt="menu icon"
      />
      <img
        className="hidden sm:block"
        src="/icons/nav/tablet/menu-icon.svg"
        alt="menu icon"
      />
    </button>
  );
};

export default MenuToggle;
