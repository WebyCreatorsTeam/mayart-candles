import React, {useState, useEffect} from "react";
import Freame from "./Freame";
import axios from "axios"
import { CandleType } from "../../../types/candles";

const CandlesAll = () => {
      const [data, setData] = useState<CandleType[]>([]);

       async function dataCalenders () {
       let result  = await axios.get("https://mayart-candles-api.vercel.app/candles/get-candles");
       setData(result.data.allCandles)
       console.log(result.data.allCandles)
      }
      useEffect(() => {
        dataCalenders();
      }, [])

  return (
    <div className="mt-40 flex w-[100%] flex-col">
      <p className="ml-[32%] mt-8 text-[32px] font-normal lg:ml-[41%] lg:text-[64px]">
        כל הנרות
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center">
        <Freame />
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={item.pictures[0]}
              alt="calends"
              className="flex h-[40vh] w-[50vw] gap-2 p-4 lg:h-[75vh] lg:w-[30vw]"
            />
            <h1 className="text-[16px] font-normal tracking-normal lg:text-[30px]">
              {item.name}
            </h1>
            <div className="flex flex-row justify-evenly gap-2">
              <p className="text-[16px] lg:text-[32px] ">₪{item.salePrice}</p>
              <span className="text-[16px] text-black/[.50] line-through lg:text-[32px]">
                ₪{item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandlesAll;
