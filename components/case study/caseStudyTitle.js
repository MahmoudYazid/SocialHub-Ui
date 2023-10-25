import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { Cairo } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
const CairoFont = Cairo({
  subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
  subsets: ['latin']
})
export default function caseStudyTitle() {



  const { locales } = useRouter();

  const intl = useIntl();

  const title = intl.formatMessage({id: "page.CaseStudy.head.title" });
  const description = intl.formatMessage({ id: "page.CaseStudy.head.desc" });
  const lang = intl.formatMessage({ id: "lang" });


  const Mode = useSelector((state) => state.ModeSlicerReducer.mode)
  const LightMode = () => (
    <div className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}  flex ${lang == 'en' ? 'flex-row' : 'flex-row-reverse'}  justify-center  xl:justify-start flex-wrap items-center  ml-[15%] mr-[15%]`} >
      <div className=' m-4  flex justify-center items-center h-[3.188rem] min-w-[11.125rem] bg-[#B9FF66] border-[#B9FF66] border-2 rounded-[10px] text-[2.5rem] font-[#500]'>
        <p>{title}</p>
      </div>
      <div className={`ml-[1.25rem] mr-[1.25rem] lg:mr-[0rem] text-[18px] font-[400] max-w-[36.25rem] text-center ${lang == 'en' ? 'lg:text-start' : 'lg:text-end'} mt-[2.5rem] lg:mt-[0rem] lg:ml-[2.5rem] `}>
        <p>{description}</p>
      </div>
    </div>
  )
  const DarkMode = () => (
    <div className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}  flex ${lang == 'en' ? 'flex-row' : 'flex-row-reverse'}  justify-center  xl:justify-start flex-wrap items-center  ml-[15%] mr-[15%]`} >
      <div className=' m-4  flex justify-center items-center h-[3.188rem] min-w-[11.125rem] bg-[#B9FF66] border-[#B9FF66] border-2 rounded-[10px] text-[2.5rem] font-[#500]'>
        <p>{title}</p>
      </div>
      <div className={`text-white ml-[1.25rem] mr-[1.25rem] lg:mr-[0rem] text-[18px] font-[400] max-w-[36.25rem] text-center ${lang == 'en' ? 'lg:text-start' : 'lg:text-end'} mt-[2.5rem] lg:mt-[0rem] lg:ml-[2.5rem] `}>
        <p>{description}</p>
      </div>
    </div>
  )

  return (
    <>
      {Mode == 'light' ? <LightMode /> : <DarkMode />}


    </>
  )
}
