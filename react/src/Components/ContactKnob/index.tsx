import React from "react";
import InstagramLogo from "./InstagramLogo";
import WhatsappLogo from "./WhatsappLogo";
import EmailLogo from "./EmailLogo";
import socialsList from "../../utils/socials";
const ContactKnob = () => {
  const findLink = (social: string) => {
    const currentSocial = socialsList.find((s) => s.name === social);
    if (!currentSocial)
      throw new Error("social not found line 48 in ContactKnob.tsx");
    const link = currentSocial.url;
    return link;
  };
  return (
    <div className="fixed left-0 top-96 flex w-fit flex-col items-center justify-around gap-[14.3px] rounded-md bg-[#EDAFB8] px-[11.28px] py-[11.53px] sm:rounded-2xl sm:px-[25.6px] sm:py-[27px] xl:p-5">
      <WhatsappLogo link={findLink("whatsapp")} />
      <InstagramLogo link={findLink("instagram")} />
      <EmailLogo link={findLink("email")} />
    </div>
  );
};

export default ContactKnob;
