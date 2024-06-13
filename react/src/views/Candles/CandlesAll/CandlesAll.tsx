import React from "react";
import { Link} from "react-router-dom";
import Freame from "./Freame";
import { CandleType } from "../../../types/candles";


const CandlesAll = () => {
const data:CandleType[]= []

       
  return (
    <div className="mt-40 flex w-[100%] flex-col">
      <p className="ml-[32%] mt-8 text-[32px] font-normal lg:ml-[41%] lg:text-[64px]">
        כל הנרות
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center">
        {data.map((item, i) => (
          <Link to={`/candles/candle/${item.id}`} key={i} className="flex flex-col items-center">
            <div className="relative">
            <img
              src={item.pictures[0]}
              alt="calends"
              className="flex flex-nowrap cursor-pointer object-cover w-[165px] h-[221px] gap-[4px] p-[4px]  md:h-[221px] md:w-[165px] lg:gap-[10px] lg:p-[10px] lg:h-[700px] lg:w-[430px]"
              
            />
            
         <Freame />
      
            </div>
            <h1 className="text-[16px] font-normal tracking-normal lg:text-[30px]">
              {item.name}
            </h1>
            <div className="flex flex-row justify-evenly gap-2">
             {item.price ? <span className="text-[16px] lg:text-[32px]">₪{item.salePrice}</span> : <span className="none"></span>}
             {item.salePrice ? <p className="text-[16px] lg:text-[32px] text-black/[.50] line-through">₪{item.price}</p> : <p className="text-[16px] lg:text-[32px]">{item.price}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CandlesAll;
