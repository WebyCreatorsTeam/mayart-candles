import React from "react";
import { aboutLoaderInformation } from "../../utils/types/about";

const AboutText = ({ aboutText }: { aboutText: aboutLoaderInformation }) => {
  return (
    <div className="text-balance px-[30px] text-lg leading-9 ">
      <h2>{aboutText.title}</h2>
      <p>{aboutText.desc}</p>
    </div>
  );
};

export default AboutText;
