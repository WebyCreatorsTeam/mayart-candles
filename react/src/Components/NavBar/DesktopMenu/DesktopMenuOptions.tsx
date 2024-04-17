import React from "react";

const DesktopMenuOptions = ({
  children,
  sizeMenuIsOpen,
  toggleSizeMenu,
  text,
}: {
  children: React.ReactNode;
  sizeMenuIsOpen: boolean;
  toggleSizeMenu: () => void;
  text: string;
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative flex w-fit flex-col"
    >
      <button
        onClick={toggleSizeMenu}
        className={`group flex w-fit flex-col items-center py-5 text-center text-4xl font-light`}
      >
        <div className="z-40 flex flex-row-reverse justify-center gap-4  transition-all duration-150 group-hover:-translate-y-1">
          <p className="">{text}</p>
          <div
            className={`h-fit w-fit transition-all duration-300 ${sizeMenuIsOpen ? "rotate-90" : "-rotate-90"}`}
          >
            &#10217;
          </div>
        </div>
        <span className="h-[1px] w-full bg-black opacity-0 transition-all duration-150 group-hover:translate-y-0.5 group-hover:opacity-100"></span>
      </button>
      <div
        className={`absolute top-full z-10 flex w-full flex-col items-center divide-y text-xl font-semibold transition-all duration-300 ${sizeMenuIsOpen ? "" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DesktopMenuOptions;
