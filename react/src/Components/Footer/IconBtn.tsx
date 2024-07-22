import React from "react";

const IconBtn = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      className="flex items-center gap-2.5 p-2.5 hover:[textShadow:1px_1px_1px_#000] sm:gap-[21.38px] sm:text-[38.49px] sm:leading-[51.2px] sm:max-lg:p-[21.38px] lg:max-2xl:text-lg lg:max-2xl:gap-2 2xl:text-[32px] 2xl:leading-[42.56px]"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default IconBtn;
