import React from 'react'

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
export default function CtaCard() {
  
    const { locales } = useRouter();

    const intl = useIntl();

    const title = intl.formatMessage({ id: "page.ctaCard.title" });
    const description = intl.formatMessage({ id: "page.ctaCard.desc" });
    const btm = intl.formatMessage({ id: "page.ctaCard.btm" });
    const lang = intl.formatMessage({ id: "lang" });


    return (
        <div className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} justify-center items-center  ml-[2.5rem] mr-[2.5rem] mt-[6.25rem] flex flex-row min-h-[32.188rem] max-w-screen`}>
          <div className={` rounded-[45px] border-2 bg-[#F3F3F3] grid md:grid-cols-[1fr_1fr] grid-cols-[1fr]  rounded-[45px]   m-1 min-w-[80%]  md:w-[37.5rem] min-h-[19.375rem] `}>
              <div className='m-5   max-w-[100%] bg-[#F3F3F3] flex flex-col  justify-center  items-center  gap-[1.25rem] text-center '>

                  <div className='max-w-[32.063rem] max-h-[14.438rem] '>
                      <p className='font-[500] lg:text-[1.875rem] text-[1.625rem] '>
                        
                            {title}
                        </p>
                  </div>

              


                  <div className='   max-w-[31.125rem] min-h-[5rem] lg:max-h-[7rem]  '>
                        <p className='font-[400] text-[1.25rem]'>{description}</p>
                  </div>

                  <div className='mb-[3rem] w-[85%] sm:w-[16.5rem] h-[4.25rem] text-white bg-black flex justify-center items-center rounded-[14px] hover:cursor-pointer'>
                        <p>{btm}</p>
                  </div>



              </div>
              <div className='flex flex-row invisible absolute md:relative md:visible  justify-center items-center  '>
                  <img src={`/CtaCardSvg.svg`}></img>
              </div>
          </div>
      </div>
  )
}
