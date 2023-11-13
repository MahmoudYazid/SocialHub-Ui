import React from 'react'
import Navbar from './blogNavBar'
import { Inter } from 'next/font/google'
import { GoArrowUpRight } from 'react-icons/go'
import { useSelector } from 'react-redux'

const InterFont = Inter({
    subsets: ['latin']
})
export default function specificTopic() {
    const Mode = useSelector((state) => state.ModeSlicerReducer.mode)

    const Card = () => (
        <div className=' hover:border-b-2 hover:cursor-pointer hover:border-white mb-2 bg-[#090D1F]  w-[90%]  lg:w-[28rem] min-h-[8rem]  grid grid-rows-[2.5fr_.5fr_.2fr_1fr]'>
            <div className='w-[100%] h-[100%] bg-[#090D1F] '>
                <img src='/imgforBlog3.jpg' className='w-auto bg-cover min-h-[100%] '></img>
            </div>


            <div className=' mt-2 mb-2 text-[#6941C6] bg-[#090D1F] flex justify-start items-center'>
                <p>Sunday , 1 Jan 2023</p>
            </div>


            <div className='bg-[#090D1F] flex flex-row'>
                <div className={`${InterFont.className} text-white text-[1.5rem] font-[600] `}> UX review presentations</div>
                <div className='ml-auto'><GoArrowUpRight size={30} className=' text-white'></GoArrowUpRight></div>
            </div>


            <div className='bg-[#090D1F] grid grid-rows-[1fr_.8fr] '>
                <div className='bg-[#090D1F] flex flex-row'>
                    <p className='text-[#C0C5D0]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                </div>
                <div className='mt-3 bg-[#090D1F] flex flex-row gap-3 flex-wrap justify-start items-center '>
                    <div className=' flex justify-center items-center bg-white w-[7rem] h-[1.7rem] rounded-[16px] text-black'>Presentation</div>
                    <div className=' flex justify-center items-center bg-white w-[7rem] h-[1.7rem] rounded-[16px] text-black'>Presentation</div>

                </div>
            </div>


        </div>
    )

    const CardLight = () => (
        <div className='mb-2 bg-white  w-[90%]  lg:w-[28rem] min-h-[8rem]  grid grid-rows-[2.5fr_.5fr_.2fr_1fr] hover:border-b-2 hover:cursor-pointer hover:border-black'>
            <div className='w-[100%] h-[100%] bg-white '>
                <img src='/imgforBlog3.jpg' className='w-auto bg-cover min-h-[100%] '></img>
            </div>


            <div className=' mt-2 mb-2 text-[#6941C6] bg-white flex justify-start items-center'>
                <p>Sunday , 1 Jan 2023</p>
            </div>


            <div className='bg-white flex flex-row'>
                <div className={`${InterFont.className} text-black text-[1.5rem] font-[600] `}> UX review presentations</div>
                <div className='ml-auto'><GoArrowUpRight size={30} className=' text-black'></GoArrowUpRight></div>
            </div>


            <div className='bg-white grid grid-rows-[1fr_.8fr] '>
                <div className='bg-white flex flex-row'>
                    <p className='text-black'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                </div>
                <div className='mt-3 bg-white flex flex-row gap-3 flex-wrap justify-start items-center '>
                    <div className=' flex justify-center items-center bg-black w-[7rem] h-[1.7rem] rounded-[16px] text-white'>Presentation</div>
                    <div className=' flex justify-center items-center bg-black w-[7rem] h-[1.7rem] rounded-[16px] text-white'>Presentation</div>

                </div>
            </div>


        </div>
    )


    const LightModeCom = () => (
        <div className='min-w-[100%] min-h-screen bg-black flex flex-col '>
            <Navbar></Navbar>
            <div className='min-w-[100%] min-h-full  flex-1 bg-white grid grid-cols-[1fr]  lg:grid-cols-[.5fr_1fr] pl-[13%] pr-[13%]'>
                <div className={`bg-white  justify-center items-start flex-col min-h-[100%] hidden lg:flex`}>
                    <div className='w-[100%] h-[5rem] flex flex-row bg-white  text-black justify-start items-center   '>
                        <p className={`${InterFont.className} font-[600] text-[2rem]`}>Recent blog posts</p>

                    </div>
                    <CardLight></CardLight>
                    <CardLight></CardLight>
                    <CardLight></CardLight>
                    <CardLight></CardLight>
                </div>
                <div className='bg-white  min-h-[100%]'></div>
            </div>

        </div>
    )


    const DarkModeCom = () => (
        <div className='min-w-[100%] min-h-screen bg-[#090D1F] flex flex-col '>
            <Navbar></Navbar>
            <div className='min-w-[100%] min-h-full  flex-1 bg-[#090D1F] grid grid-cols-[1fr]  lg:grid-cols-[.5fr_1fr] pl-[13%] pr-[13%]'>
                <div className={`bg-[#090D1F] justify-center items-start flex-col min-h-[100%] hidden lg:flex`}>
                    <div className='w-[100%] h-[5rem] flex flex-row bg-[#090D1F]  text-white justify-start items-center   '>
                        <p className={`${InterFont.className} font-[600] text-[2rem]`}>Recent blog posts</p>

                    </div>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <div className='bg-[#090D1F] min-h-[100%]'></div>
            </div>

        </div>
    )
  return (
      <>
          {Mode == 'light' ? <LightModeCom /> : <DarkModeCom />}


      </>
  )
}
