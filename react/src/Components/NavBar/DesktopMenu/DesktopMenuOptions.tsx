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
      onMouseLeave={sizeMenuIsOpen ? toggleSizeMenu : undefined}
      onClick={(e) => e.stopPropagation()}
      className="relative flex w-fit flex-col"
    >
      <button
        onClick={toggleSizeMenu}
        className={`group flex h-fit w-fit flex-col items-center px-6 py-2.5 text-center text-4xl font-light hover:bg-primary-pink hover:text-white`}
      >
        <div className="z-40 flex flex-row-reverse items-center justify-center gap-2  transition-all duration-150">
          <p className="">{text}</p>
          {/* <DownArrow sizeMenuIsOpen={sizeMenuIsOpen} /> */}
          <svg
            className={`
            transition-all duration-300
            ${sizeMenuIsOpen ? "rotate-180" : "rotate-0"}
            [&>path]:stroke-black
            group-hover:[&>path]:stroke-white 
            `}
            width="20"
            height="11"
            viewBox="0 0 20 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 1.25L10 9.75L1.5 1.25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* <span className="h-[1px] w-full bg-black opacity-0 transition-all duration-150 group-hover:translate-y-0.5 group-hover:opacity-100"></span> */}
      </button>
      <div
        className={`absolute top-full  z-10 flex w-full flex-col items-center divide-y bg-white/50 text-xl font-semibold backdrop-blur-3xl transition-all duration-300 ${sizeMenuIsOpen ? "" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DesktopMenuOptions;
