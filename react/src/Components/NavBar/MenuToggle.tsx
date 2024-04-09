import React from "react";

const MenuToggle = ({ toggleNavBarMenu }: { toggleNavBarMenu: () => void }) => {
  return (
    <button onClick={toggleNavBarMenu}>
      <img src="/menu-icon.svg" alt="menu icon" />
    </button>
  );
};

export default MenuToggle;
