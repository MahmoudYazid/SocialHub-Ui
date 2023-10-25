import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { SlArrowUp } from 'react-icons/sl'

import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from 'next/link'
import { Cairo } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
const CairoFont = Cairo({
    subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
    subsets: ['latin']
})
export default function serviceBoxes() {


    const intl = useIntl();
    const { locales } = useRouter();

    const SearchEngineOptimization = intl.formatMessage({ id: "page.service.body.SearchEngineOptimization" });
    const PayPerClickAdvertising = intl.formatMessage({ id: "page.service.body.PayPerClickAdvertising" });
    const SocialMediaMarketing = intl.formatMessage({ id: "page.service.body.SocialMediaMarketing" });
    const EmailMarketing = intl.formatMessage({ id: "page.service.body.EmailMarketing" });
    const ContentCreation = intl.formatMessage({ id: "page.service.body.ContentCreation" });
    const AnalyticsAndTracking = intl.formatMessage({ id: "page.service.body.AnalyticsAndTracking" });
    const WebDevelopment = intl.formatMessage({ id: "page.service.body.WebDevelopment" });
    const MobileDevelopment = intl.formatMessage({ id: "page.service.body.MobileDevelopment" });
    const LearnMore = intl.formatMessage({ id: "page.service.body.learnmore" });
    const lang = intl.formatMessage({ id: "lang" });

    const Mode = useSelector((state) => state.ModeSlicerReducer.mode)

    const Card = ({ link , color, title, titleHighlightColor,img ,textcolor ,circleColor  , arrowcolor })=>(
    
        <div className={`hover:transition-all	hover:delay-100 hover:duration-200 grid grid-cols-[1fr_1fr] border-2       ${Mode == 'dark' && color != "bg-[#F3F3F3]" ? 'border-white border-2' : Mode == 'dark' && color == "bg-[#F3F3F3]" ? 'border-[#B9FF66] border-2' : Mode != 'dark' && color != "bg-black" ? 'border-black border-2' : Mode != 'dark' && color != "bg-black" ? 'border-green-200 border-2' : 'border-green-200 border-2'}  hover:border-b-[.5rem] rounded-[45px]   m-1 w-[90%]  md:w-[37.5rem] min-h-[19.375rem] ${color}`}>
            <div className=' pt-[3.125rem] rounded-tl-[45px] rounded-bl-[45px] flex flex-col justify-start items-center '>
                
                
                <div className=' text-center font-[500] globalfont text-[1.875rem]'>
                    <mark className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} ${titleHighlightColor}  ml-2`} >{title} </mark>
                </div>
                
                <div className='mt-auto mb-[3rem] flex flex-row items-center'>
                    <div className={`${circleColor}  rounded-full`}>
                        
               </div>
                    <Link href={link} className='   w-[15rem] flex justify-start items-center'>
                        <div className={`${color == 'bg-black' ? 'bg-white' : 'bg-black'} animationBtmCard rounded-full w-[7rem] h-[3rem] flex gap-5 flex-row justify-start items-center   `}>
                            <div className={`  whitespace-nowrap	m-5 ${color == 'bg-black' ? 'text-black' : 'text-white'} `}>
                                <p>{LearnMore}</p> 
                            </div>
                        <SlArrowUp size={30} className={`Btmarrow ${color == 'bg-black' ? 'text-black' : 'text-white'}   min-w-[5rem]`} ></SlArrowUp>

                        </div>
                        
                    </Link>
                </div>
            </div>
           <div className='flex   justify-center items-center'>
            <img src={`${img}`}></img>
           </div>
        </div>
    )

  return (
      <div className='mt-[5.313rem] flex flex-row flex-wrap gap-2 justify-center items-start  sm:ml-[6.25rem] sm:mr-[6.25rem]'>
          <Card link={'/learnmore/SearchEngineOptimization'} circleColor={'bg-black'} arrowcolor={'text-[#B9FF66]'}  textcolor={'text-black'}  titleHighlightColor={'bg-[#B9FF66]'} title={SearchEngineOptimization} img={'/seearch optimization.svg'} color={'bg-[#F3F3F3]'}></Card>
          <Card link={'/learnmore/PayPerClickAdvertising' }  circleColor={'bg-black' }  arrowcolor={'text-[#B9FF66]'}  textcolor={'text-black'}  titleHighlightColor={'bg-white'}  title={PayPerClickAdvertising}  img={'/mouseclick.svg'} color={'bg-[#B9FF66]'}></Card>
          <Card link={'/learnmore/SocialMediaMarketing'}  circleColor={'bg-white'}  arrowcolor={'text-black'}  textcolor={'text-white'} titleHighlightColor={'bg-white'}  title={SocialMediaMarketing}  img={'/social media marketing.svg'} color={'bg-black'}></Card>
          <Card link={'/learnmore/EmailMarketing'}  circleColor={'bg-black'} arrowcolor={'text-[#B9FF66]'}  textcolor={'text-black'} titleHighlightColor={'bg-[#B9FF66]'}  title={EmailMarketing}  img={'/email markeing.svg'}  color={'bg-[#F3F3F3]'}></Card>
          <Card link={'/learnmore/ContentCreation'}  circleColor={'bg-black'} arrowcolor={'text-[#B9FF66]'}  textcolor={'text-black'}  titleHighlightColor={'bg-white'}  title={ContentCreation}  img={'/content creation.svg'}  color={'bg-[#B9FF66]'}></Card>
          <Card link={'/learnmore/AnalyticsAndTracking'}  circleColor={'bg-white'} arrowcolor={'text-black'} textcolor={'text-white'} titleHighlightColor={'bg-[#B9FF66]'} title={AnalyticsAndTracking}  img={'/analytics.svg'}  color={'bg-black'}></Card>

          <Card link={'/learnmore/WebDevelopment'}  circleColor={'bg-black'} arrowcolor={'text-[#B9FF66]'} textcolor={'text-black'} titleHighlightColor={'bg-[#B9FF66]'} title={WebDevelopment} img={'/websites.png'} color={'bg-[#F3F3F3]'}></Card>
          <Card link={'/learnmore/MobileDevelopment'} circleColor={'bg-black'} arrowcolor={'text-[#B9FF66]'} textcolor={'text-black'} titleHighlightColor={'bg-white'} title={MobileDevelopment} img={'/Mobdev.png'} color={'bg-[#B9FF66]'}></Card>

        
          
    </div>
  )
}
