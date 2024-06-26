import React from "react";

const TimesButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
    onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99986 18.9287C15.7142 18.9287 18.9284 15.7144 18.9284 10.0001C18.9284 4.28582 15.7142 1.07153 9.99986 1.07153C4.28558 1.07153 1.07129 4.28582 1.07129 10.0001C1.07129 15.7144 4.28558 18.9287 9.99986 18.9287Z"
          stroke="black"
          stroke-width="0.760417"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.39282 16.6073L16.6071 3.39307"
          stroke="black"
          stroke-width="0.760417"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.6071 16.6073L3.39282 3.39307"
          stroke="black"
          stroke-width="0.760417"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default TimesButton;
