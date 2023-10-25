import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { Space_Grotesk } from 'next/font/google'
import { Cairo } from 'next/font/google'

const CairoFont = Cairo({
    subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
    subsets: ['latin']
})
export default function CaseBody() {


    const { locales } = useRouter();

    const intl = useIntl();

    const card1 = intl.formatMessage({ id: "page.CaseStudy.body.card1.desc" });
    const card2 = intl.formatMessage({ id: "page.CaseStudy.body.card2.desc" });
    const card3 = intl.formatMessage({ id: "page.CaseStudy.body.card3.desc" });
    const learnmore = intl.formatMessage({ id: "page.CaseStudy.body.card.learnmore" });
    const lang = intl.formatMessage({ id: "lang" });

  return (
      <div className='  min-h-[25rem]  cursor-grab	 flex flex-row justify-start  lg:justify-start items-center overflow-y-hidden overflow-x-scroll xl:overflow-hidden p-8 xl:ml-[10rem] xl:mr-[10rem]'>

          <div className='text-white  flex flex-col rounded-[45px] lg:rounded-[0px] lg:rounded-tl-[45px] lg:rounded-bl-[45px] flex-1 flex items-center justify-center   lg:rounded-tl-[45px] lg:rounded-bl-[45px]  bg-black min-w-[24rem] min-h-[20.375rem] border-r-2 border-white'>
              <div className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} pl-[10%] flex flex-row gap-1 justify-start items-start  min-w-[80%]`}>
                  <p className='w-[80%] font-[400] text-[18px] '>{card1}</p>

              </div>


              <div className='flex flex-row gap-1 justify-start items-start  min-w-[80%] hover:cursor-pointer'>
                  <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-[#B9FF66] text-[20px] font-[400]`}>{learnmore}</p>
                  <FiArrowUpRight size={20} className='text-[#B9FF66]'></FiArrowUpRight>
              </div>

          </div>


          <div className=' text-white   flex flex-col rounded-[45px] lg:rounded-[0px] flex-1 items-center justify-center  bg-black min-w-[24rem] min-h-[20.375rem] border-r-2 border-white '>
              <div className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}  pl-[10%] flex flex-row gap-1 justify-start items-start  min-w-[80%]`}>
                  <p className='w-[80%] font-[400] text-[18px] '>{card2}</p>

              </div>


              <div className='flex flex-row gap-1 justify-start items-start  min-w-[80%] hover:cursor-pointer'>
                  <p className='text-[#B9FF66] text-[20px] font-[400]'>{learnmore}</p>
                  <FiArrowUpRight size={20} className='text-[#B9FF66]'></FiArrowUpRight>
              </div>
          </div>



          <div className='text-white flex flex-col flex-1 items-center justify-center rounded-[45px] lg:rounded-[0px] lg:rounded-tr-[45px] lg:rounded-br-[45px] bg-black min-w-[24rem] min-h-[20.375rem] '>
              <div className=' pl-[10%] flex flex-row gap-1 justify-start items-start  min-w-[80%]'>
                  <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} w-[80%] font-[400] text-[18px] `}>
                      {card3}</p>

              </div>


              <div className='flex flex-row gap-1 justify-start items-start  min-w-[80%] hover:cursor-pointer'>
                  <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-[#B9FF66] text-[20px] font-[400]`}>{learnmore}</p>
                  <FiArrowUpRight size={20} className='text-[#B9FF66]'></FiArrowUpRight>
              </div>
          </div>

      </div>
  )
}
