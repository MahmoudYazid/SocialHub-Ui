import React, { useState } from 'react'
import { GrMenu } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function LearnMoreIndex() {
    const [openSideBar, SetopenSideBar] = useState('hidden')
    const dispach = useDispatch()
    const ChangeSideBarFunc = () => {
        openSideBar == 'hidden' ? SetopenSideBar('visible') : SetopenSideBar('hidden')
    }
  return (
    <>
          <section id='navbar' className='z-20    gap-[.5rem] lg:gap-[2.5rem] flex flex-row-reverse mt-[0px]  min-w-[100%] min-h-[6rem]  items-center'>
          <GrMenu size={30} className='lg:hidden visible mr-[1.25rem] min-w-[5rem]' onClick={() => ChangeSideBarFunc()}></GrMenu>
          
          
          <button class={`reqbutton  mr-[15%] hidden lg:inline-flex }`}>
              <p> Request a quote</p>
            </button>

            
            
          
         
          <Link href='/#Services'>
            <p className='lg:inline-flex hidden font-[400] text-[20px] hover:cursor-pointer font-bold'>Services</p>

          </Link>
          <Link href='/#UseCases'>
            <p className='lg:inline-flex hidden font-[400] text-[20px] hover:cursor-pointer font-bold'>Use Cases</p>

          </Link>
          <p className='lg:inline-flex hidden font-[400] text-[20px] hover:cursor-pointer font-bold'>About us</p>

          <div class="toggle-switch lg:inline-flex hidden">
          
            
          </div> 
          
        <img src='/modifiedLogo.jpg' className=' mt-5 max-w-[13.721rem]  mr-auto ml-[1.25rem] lg:ml-[13%]'></img>
        
        </section>

        <section onTouchMove={() => ChangeSideBarFunc()} className={ `bg-white z-20  ${openSideBar} lg:hidden gap-[2.5rem] min-w-[50%] min-h-screen fixed flex flex-col items-center right-0 justify-start  `}>
          <div className='gap-[2.5rem] m-3 flex flex-col items-center  justify-center bg-whit'>

          
            <Link href='#UseCases'>
              <p className=' font-[400] text-[20px] hover:cursor-pointer font-bold'>Use Cases</p>
            </Link>
                      <Link href='/#Services'>
              <p className=' font-[400] text-[20px] hover:cursor-pointer font-bold'>Services</p>
            </Link>

            
            
            <p className=' font-[400] text-[20px] hover:cursor-pointer font-bold '>About us</p>
            <p className=' font-[400] text-[20px] hover:cursor-pointer font-bold ' onClick={() => ChangeSideBarFunc()}>close</p>
          </div>
        </section>
      </>
  )
}
