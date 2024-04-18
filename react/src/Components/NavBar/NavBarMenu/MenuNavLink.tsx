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
        `w-full lg:text-[32px] px-7 py-5 lg:w-7/12 lg:px-3 lg:text-center lg:font-normal lg:hover:bg-primary-pink ${isActive ? "bg-[#B0C4B1]/30 lg:bg-white/0" : "bg-white lg:bg-white/0"} ${className}`
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default MenuNavLink;
