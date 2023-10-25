import React from 'react'
import { Inter } from 'next/font/google'
import { GoArrowUpRight } from 'react-icons/go'
import { useSelector } from 'react-redux'

const InterFont = Inter({
  subsets: ['latin']
})
export default function Recent() {
  const Mode = useSelector((state) => state.ModeSlicerReducer.mode)

  const CardRighttLight = () => (
    <div className=' gap-2 bg-white min-w-[90%] min-h-[20rem]     grid grid-col-[1fr]  lg:grid-cols-[1fr_1fr]'>
      <div className='w-[100%] h-[70%] bg-white justify-center items-center '>
        <img src='/imgforBlog3.jpg' className='min-w-[100%] bg-cover min-h-[70%] '></img>
      </div>


      <div className='gap-2 bg-white items-start  min-w-[90%] h-[20rem]  grid grid-rows-[.5fr_.5fr_.5fr_1fr]'>

        <div className=' mt-1 mb-1 text-[#6941C6] bg-white flex justify-start items-center'>
          <p>Sunday , 1 Jan 2023</p>
        </div>
        <div className={`${InterFont.className} text-black text-[1.5rem] font-[600] `}> UX review presentations</div>

        <div className='bg-white flex flex-row'>
          <p className='text-black '>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
        </div>


        <div className='bg-white flex flex-row gap-3 flex-wrap justify-start items-center '>
          <div className=' flex justify-center items-center bg-black w-[7rem] h-[1.7rem] rounded-[16px] text-white'>Presentation</div>
          <div className=' flex justify-center items-center bg-black w-[7rem] h-[1.7rem] rounded-[16px] text-white'>Presentation</div>

        </div>

      </div>
    </div>
  )
  const CardLeftLight = () => (
    <div className='bg-white  min-w-[90%] h-[30rem]  grid grid-rows-[2.5fr_.5fr_.2fr_1fr]'>
      <div className='w-[100%] h-[100%] bg-white '>
        <img src='/desktopimgBlog.svg' className='min-w-[100%] bg-cover '></img>
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
        <div className='bg-white flex flex-row gap-3 flex-wrap justify-start items-center '>
          <div className=' flex justify-center items-center bg-black w-[7rem] h-[1.7rem] rounded-[16px] text-white'>Presentation</div>
          <div className=' flex justify-center items-center bg-black w-[7rem] h-[1.7rem] rounded-[16px] text-white'>Presentation</div>

        </div>
      </div>


    </div>
  )

  //////////////////
  const CardRight = () => (
    <div className=' gap-2 bg-[#090D1F] min-w-[90%] min-h-[20rem]     grid grid-col-[1fr]  lg:grid-cols-[1fr_1fr]'>
      <div className='w-[100%] h-[70%] bg-[#090D1F] justify-center items-center '>
        <img src='/imgforBlog3.jpg' className='min-w-[100%] bg-cover min-h-[70%] '></img>
      </div>


      <div className='gap-2 bg-[#090D1F] items-start  min-w-[90%] h-[20rem]  grid grid-rows-[.5fr_.5fr_.5fr_1fr]'>
      
        <div className=' mt-1 mb-1 text-[#6941C6] bg-[#090D1F] flex justify-start items-center'>
          <p>Sunday , 1 Jan 2023</p>
        </div>
        <div className={`${InterFont.className} text-white text-[1.5rem] font-[600] `}> UX review presentations</div>

        <div className='bg-[#090D1F] flex flex-row'>
          <p className='text-[#C0C5D0]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
        </div>


        <div className='bg-[#090D1F] flex flex-row gap-3 flex-wrap justify-start items-center '>
          <div className=' flex justify-center items-center bg-white w-[7rem] h-[1.7rem] rounded-[16px] text-black'>Presentation</div>
          <div className=' flex justify-center items-center bg-white w-[7rem] h-[1.7rem] rounded-[16px] text-black'>Presentation</div>

        </div>

      </div>
    </div>
  )
  const CardLeft =()=>(
    <div className='bg-[#090D1F]  min-w-[90%] h-[30rem]  grid grid-rows-[2.5fr_.5fr_.2fr_1fr]'>
      <div className='w-[100%] h-[100%] bg-[#090D1F] '>
        <img src='/desktopimgBlog.svg' className='min-w-[100%] bg-cover '></img>
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
        <div className='bg-[#090D1F] flex flex-row gap-3 flex-wrap justify-start items-center '>
          <div className=' flex justify-center items-center bg-white w-[7rem] h-[1.7rem] rounded-[16px] text-black'>Presentation</div>
          <div className=' flex justify-center items-center bg-white w-[7rem] h-[1.7rem] rounded-[16px] text-black'>Presentation</div>

        </div>
      </div>


    </div>
  )



  const LightModeCom = () => (
    <div className=' gap-[5rem] bg-white grid grid-col-[1fr] lg:grid-cols-[1fr_1fr] w-[100%] min-h-[32rem]   pr-[4%] pl-[4%] lg:pl-[15%] lg:pr-[15%]'>
      <div className='bg-white flex justify-center items-start'>
        <CardLeftLight></CardLeftLight>

      </div>
      <div className='gap-1 bg-white flex  flex-col pl-[1%] pr-[1%] lg:p-[0%] '>
        <CardRighttLight></CardRighttLight>
        <CardRighttLight></CardRighttLight>

      </div>

    </div>
  )


  const DarkModeCom = () => (
    <div className=' gap-[5rem] bg-[#090D1F] grid grid-col-[1fr] lg:grid-cols-[1fr_1fr] w-[100%] min-h-[32rem]   pr-[4%] pl-[4%] lg:pl-[15%] lg:pr-[15%]'>
      <div className='bg-[#090D1F] flex justify-center items-start'>
        <CardLeft></CardLeft>

      </div>
      <div className='gap-1 bg-[#090D1F] flex  flex-col pl-[1%] pr-[1%] lg:p-[0%] '>
        <CardRight></CardRight>
        <CardRight></CardRight>

      </div>

    </div>
  )


  return (
    <>
      {Mode == 'light' ? <LightModeCom /> : <DarkModeCom />}


    </>
  )
}
