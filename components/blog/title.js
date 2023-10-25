import React from 'react'
import { Inter } from 'next/font/google'
import { useSelector } from 'react-redux'
const InterFont = Inter({
    subsets: ['latin']
})

export default function title() {
  const Mode = useSelector((state) => state.ModeSlicerReducer.mode)


  const LightModeCom = () => (
    <div className='  bg-white  text-white flex flex-row text-center justify-center items-center min-w-[100%] min-h-[20rem]'>
      <p className={` border-[#090D1F] border-t-2 border-b-2  w-[100%] xl:w-[70%] pt-5 pb-5 text-black    text-8xl	 xl:text-[15.238rem]  ${InterFont.className}`}>THE BLOG</p>

    </div>
  )


  const DarkModeCom = () => (
    <div className='  bg-[#090D1F]  text-white flex flex-row text-center justify-center items-center min-w-[100%] min-h-[20rem]'>
      <p className={` border-white border-t-2 border-b-2  w-[100%] xl:w-[70%] pt-5 pb-5 text-white    text-8xl	 xl:text-[15.238rem]  ${InterFont.className}`}>THE BLOG</p>

    </div>
  )
  return (
    <>
      {Mode == 'light' ? <LightModeCom /> : <DarkModeCom />}


    </>
  )
}
