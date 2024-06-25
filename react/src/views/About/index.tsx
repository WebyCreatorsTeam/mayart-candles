import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AboutLoaderInformation } from "../../utils/types/about";
import AboutText from "../../Components/About/AboutText";
import AboutImages from "../../Components/About/AboutImages";
import AboutBlobs from "../../Components/About/AboutBlobs";

const About = () => {
  const { aboutText } = useLoaderData() as {
    aboutText: AboutLoaderInformation;
  };
  return (
    <div
      dir="rtl"
      className="relative mt-[5px] flex flex-col items-center justify-start gap-7 text-center  sm:mb-[164.49px] xl:mt-52 xl:gap-[70px]"
    >
      <AboutBlobs />
      <div className="flex h-[70px] w-[140px] items-center justify-center border-b-[1px] border-b-[solid_#B0C4B14D] sm:h-[149.69px] sm:w-[299.31px]">
        <h1 className="text-xl font-semibold sm:text-[42.77px] sm:leading-[56.89px] xl:text-[64px] xl:leading-[85.13px]">
          קצת עליי
        </h1>
      </div>
      <AboutText aboutText={aboutText} />
      <Link
        className="mt-10 border-4 border-black px-[90px] py-[23px] text-lg font-semibold sm:text-[32px] sm:leading-[42.56px] xl:text-4xl"
        to="/candles"
      >
        המשך קניות
      </Link>
      <AboutImages images={aboutText.images} />
    </div>
  );
};

export default About;
