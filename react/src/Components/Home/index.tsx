import React from 'react'
import CandllesAll from '../../views/Candles/CandlesAll/CandllesAll';


const Home = () => {
  return (
    <div>

             <img
          src="/images/hero-image.jpeg"
          alt="hero"
          className="w-[100vw] h-[20vh] lg:w-[100vw] lg:h-[720px] flex flex-col-reverse"
        />
        <div className='absolute flex flex-row items-center justify-center mt-[-30%] bg-white rounded-full gap-[6px] lg:gap-6 bg-opacity-50 w-[318px] h-[50px] lg:w-[65%] lg:h-[15%] ml-[14%] lg:ml-[20%] text-center gap-5'>
        <img src="/images/Heart--Streamline-Core.png" alt=""  className="w-[12px] h-[12px] lg:w-[34px] lg:h-[34px]" /><span className='text-[14px] lg:text-5xl font-mono'>MAYART</span><span className='text-[14px] lg:text-4xl'>חג שמח! 50% על כל הנרות ב</span>
        </div>
    <CandllesAll />
    </div>
  )
}

export default Home;