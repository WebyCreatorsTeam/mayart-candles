import React from "react";
import { aboutLoaderInformation } from "../../utils/types/about";

const AboutText = ({ aboutText }: { aboutText: aboutLoaderInformation }) => {
  return (
    <div className="text-balance xl:text-[40px] xl:leading-[80px] px-[30px] text-lg leading-9 sm:px-[64.15px] sm:text-[38.49px] sm:leading-[76.98px]">
      <h2 className="xl:pb-[57px]">{aboutText.title}</h2>
      <p>{aboutText.desc}</p>
    </div>
  );
};

export default AboutText;
