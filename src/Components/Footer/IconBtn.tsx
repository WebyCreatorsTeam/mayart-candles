import React from "react";

const IconBtn = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} className="flex items-center gap-3 p-[10px]" target="_blank">
      {children}
    </a>
  );
};

export default IconBtn;
