import React from "react";

const DownArrow = ({ sizeMenuIsOpen }: { sizeMenuIsOpen: boolean }) => {
  return (
    <svg
      className={`transition-all group-hover:stroke-white duration-300 [&>path]:stroke-black ${sizeMenuIsOpen ? "rotate-180" : "rotate-0"}`}
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 1.25L10 9.75L1.5 1.25"
        stroke="#121515"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownArrow;
