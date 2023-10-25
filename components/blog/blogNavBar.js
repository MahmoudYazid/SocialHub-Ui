import { changeMode } from '@/Store/slicer'
import React, { useState } from 'react'
import { GrMenu } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { Cairo } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link';
const CairoFont = Cairo({
    subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
    subsets: ['latin']
})
export default function Navbar() {
    const { locales } = useRouter();

    const intl = useIntl();

    const aboutusformatMsg = intl.formatMessage({ id: "page.navbar.aboutus" });
    const DarkModeformatMsg = intl.formatMessage({ id: "page.navbar.DarkMode" });
    const LightModeformatMsg = intl.formatMessage({ id: "page.navbar.LightMode" });
    const usecasesformatMsg = intl.formatMessage({ id: "page.navbar.usecases" });
    const servicesformatMsg = intl.formatMessage({ id: "page.navbar.services" });
    const ReqAQouteformatMsg = intl.formatMessage({ id: "page.navbar.ReqAQoute" });
    const closeformatMsg = intl.formatMessage({ id: "page.navbar.close" });

    const lang = intl.formatMessage({ id: "lang" });


    const [Light, SetLight] = useState(0)
    const [openSideBar, SetopenSideBar] = useState('hidden')
    const Mode = useSelector((state) => state.ModeSlicerReducer.mode)
    const dispach = useDispatch()
    const ChangeSideBarFunc = () => {
        openSideBar == 'hidden' ? SetopenSideBar('visible') : SetopenSideBar('hidden')
    }

    const LIGHTSwitch = () => (



        <button class={`${lang == 'en' ? GeneralFont.className : CairoFont.className} btn hidden lg:flex`} type="button" onClick={(e) => {

            dispach(changeMode())


        }}>
            <strong className='text-[20px]'>{Mode == 'dark' ? LightModeformatMsg : DarkModeformatMsg}</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </button>

    )
    const LightModeCom = () => (
        <>
            <section id='navbar' className='z-20    gap-[2.5rem] flex flex-row-reverse mt-[0px]  min-w-[100%] min-h-[11rem] bg-white items-center'>
                <GrMenu size={30} className='lg:hidden visible mr-[.5rem] min-w-[5rem]' onClick={() => ChangeSideBarFunc()}></GrMenu>


                <button class={`${lang == 'en' ? GeneralFont.className : CairoFont.className} ${Mode == 'dark' ? 'reqbutton-Dm' : 'reqbutton'}  mr-[15%] hidden lg:inline-flex }`}>
                    <p> {ReqAQouteformatMsg}</p>
                </button>





                <a href='/#Services' className='lg:inline-flex hidden'>
                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} lg:inline-flex hidden font-[400] text-[20px] hover:cursor-pointer font-bold`}>{servicesformatMsg}</p>

                </a>
                <a className='lg:inline-flex hidden' href='/#UseCases'>
                    <p className={` font-[400] text-[20px] hover:cursor-pointer font-bold ${lang == 'en' ? GeneralFont.className : CairoFont.className}`}>{usecasesformatMsg}</p>

                </a>
                <Link href={'/'} className={` ${lang == 'en' ? GeneralFont.className : CairoFont.className} lg:inline-flex hidden font-[400] text-[20px] hover:cursor-pointer font-bold`}>{aboutusformatMsg}</Link>

                <div class="toggle-switch lg:inline-flex hidden">
                    <LIGHTSwitch></LIGHTSwitch>


                </div>

                <img src='/modifiedLogo.jpg' className=' max-w-[13.721rem]  mr-auto ml-[1.25rem] lg:ml-[13%]'></img>

            </section>

            <section onTouchMove={() => ChangeSideBarFunc()} className={`z-20  ${openSideBar} lg:hidden gap-[2.5rem] min-w-[50%] min-h-[100%] fixed flex flex-col items-center right-0 justify-start mt-5 bg-white`}>
                <div className='gap-[2.5rem] m-3 flex flex-col items-center  justify-center bg-whit'>
                    
                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}  font-[400] text-[20px] hover:cursor-pointer font-bold`}>{ReqAQouteformatMsg}</p>
                    

                    <a href='/#UseCases'>
                        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}  font-[400] text-[20px] hover:cursor-pointer font-bold`}>{usecasesformatMsg}</p>
                    </a>
                    <a href='/#Services'>
                        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} font-[400] text-[20px] hover:cursor-pointer font-bold`}>{servicesformatMsg}</p>
                    </a>


                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} font-[400] text-[20px] hover:cursor-pointer font-bold`} onClick={() => dispach(changeMode())}> {DarkModeformatMsg} </p>

                    <Link href={'/'} className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} font-[400] text-[20px] hover:cursor-pointer font-bold`}>{aboutusformatMsg}</Link>
                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} font-[400] text-[20px] hover:cursor-pointer font-bold `} onClick={() => ChangeSideBarFunc()}>{closeformatMsg}</p>
                </div>
            </section></>
    )


    const DarkModeCom = () => (
        <>
            <section id='navbar' className='z-50    gap-[2.5rem] flex flex-row-reverse mt-[0px]  min-w-[100%] min-h-[11rem] bg-[#090D1F] items-center'>
                <GrMenu size={30} className='bg-white lg:hidden visible mr-[1.25rem] min-w-[5rem]' onClick={() => ChangeSideBarFunc()}></GrMenu>
                <button class={`${Mode == 'dark' ? 'reqbutton-Dm' : 'reqbutton'}  mr-[15%] hidden lg:inline-flex }`}>
                    <p> {ReqAQouteformatMsg}</p>
                </button>
                <a href='/#Services'>
                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white lg:inline-flex hidden font-[400] text-[20px] hover:cursor-pointer font-bold`}>{servicesformatMsg}</p>

                </a>
                <a href='/#UseCases'>
                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white lg:inline-flex hidden font-[400] text-[20px] hover:cursor-pointer font-bold`}>{usecasesformatMsg}</p>

                </a>
                <Link href={'/'} className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white lg:inline-flex hidden font-[400] text-[20px] hover:cursor-pointer font-bold`}>{aboutusformatMsg}</Link>

                <LIGHTSwitch></LIGHTSwitch>

                <img src='/modifiedLogo.jpg' className=' max-w-[13.721rem]  mr-auto ml-[1.25rem] lg:ml-[13%]'></img>

            </section>

            <section onTouchMove={() => ChangeSideBarFunc()} className={`z-50 ${openSideBar} lg:hidden gap-[2.5rem] min-w-[50%] min-h-[100%] fixed flex flex-col items-center right-0 justify-start mt-5 bg-black`}>
                <div className='gap-[2.5rem] m-3 flex flex-col items-center  justify-center bg-whit'>

                    <button class="RequQBtm text-white">
                        {ReqAQouteformatMsg}            </button>
                    <a href='/#UseCases'>
                        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white font-[400] text-[20px] hover:cursor-pointer`}>{usecasesformatMsg}</p>
                    </a>
                    <a href='/#Services'>
                        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white font-[400] text-[20px] hover:cursor-pointer`}>{servicesformatMsg}</p>
                    </a>

                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white font-[400] text-[20px] hover:cursor-pointer`} onClick={() => dispach(changeMode())}>{LightModeformatMsg}</p>

                    <Link href={'/'} className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white font-[400] text-[20px] hover:cursor-pointer`}>{aboutusformatMsg}</Link>
                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white font-[400] text-[20px] hover:cursor-pointer`} onClick={() => ChangeSideBarFunc()}>{closeformatMsg}</p>
                </div>
            </section></>
    )
    return (
        <>
            {Mode == 'light' ? <LightModeCom /> : <DarkModeCom />}


        </>
    )
}
