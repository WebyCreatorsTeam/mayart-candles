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
      className="flex items-center gap-3 p-[10px] hover:[textShadow:1px_0_rgba(0,0,0,0.5)] sm:gap-[21.38px] sm:p-[21.38px] lg:text-[32px]"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default IconBtn;
