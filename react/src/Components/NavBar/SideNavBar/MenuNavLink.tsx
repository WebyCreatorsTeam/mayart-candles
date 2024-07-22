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
        `w-full px-7 py-5 xl:w-7/12 xl:px-3 xl:text-center xl:text-[32px] xl:font-normal xl:hover:bg-primary-pink ${isActive ? "bg-[#B0C4B1]/30 xl:bg-white/0" : "bg-white xl:bg-white/0"} ${className}`
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default MenuNavLink;
