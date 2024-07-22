import React from "react";
import { NavLink } from "react-router-dom";
import { SocialType } from "../../../../utils/socials";

const SideBarSocialMediaItem = ({ social }: { social: SocialType }) => {
  return (
    <NavLink target="_blank" to={social.url}>
      <img
        src={social.icon}
        alt={`${social.name} icon`}
        className="h-5 w-5 sm:h-9 sm:w-9 xl:h-10 xl:w-10"
      />
    </NavLink>
  );
};

export default SideBarSocialMediaItem;
