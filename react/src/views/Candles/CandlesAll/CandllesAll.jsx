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
    <div className='flex flex-row justify-center'>
      {dataCandlles.map((item, i) => (
        <div key={i} className='flex flex-col items-center'> 
          <img src={item.pictures} alt="calends" className='flex w-80 h-96 p-3 gap-2 ' />
          <h1 className='text-2xl font-normal'>{item.name}</h1>
          <div className='flex flex-row gap-2 justify-evenly'>
          <p className='text-xl'>₪{item.price}</p>
          <span className='text-xl line-through text-black/[.50]'>₪{item.salePrice}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CandllesAll