import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

export default function ourteamBody() {
    const Mode = useSelector((state) => state.ModeSlicerReducer.mode)

    const Card=()=>(
        <div className={`  ${Mode == 'dark' ? 'border-[#B9FF66] border-2' : 'border-black '}  grid grid-rows-[1fr_1fr] border-2 hover:transition-all	hover:delay-100 hover:duration-200		 hover:border-b-[.5rem] rounded-[45px]   m-3 w-[95%]  md:max-w-[24.188rem] min-h-[20.676rem] bg-white`}>
            <div className='rounded-tl-[45px] rounded-tr-[45px] border-2 border-b-black bg-white flex flex-row border-2  ' >
                    <div className='grid grid-col-[1fr] flex-1 justify-center items-center ml-[2.188rem] '>
                    <img src='/humain.svg' ></img>
       
                </div>
                <div className='ml-[1.5rem] flex flex-col flex-1 md:justify-center md:items-start justify-center items-center w-auto pt-[3rem] '>
                    
                    
                    <p className='text-[20px] font-[500] '>John Smith</p>
                    <p className='text-[18px] font-[400]  w-[10rem]'>CEO and Founder</p>

                </div>
                <div className='bg-white flex flex-col flex-1 justify-start mt-5 items-center '>

                    <AiFillLinkedin size={40} className='rounded-full   md:min-w-[5rem] mr-5'></AiFillLinkedin>

                </div>

            </div>
            <div className='rounded-bl-[45px] rounded-br-[45px]  w-[100%] flex  p-5 '>
                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>

            </div>
 
        </div>
    )
  return (
    <div className=' flex flex-row flex-wrap justify-center item-center max-w-[100%]  '>

          <div className='grid grid-row-[1fr_1fr_1fr]  '>
              <div className=' flex flex-row flex-wrap '>  
              <Card></Card>
                  <Card></Card>
                  <Card></Card>
              </div>
              <div className=' flex flex-row flex-wrap '>
                  <Card></Card>
                  <Card></Card>
                  <Card></Card>
              </div>
             


       </div>
          
          
  
    </div>
  )
}
