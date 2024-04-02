import React from 'react'

const TelBtn = () => {
  return (
    <a
    className="flex items-center gap-4 rounded-full bg-primary-pink px-[60px] py-[15px] align-middle text-2xl sm:text-6xl font-semibold text-white hover:bg-secondary-pink focus:bg-secondary-pink"
    href="tel:+972 50-8122000"
  >
    <img src={"/icons/phone-icon.svg"} alt="phone-icon"  className='sm:w-16 sm:h-16'/>
    050-8122000
  </a>
  )
}

export default TelBtn;