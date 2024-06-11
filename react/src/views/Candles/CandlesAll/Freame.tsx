import React from "react";

let Favorite = "../../../../public/icons/favorite.png";
let Cart = "../../../../public/icons/Cart.png";
const Frame = () => {
  return (
    <div className="w-100vw mt-20 h-[119px]">
      <img src={Favorite} alt="" />
      <span>אהבתי!</span>
      <img src={Cart} alt="" />
      <span>הוספה לסל</span>
    </div>
  );
};

export default Frame;
