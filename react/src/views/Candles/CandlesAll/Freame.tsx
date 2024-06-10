import React from 'react';

let Favorite = "../../../../public/icons/favorite.png"
let Cart = "../../../../public/icons/Cart.png"
const Freame = () => {
  return (
    <div className='w-100vw h-[119px] mt-20'>
        <img src="../../../../public/icons/favorite.png" alt="" />
        <span>אהבתי!</span>
        <img src={Cart} alt="" />
        <span>הוספה לסל</span>
    </div>
  )
}

export default Freame