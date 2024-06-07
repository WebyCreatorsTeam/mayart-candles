import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { aboutLoaderInformation } from "../../utils/types/about";
import AboutText from "../../Components/About/AboutText";
import AboutImages from "../../Components/About/AboutImages";
import AboutBlobs from "../../Components/About/AboutBlobs";

const About = () => {
  const { aboutText } = useLoaderData() as {
    aboutText: aboutLoaderInformation;
  };
  return (
    <div
      dir="rtl"
      className="relative mt-[5px] flex flex-col items-center justify-start gap-7 self-start text-center xl:mt-52"
    >
      <AboutBlobs />
      <div className="flex h-[70px] w-[140px] items-center justify-center border-b-[1px] border-b-[solid_#B0C4B14D]">
        <h1 className="text-xl font-semibold">קצת עליי</h1>
      </div>
      <AboutText aboutText={aboutText} />
      <AboutImages images={aboutText.images} />
      <Link
        className="mt-10 border-4 border-black px-[90px] py-[23px] text-lg font-semibold"
        to="/candles"
      >
        המשך קניות
      </Link>
    </div>
  );
};

export default About;
