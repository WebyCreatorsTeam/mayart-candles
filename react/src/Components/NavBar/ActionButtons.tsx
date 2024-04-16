import React from "react";

const ActionButtonArray = [
  { src: "/icons/search-icon.svg", alt: "search icon" },
  { src: "/icons/heart-icon.svg", alt: "heart icon" },
  { src: "/icons/shopping-cart-icon.svg", alt: "shopping cart icon" },
];
const ActionButtons = () => {
  return (
    <div className="flex gap-7 sm:gap-[29.93px]">
      {ActionButtonArray.map((actionButton) => (
        <button>
          <img
            className="sm:w-7"
            src={actionButton.src}
            alt={actionButton.alt}
          />
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
