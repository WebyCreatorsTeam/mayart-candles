import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex gap-7">
      <button>
        <img src="/search-icon.svg" alt="search icon" />
      </button>
      <button>
        <img src="/heart-icon.svg" alt="heart icon" />
      </button>
      <button>
        <img src="/shopping-cart-icon.svg" alt="shopping cart icon" />
      </button>
    </div>
  );
};

export default ActionButtons;
