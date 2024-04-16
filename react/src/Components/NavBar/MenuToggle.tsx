import React from "react";

const MenuToggle = ({ toggleNavBarMenu }: { toggleNavBarMenu: () => void }) => {
  return (
    <button onClick={toggleNavBarMenu}>
      <img className="sm:w-[30px] sm:h-10" src="/menu-icon.svg" alt="menu icon" />
    </button>
  );
};

export default MenuToggle;
