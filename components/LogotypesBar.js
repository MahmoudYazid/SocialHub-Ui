import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function LogotypesBar() {
  const Mode = useSelector((state) => state.ModeSlicerReducer.mode)
  const LightMode = () => (
    <section className='items-center justify-center min-w-screen min-h-fit gap-[5rem] flex flex-wrap lg:ml-[2.5rem] lg:mr-[2.5rem] lg:pl-[6.25rem]   lg:pr-[6.25rem]  flex-row mt-[4.375rem] '>

      <img src='/amazon.svg' className='min-h-[3rem]  min-w-[7.757erm] grayscale hover:grayscale-0'></img>
      <img src='/dribble.svg' className='grayscale hover:grayscale-0'></img>
      <img src='/HubSpot.svg' className='grayscale hover:grayscale-0'></img>
      <img src='/notion.svg' className='grayscale hover:grayscale-0'></img>
      <img src='/netflex.svg' className='grayscale hover:grayscale-0'></img>
      <img src='/zoom.svg' className='grayscale hover:grayscale-0'></img>

    </section>
  )
  const DarkMode = () => (
    <section className='items-center justify-center min-w-screen min-h-fit gap-[5rem] flex flex-wrap lg:ml-[2.5rem] lg:mr-[2.5rem] lg:pl-[6.25rem]   lg:pr-[6.25rem]  flex-row mt-[4.375rem] '>

      <img src='/amazon.svg' className='min-h-[3rem]  min-w-[7.757erm] grayscale invert	 	 hover:grayscale-0	  '></img>
      <img src='/dribble.svg' className=' grayscale invert	 	 hover:grayscale-0		'></img>
      <img src='/HubSpot.svg' className='grayscale invert	 	 hover:grayscale-0	'></img>
      <img src='/notion.svg' className=' grayscale invert	 	 hover:grayscale-0	'></img>
      <img src='/netflex.svg' className='grayscale invert	 	 hover:grayscale-0	'></img>
      <img src='/zoom.svg' className=' grayscale invert	 	 hover:grayscale-0	'></img>

    </section>
  )
  return (
    <>
      {Mode == 'light' ? <LightMode /> : <DarkMode />}


    </>
  )
}
