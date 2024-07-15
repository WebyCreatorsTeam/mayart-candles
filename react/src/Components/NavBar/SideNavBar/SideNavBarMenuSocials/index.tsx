import SideBarSocialMediaItem from "./Items";
import socialsList from "../../../../utils/socials";
const NavBarMenuSocials = () => {
  return (
    <div
      dir="ltr"
      className="flex w-full justify-center gap-5 px-7 py-5 xl:w-7/12 xl:gap-4"
    >
      {socialsList.map((social) => (
        <SideBarSocialMediaItem key={social.name} social={social} />
      ))}
    </div>
  );
};

export default NavBarMenuSocials;
