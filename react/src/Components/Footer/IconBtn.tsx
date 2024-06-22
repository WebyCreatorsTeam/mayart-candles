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
      className="flex items-center gap-2.5 p-2.5 sm:gap-[21.38px] sm:p-[21.38px] sm:text-[38.49px] sm:leading-[51.2px]"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default IconBtn;
