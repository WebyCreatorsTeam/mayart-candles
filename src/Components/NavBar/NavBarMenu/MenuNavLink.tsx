import React from "react";
import { NavLink } from "react-router-dom";

const MenuNavLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <NavLink
      end
      className={({ isActive }) => (isActive ? "bg-slate-300" : "")}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default MenuNavLink;
