import React from 'react'
import { Inter } from 'next/font/google'
import { useSelector } from 'react-redux'
const InterFont = Inter({
    subsets: ['latin']
})

export default function subtitle({SubTitle}) {
  const Mode = useSelector((state) => state.ModeSlicerReducer.mode)

  const LightModeCom = () => (
    <div className='w-[100%] h-[5rem] flex flex-row bg-white text-white justify-center items-center lg:justify-start lg:items-center   lg:pl-[15%]'>
      <p className={`${InterFont.className} font-[600] text-[1.5rem] text-black`}>{SubTitle}</p>

    </div>
  )


  const DarkModeCom = () => (
    <div className='w-[100%] h-[5rem] flex flex-row bg-[#090D1F] text-white justify-center items-center lg:justify-start lg:items-center   lg:pl-[15%]'>
      <p className={`${InterFont.className} font-[600] text-[1.5rem]`}>{SubTitle}</p>

    </div>
  )
  return (
    <>
      {Mode == 'light' ? <LightModeCom /> : <DarkModeCom />}


    </>
  )
}
