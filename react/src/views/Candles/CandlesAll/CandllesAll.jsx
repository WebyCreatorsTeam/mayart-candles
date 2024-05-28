import React from 'react';
import { useState, useEffect } from 'react';
const {candles} = require("../../../candles");

const CandllesAll = () => {
    const [data, setData] = useState(null);

    const dataCandlles = candles;
    async function fetchData () {
        setData(dataCandlles)
        console.log(dataCandlles)
    }

    useEffect(() => {
        fetchData();
    }, [])
    

  return (
    <div className='flex flex-col mt-40 w-[100%]'>
        <p className='ml-[32%] text-[32px] lg:ml-[41%] lg:text-[64px] font-normal'>כל הנרות</p>
    <div className='flex justify-center items-center mt-6 flex-wrap'>
      {dataCandlles.map((item, i) => (
        <div key={i} className='flex flex-col items-center'> 
          <img src={item.pictures} alt="calends" className='flex w-[50vw] h-[40vh] lg:w-[30vw] lg:h-[75vh] p-4 gap-2' />
          <h1 className='text-[16px] lg:text-[30px] font-normal tracking-normal'>{item.name}</h1>
          <div className='flex flex-row gap-2 justify-evenly'>
          <p className='text-[16px] lg:text-[32px] '>₪{item.salePrice}</p>
          <span className='text-[16px] lg:text-[32px] line-through text-black/[.50]'>₪{item.price}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CandllesAll