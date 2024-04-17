import React from "react";
import { NavLink } from "react-router-dom";

const NavBarMenuSocials = () => {
  return (
    <div dir="ltr" className="flex w-full justify-center gap-5 px-7 py-5">
      <NavLink target="_blank" to="https://www.instagram.com">
        <img
          src={"/icons/instagram-icon.svg"}
          alt="instagram-icon"
          className="h-5 w-5 sm:h-9 sm:w-9 lg:h-9 lg:w-9"
        />
      </NavLink>
      <NavLink to="https://www.whatsapp.com">
        <img
          src={"/icons/whatsapp-icon.svg"}
          alt="whatsapp-icon"
          className="h-5 w-5 sm:h-9 sm:w-9 lg:h-9 lg:w-9"
        />
      </NavLink>
      <NavLink to="https://www.mail.com">
        <img
          src={"/icons/mail-icon.svg"}
          alt="mail-icon"
          className="h-5 w-5 sm:h-9 sm:w-9 lg:h-9 lg:w-9"
        />
      </NavLink>
    </div>
  );
};

export default NavBarMenuSocials;
