import React from "react";
import { NavLink } from "react-router-dom";

const MenuNavLink = ({
  to,
  text,
  onClick,
  className,
}: {
  to: string;
  text: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <NavLink
      onClick={onClick}
      end
      className={({ isActive }) =>
        `w-full px-7 py-5 ${isActive ? "bg-[#B0C4B1]/30" : "bg-white"} ${className}`
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default MenuNavLink;
