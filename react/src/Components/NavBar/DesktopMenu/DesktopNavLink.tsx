import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNavLink = ({
  to,
  text,
  onClick,
  imgsrc,
  className,
  hoverEffect = true,
}: {
  to: string;
  text?: string;
  imgsrc?: string;
  onClick?: () => void;
  className?: string;
  hoverEffect?: boolean;
}) => {
  return (
    <NavLink
      onClick={onClick}
      end
      className={`group flex w-fit flex-col items-center py-5 text-center text-4xl font-light`}
      to={to}
    >
      {imgsrc ? (
        <img src={imgsrc} alt={text} />
      ) : (
        <p
          className={`transition-all duration-150 ${hoverEffect ? "group-hover:-translate-y-1" : ""} ${className}`}
        >
          {text}
        </p>
      )}
      <span
        className={`h-[1px] w-full bg-black opacity-0 transition-all duration-150  group-hover:translate-y-0.5 ${hoverEffect ? "group-hover:opacity-100 " : ""} `}
      ></span>
    </NavLink>
  );
};

export default DesktopNavLink;
