import React from 'react'
import { Inter } from 'next/font/google'
import { useSelector } from 'react-redux'
const InterFont = Inter({
    subsets: ['latin']
})

export default function footer() {
    const Mode = useSelector((state) => state.ModeSlicerReducer.mode)

    const LightModeCom = () => (
        <div className='   gap-2 w-[100%] h-[5rem] flex flex-row flex-wrap bg-white text-black  justify-center lg:justify-start items-center    lg:pr-[15%] lg:pl-[13%]'>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>© 2023</p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>Twitter </p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>LinkedIn</p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>Email</p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>RSS feed</p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>Add to Feedly</p>


        </div>
    )


    const DarkModeCom = () => (
        <div className='   gap-2 w-[100%] h-[5rem] flex flex-row flex-wrap bg-[#090D1F] text-white  justify-center lg:justify-start items-center    lg:pr-[15%] lg:pl-[13%]'>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>© 2023</p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>Twitter </p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>LinkedIn</p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>Email</p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>RSS feed</p>
            <p className={`${InterFont.className} font-[600] text-sm lg:text-[1.25rem] hover:cursor-pointer`}>Add to Feedly</p>


        </div>
    )
  return (
 

          <>
      {Mode == 'light' ? <LightModeCom /> : <DarkModeCom />}


    </>
  )
}
