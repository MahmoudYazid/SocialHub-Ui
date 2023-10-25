import React,{useState} from 'react'
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
export default function processBody() {
  const { locales } = useRouter();
  const intl = useIntl();
  const card1 = intl.formatMessage({ id: "page.workingProcess.body.card1.title" });
  const card2 = intl.formatMessage({ id: "page.workingProcess.body.card2.title" });
  const card3 = intl.formatMessage({ id: "page.workingProcess.body.card3.title" });
  const card4 = intl.formatMessage({ id: "page.workingProcess.body.card4.title" });
  const card5 = intl.formatMessage({ id: "page.workingProcess.body.card5.title" });
  const card6 = intl.formatMessage({ id: "page.workingProcess.body.card6.title" });
  const desc1 = intl.formatMessage({ id: "page.workingProcess.body.card.desc1" });
  const desc2 = intl.formatMessage({ id: "page.workingProcess.body.card.desc2" });
  const desc3 = intl.formatMessage({ id: "page.workingProcess.body.card.desc3" });
  const desc4 = intl.formatMessage({ id: "page.workingProcess.body.card.desc4" });
  const desc5 = intl.formatMessage({ id: "page.workingProcess.body.card.desc5" });
  const desc6 = intl.formatMessage({ id: "page.workingProcess.body.card.desc6" });
  const lang = intl.formatMessage({ id: "lang" });


  const FirstCard = ({ number, Text, desc })=>{
    

    const [ShowDesc, SetShowDesc] = useState('hidden')
    const [Maincolor, SetMaincolor] = useState('bg-[#F3F3F3]')
    const visiibleFunc = () => {
      if (ShowDesc == 'hidden') {
        SetShowDesc('visible')
        SetMaincolor(' bg-[#B9FF66]')
      } else {
        SetShowDesc('hidden')
        SetMaincolor(' bg-[#F3F3F3]')
      }
    }
    return (
      <>
        <div className='   overflow-hidden grid grid-row-[1fr_1fr] mt-[1rem] w-[70%]  min-h-fit md:min-h-[7.5rem] hover:transition-all	hover:delay-100 hover:duration-200 hover:border-b-[.5rem] rounded-[45px] border-2 border-black'>
          <div className={` ${Maincolor} ${lang == 'en' ? GeneralFont.className : CairoFont.className} justify-center items-center  flex flex-col  sm:grid   sm:grid-cols-[.5fr_1fr_.5fr]    `}>
            <div className='border-2 border-transparent  flex justify-center items-center text-[2rem] lg:text-[3rem] font-[500] '><p>{number}</p></div>
            <div className=' text-center flex justify-start items-center text-[1.875rem] font-[500] border-2 border-transparent'><p>{Text}</p></div>
            <div className=' flex justify-center items-center'>
              <button onClick={() => visiibleFunc()} title="Add New" class={`${lang == 'en' ? GeneralFont.className : CairoFont.className} ${ShowDesc == 'hidden' ? 'flex' : 'hidden'}  group cursor-pointer hover:rotate-90 active:scale-100 duration-200`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-black fill-none group-active:fill-black duration-200">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5"></path>
                  <path d="M8 12H16" stroke-width="1.5"></path>
                  <path d="M12 16V8" stroke-width="1.5"></path>
                </svg>
              </button>
              <button onClick={() => visiibleFunc()} title="Add New" class={`${lang == 'en' ? GeneralFont.className : CairoFont.className} ${ShowDesc} group cursor-pointer hover:rotate-90 active:scale-100 duration-200`}>
                <svg width="50" height="50" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                  <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                </svg>

              </button>



            </div>
          </div>
          <div className={`  ${lang == 'en' ? GeneralFont.className : CairoFont.className} ${Maincolor} ${ShowDesc} border-2 border-t-black pl-5 min-w-100 flex justify-center items-center`}>
            <p className='m-1 text-[1rem] font-[400] border-2 border-[#B9FF66] '>{desc}</p>
          </div>
        </div>



    

      </>
    )
  }



  return (
    <div className=' min-w-screen mb-5 md:max-h-[75rem]  flex flex-col justify-start items-center '>
      <FirstCard number={'01'} Text={card1} desc={desc1}> </FirstCard>
      <FirstCard number={'02'} Text={card2} desc={desc2 }> </FirstCard>
      <FirstCard number={'03'} Text={card3} desc={desc3 }> </FirstCard>
      <FirstCard number={'04'} Text={card4} desc={desc4 }> </FirstCard>
      <FirstCard number={'05'} Text={card5} desc={desc5 }> </FirstCard>
      <FirstCard number={'06'} Text={card6} desc={desc6 }> </FirstCard>

   
    
      
    </div>
  )
}
