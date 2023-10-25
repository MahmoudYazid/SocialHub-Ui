import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Rightside() {
  const Mode = useSelector((state) => state.ModeSlicerReducer.mode)
  const LightMode =()=>(
    <div className='flex flex-row justify-center items-center bg-white hidden lg:block'>
      <img src='/microphone.svg' className='w-[37.529rem] h-[32.188rem]' ></img>
    </div>
  )
  const DarkMode = () => (
    <div className='flex flex-row justify-center items-center bg-black hidden lg:block'>
      <img src='/microphone.svg' className='w-[37.529rem] h-[32.188rem] invert' ></img>
    </div>
  )
  return (
    <>
      {Mode == 'light' ? <LightMode /> : <DarkMode />}


    </>
  )
}
