import React from 'react'
import { Inter } from 'next/font/google'
import { GoArrowUpRight } from 'react-icons/go'
import Footer from './footer'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const InterFont = Inter({
    subsets: ['latin']
})

export default function AllPosts() {
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
                    <div className=' flex justify-center items-center bg-white w-[7rem] h-[1.7rem] rounded-[16px] text-white'>Presentation</div>
                    <div className=' flex justify-center items-center bg-white w-[7rem] h-[1.7rem] rounded-[16px] text-white'>Presentation</div>

                </div>
            </div>


        </div>
    )
    const LightModeCom = () => (
        <div className='max-h-[16rem] bg-white grid grid-rows-[1fr_.1fr_.1fr]   max-w-[100%] '>
            <div className=' bg-white w-[100] h-fit gap-5 flex flex-row flex-wrap justify-center items-start lg:pl-[11%] lg:pr-[11%] '>
                <CardLight></CardLight>
                <CardLight></CardLight>
                <CardLight></CardLight>
                <CardLight></CardLight>
                <CardLight></CardLight>
                <CardLight></CardLight>

            </div>

            <div className='bg-white w-[100] text-white  h-[3rem] grid grid-cols-[.2fr_1fr_.2fr] lg:pl-[13%] lg:pr-[13%]'>

                <div className='bg-white  flex justify-start items-center'>
                    <div className=' gap-2 flex flex-row justify-center items-center text-black hover:cursor-pointer'>
                        <AiOutlineArrowLeft size={20}></AiOutlineArrowLeft>

                        <p className={`${InterFont.className} font-[500] `}>previous</p>

                    </div>
                </div>

                <div className={`${InterFont.className} text-[1rem] font-[500] bg-white gap-4 flex flex-row justify-center items-center text-black `}>
                    <p className='hover:cursor-pointer '>1</p>
                    <p className='hover:cursor-pointer '>2</p>
                    <p className='hover:cursor-pointer '>3</p>
                    <p className='hover:cursor-pointer '>4</p>
                    <p className='hover:cursor-pointer '>5</p>
                    <p className='hover:cursor-pointer '>6</p>
                    <p className='hover:cursor-pointer '>7</p>


                </div>

                <div className='bg-white flex justify-end items-center'>
                    <div className=' gap-2 flex flex-row justify-center items-center text-black hover:cursor-pointer '>
                        <p className={`${InterFont.className} font-[500]   `}>next</p>
                        <AiOutlineArrowRight size={20}></AiOutlineArrowRight>

                    </div>
                </div>

            </div>
            <Footer></Footer>

        </div>
    )


    const DarkModeCom = () => (
        <div className='max-h-[16rem] bg-[#090D1F] grid grid-rows-[1fr_.1fr_.1fr]   max-w-[100%] '>
            <div className=' bg-[#090D1F] w-[100] h-fit gap-5 flex flex-row flex-wrap justify-center items-start lg:pl-[11%] lg:pr-[11%] '>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>

            <div className='bg-[#090D1F] w-[100] text-white  h-[3rem] grid grid-cols-[.2fr_1fr_.2fr] lg:pl-[13%] lg:pr-[13%]'>

                <div className='bg-[#090D1F]  flex justify-start items-center'>
                    <div className=' gap-2 flex flex-row justify-center items-center text-white hover:cursor-pointer'>
                        <AiOutlineArrowLeft size={20}></AiOutlineArrowLeft>

                        <p className={`${InterFont.className} font-[500] `}>previous</p>

                    </div>
                </div>

                <div className={`${InterFont.className} text-[1rem] font-[500] bg-[#090D1F] gap-4 flex flex-row justify-center items-center text-white `}>
                    <p className='hover:cursor-pointer ' >1</p>
                    <p className='hover:cursor-pointer '>2</p>
                    <p className='hover:cursor-pointer '> 3</p>
                    <p className='hover:cursor-pointer '>4</p>
                    <p className='hover:cursor-pointer '>5</p>
                    <p className='hover:cursor-pointer '>6</p>
                    <p className='hover:cursor-pointer '>7</p>


                </div>

                <div className='bg-[#090D1F] flex justify-end items-center'>
                    <div className=' gap-2 flex flex-row justify-center items-center text-white hover:cursor-pointer '>
                        <p className={`${InterFont.className} font-[500] `}>next</p>
                        <AiOutlineArrowRight size={20}></AiOutlineArrowRight>

                    </div>
                </div>

            </div>
            <Footer></Footer>

        </div>
    )
    return (
        <>
            {Mode == 'light' ? <LightModeCom /> : <DarkModeCom />}


        </>
    )
}
