import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex gap-7">
      <button>
        <img src="/icons/search-icon.svg" alt="search icon" />
      </button>
      <button>
        <img src="/icons/heart-icon.svg" alt="heart icon" />
      </button>
      <button>
        <img src="/icons/shopping-cart-icon.svg" alt="shopping cart icon" />
      </button>
    </div>
  );
};

export default ActionButtons;
