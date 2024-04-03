import React from "react";
import { NavLink } from "react-router-dom";

const MenuNavLink = ({
  to,
  text,
  onClick,
}: {
  to: string;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <NavLink
      onClick={onClick}
      end
      className={({ isActive }) =>
        `w-full px-7 py-5 ${isActive ? "bg-[#B0C4B1]/30" : ""}`
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default MenuNavLink;
