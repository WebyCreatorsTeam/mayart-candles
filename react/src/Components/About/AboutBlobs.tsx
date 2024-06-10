import React from "react";

const AboutBlobs = () => {
  return (
    <>
      <img
        className="absolute -left-[88px] -top-[11px] -z-50 h-[406px] w-[304px] sm:top-[76.51px] sm:h-[868.22px] sm:w-[650.09px] xl:hidden"
        src="/images/ellipse18.svg"
        alt=""
      />
      <img
        className="absolute -right-[143.5px] top-60 -z-50 h-[394.16px] w-[334.17px] sm:top-[604.37px] sm:h-[842.89px] sm:w-[714.62px] xl:hidden"
        src="/images/ellipse17.svg"
        alt=""
      />
      {/* 19 and 20 are for desktop */}
      <img
        className="absolute  left-0 top-40 -z-50 hidden h-[1085.5px] w-[1136.5px] xl:block"
        src="/images/ellipse19.svg"
        alt=""
      />
      <img
        className="absolute -top-[271.5px] right-0 -z-50 hidden h-[844px] w-[928px] xl:block"
        src="/images/ellipse20.svg"
        alt=""
      />
    </>
  );
};

export default AboutBlobs;
