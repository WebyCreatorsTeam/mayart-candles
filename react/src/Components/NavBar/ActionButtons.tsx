import React from "react";

const mobileActionButtonArray = [
  { src: "/icons/nav/mobile/search-icon.svg", alt: "search icon" },
  { src: "/icons/nav/mobile/heart-icon.svg", alt: "heart icon" },
  {
    src: "/icons/nav/mobile/shopping-cart-icon.svg",
    alt: "shopping cart icon",
  },
];
const tabletActionButtonArray = [
  { src: "/icons/nav/tablet/search-icon.svg", alt: "search icon" },
  { src: "/icons/nav/tablet/heart-icon.svg", alt: "heart icon" },
  {
    src: "/icons/nav/tablet/shopping-cart-icon.svg",
    alt: "shopping cart icon",
  },
];
const ActionButtons = () => {
  return (
    <>
      {/* mobile */}
      <div className="flex gap-7 sm:hidden">
        {mobileActionButtonArray.map((actionButton, index) => (
          <button key={index + 1}>
            <img src={actionButton.src} alt={actionButton.alt} />
          </button>
        ))}
      </div>
      {/* tablet */}
      <div className="hidden gap-[29.93px] sm:flex">
        {tabletActionButtonArray.map((actionButton, index) => (
          <button key={index + 3 * 2}>
            <img src={actionButton.src} alt={actionButton.alt} />
          </button>
        ))}
      </div>
    </>
  );
};

export default ActionButtons;
