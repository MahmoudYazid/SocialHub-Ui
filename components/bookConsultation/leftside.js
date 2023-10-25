import Image from 'next/image'
import React from 'react'
import { Space_Grotesk } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { Cairo } from 'next/font/google'
const CairoFont = Cairo({
  subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
  subsets: ['latin']
})
export default function leftside() {
  const { locales } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.bookconsult.title" });
  const description = intl.formatMessage({ id: "page.bookconsult.desc" });
  const btm = intl.formatMessage({ id: "page.bookconsult.btm" });
  const lang = intl.formatMessage({ id: "lang" });

  const Mode = useSelector((state) => state.ModeSlicerReducer.mode)
  const LightMode = () => (
    <div className='max-w-[100%] bg-white flex flex-col  lg:justify-end  lg:items-start items-center  gap-[2.188rem] '>

      <div className='  max-w-[32.063rem] max-h-[14.438rem] ml-[1.25rem]  lg:ml-[23%] mb-[2rem] lg:mb-[0rem]'>
        <p className={` font-[500] lg:text-[3.75rem] text-[2.688rem] ${lang == 'en' ? GeneralFont.className :CairoFont.className}`}>{title}</p>
      </div>

      <div className=' mt-[20px] min-w-[100%] flex items-center justify-center'>
        <img src='/microphone.svg' className='max-w-[80%] mt-[2.188rem] max-h-[80%] visible lg:hidden' ></img>

      </div>



      <div className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} lg:ml-[23%]  mb-[2.5rem] lg:mb-[2.188rem] max-w-[31.125rem] min-h-[14rem] lg:min-h-[7rem]   mt-[1.25rem] lg:mt-[2.188rem] `}>
        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} font-[400] text-[1.25rem]`}>{description}</p>
        <button class="BtmCons mt-5 w-[85%] sm:w-[16.5rem] h-[4.25rem] ">   <p>{btm}</p>
        </button>

      </div>







    </div>
  )
  const DarkMode = () => (
    <div className='  max-w-[100%] bg-black flex flex-col  lg:justify-end  lg:items-start items-center  gap-[2.188rem] '>

      <div className=' max-w-[32.063rem] max-h-[14.438rem] ml-[1.25rem]  lg:ml-[23%] mb-[2rem] lg:mb-[0rem]'>
        <p className={` text-white font-[500] lg:text-[3.75rem] text-[2.688rem] ${lang == 'en' ? GeneralFont.className : CairoFont.className}`}>{title}</p>
      </div>

      <div className=' mt-[20px] min-w-[100%] flex items-center justify-center'>
        <img src='/microphone.svg' className='max-w-[80%] mt-[2.188rem] max-h-[80%] visible lg:hidden invert' ></img>

      </div>



      <div className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}  mb-[2.5rem] lg:mb-[2.188rem] max-w-[31.125rem] min-h-[14rem] lg:min-h-[7rem]  mt-[1.25rem] lg:mt-[2.188rem] lg:ml-[23%] `}>
        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white font-[400] text-[1.25rem]`}>{description}</p>
        <button class="text-white BtmCons mt-5 w-[85%] sm:w-[16.5rem] h-[4.25rem] ">   <p>{btm}</p>
        </button>

      </div>







    </div>
  )


  return (
   
    <>
      {Mode == 'light' ? <LightMode /> : <DarkMode />}


    </>
  )
}
