import React from 'react'
import CandllesAll from '../../views/Candles/CandlesAll/CandllesAll';


const Home = () => {
  return (
    <div>

             <img
          src="/images/hero-image.jpeg"
          alt="hero"
          className="w-[100vw] h-[700px] flex flex-col-reverse"
        />
        <div className='absolute mt-[-30%] bg-white rounded-xl w-[676px] h-[48px] text-center gap-5'>

        <span>חג שמח! 50% על כל הנרות ב <h1>MAYART</h1> <img src="../../../public/images/Heart-Streamline-Core.png" alt="" /></span>
        </div>
    <CandllesAll />
    </div>
  )
}

export default Home;