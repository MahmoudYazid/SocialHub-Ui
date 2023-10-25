import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from 'next/link';

import { Cairo } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
const CairoFont = Cairo({
    subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
    subsets: ['latin']
})
export default function footer() {
    const { locales } = useRouter();
    const intl = useIntl();
    const services_Internationalization = intl.formatMessage({ id: "page.footer.header.services" });
    const aboutus_Internationalization = intl.formatMessage({ id: "page.footer.header.aboutus" });

    const usecases_Internationalization = intl.formatMessage({ id: "page.footer.header.usecases" });
    const email_Internationalization = intl.formatMessage({ id: "page.footer.form.left.email" });

    const address_Internationalization = intl.formatMessage({ id: "page.footer.form.left.address" });
    const phone_Internationalization = intl.formatMessage({ id: "page.footer.form.left.phone" });
    const title_Internationalization = intl.formatMessage({ id: "page.footer.form.left.title" });
    const input_Internationalization = intl.formatMessage({ id: "page.footer.form.right.input" });
    const Btm_Internationalization = intl.formatMessage({ id: "page.footer.form.right.Btm" });
    const lang = intl.formatMessage({ id: "lang" });

    const Mode = useSelector((state) => state.ModeSlicerReducer.mode)
    const LightMode = () => (
        <>
            <div className=' hidden lg:flex    bg-white rounded-tl-[45px] rounded-tr-[45px] flex flex-row justify-center items-center min-w-screen min-h-[28.125rem] mt-[4rem]'>

                <div className=' ml-[15%] mr-[15%]  bg-black rounded-tl-[45px] rounded-tr-[45px] grid grid-rows-[.5fr_1fr_.5fr]   min-w-[70%] min-h-[28.125rem] mt-[4rem]'>
                    <div className='grid grid-cols-[.3fr_1fr_.3fr]     pl-[3.75rem] pr-[3.75rem] bg-black text-white min-w-full rounded-tl-[45px] rounded-tr-[45px]  '>
                        <div className='bg-black flex justify-start items-center '>
                            <img src='/modifiedLogo.jpg'></img>
                        </div>
                        <div className='bg-black flex flex-row items-center justify-center gap-5'>


                            <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}`}>{aboutus_Internationalization}</p>

                            <a className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}`} href='#Services'><p>{services_Internationalization}</p></a>
                            <a className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}`} href='#UseCases'><p>{usecases_Internationalization}</p></a>

                        </div>
                        <div className='gap-[1.25rem] bg-black flex justify-end items-center'>
                            <img src='/Linkedin.svg'></img>
                            <img src='/facebook.svg' ></img>
                            <img src='/tweeter.svg'></img>


                        </div>
                    </div>
                    <div className='bg-black grid grid-cols-[1fr_1fr] pl-[3.75rem] pr-[3.75rem] gap-5'>
                        <div className={`bg-black flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} justify-start item-center flex-col `}>
                            <div className={`w-[100%] flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} `}>
                                <div className=' mb-[1.688rem] border-2 flex justify-center items-center h-[1.625rem] w-[7.875rem] bg-[#B9FF66] border-[#B9FF66] border-2 rounded-[10px] text-[2.5rem] font-[500]'>
                                    <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-[1.25rem]`}>{title_Internationalization}</p>
                                </div>
                            </div>
                            
                            <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} text-white mb-[1.25rem]`}><span className='m-1'>{email_Internationalization}</span> <span className='m-1'>info@positivus.com</span></p>
                            <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} text-white mb-[1.25rem]`}><span className='m-1'>{phone_Internationalization}</span> <span className='m-1'>555-567-8901</span></p>
                            <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} text-white mb-[1.25rem]`}><span className='m-1'>{address_Internationalization}</span> <span className='m-1'>1234 Main St Moonstone City, Stardust State 12345</span></p>

                         


                        </div>
                        <div className='bg-black flex justify-center items-center'>

                            <div className='pl-[2.5rem] gap-[1.25rem] pr-[2.5rem] bg-[#292A32] min-w-[100%] min-h-[70%]  rounded-[14px] flex flex-row items-center justify-center'>
                                <div class="FootInput-group">
                                    <input required="" type="text" name="text" autocomplete="off" class="FootInput" />
                                    <label class={`${lang == 'en' ? GeneralFont.className : CairoFont.className} user-label`}>{email_Internationalization}</label>
                                </div>
                                <div className='cursor-pointer bg-[#B9FF66] rounded-[14px] h-[4.188rem] flex justify-center items-center pr-[2.188rem] pl-[2.188rem]'><p>{Btm_Internationalization}</p></div>
                            </div>
                        </div>

                    </div>
                    <div className='   text-white bg-black border-t-2 border-white bg-black flex  justify-start gap-5 items-center pl-[3.75rem]'>
                        <p className='font-[400]'>© 2023 Positivus. All Rights Reserved.</p>
                        <p className='underline font-[400]'>Privacy Policy</p>
                        <div className={'flex flex-row ml-auto gap-5 '}>
                            <div className='flex flex-row mr-[1rem]'>
                                <a href={'/en'} className=' '>English</a>
                                <a href={'/ar'} className=' ml-5'> العربيه</a>
                            </div>
                            
                        </div>

                    </div>


                </div>

            </div>




            {/* in small screen */}
            <div className=' visible lg:hidden bg-white rounded-tl-[45px] rounded-tr-[45px] flex flex-row justify-center items-center min-w-screen min-h-[28.125rem] mt-[4rem]'>

                <div className=' bg-black rounded-tl-[45px] rounded-tr-[45px] flex flex-col justify-start pt-8 items-center   min-w-[93%] min-h-[28.125rem] mt-[4rem]'>
                    <div className='bg-black flex justify-start items-center '>
                        <img src='/modifiedLogo.jpg'></img>
                    </div>
                    <div className='bg-black text-white flex flex-col items-center justify-center gap-[0.938rem] mt-[2.313rem]'>
                        <p>{aboutus_Internationalization}</p>
                        <a className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}`} href='#Services'><p>{services_Internationalization}</p></a>
                        <a className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}`} href='#UseCases'><p>{usecases_Internationalization}</p></a>
                    </div>

                    <div className=' bg-black text-white flex flex-col items-center justify-center  mt-[2.313rem]'>
                        <div className=' mb-[2.313rem] mt-[2.313rem] flex justify-center items-center h-[1.625rem] w-[7.875rem] bg-[#B9FF66] border-[#B9FF66] border-2 rounded-[10px] text-[2.5rem] font-[500]'>
                            <p className='text-[1.25rem] text-black'>{title_Internationalization}</p>
                        </div>
                        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white mb-[0.9385rem]`}>{email_Internationalization}: info@positivus.com</p>
                        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white mb-[0.9385rem]`}>{phone_Internationalization}: 555-567-8901</p>
                        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white`}>{address_Internationalization}: 1234 Main St</p>
                        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} text-white`}>Moonstone City, Stardust State 12345</p>

                    </div>


                    <div className='mt-[2.313rem] mb-[2.313rem]   gap-[1.25rem] p-[2.5rem] bg-[#292A32] min-w-[70%] min-h-[70%]  rounded-[14px] flex flex-col items-center justify-center'>
                        <div class="FootInput-group">
                            <input required="" type="text" name="text" autocomplete="off" class="FootInput" />
                            <label class="user-label">{email_Internationalization}</label>
                        </div>
                        <div className='bg-[#B9FF66] rounded-[14px] h-[4.188rem] flex justify-center items-center pr-[2.188rem] pl-[2.188rem]'><p>{Btm_Internationalization}</p></div>
                    </div>

                    <div className='gap-[1.25rem] bg-black flex justify-end items-center'>
                        <img src='/Linkedin.svg'></img>
                        <img src='/facebook.svg' ></img>
                        <img src='/tweeter.svg'></img>


                    </div>
                    <div className='   text-white bg-black border-t-2 border-white bg-black flex  justify-center gap-5 items-center pt-[2.313rem] mt-5 mb-5'>
                        <p className='font-[400]'>© 2023 Positivus. All Rights Reserved.</p>
                        <p className='underline font-[400]'>Privacy Policy</p>
                       
                        
                    </div>
                    <div className={'flex flex-row text-center gap-5 '}>
                        <div className='flex flex-row mr-[1rem]'>
                            <a href={'/en'} className='text-white '>English</a>
                            <a href={'/ar'} className=' text-white ml-5'> العربيه</a>
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
    const DarkMode = () => (
        <>
            <div className=' hidden lg:flex    bg-black rounded-tl-[45px] rounded-tr-[45px] flex flex-row justify-center items-center min-w-screen min-h-[28.125rem] mt-[4rem]'>

                <div className=' ml-[15%] mr-[15%]  bg-white rounded-tl-[45px] rounded-tr-[45px] grid grid-rows-[.5fr_1fr_.5fr]   min-w-[70%] min-h-[28.125rem] mt-[4rem]'>
                    <div className='grid grid-cols-[.3fr_1fr_.3fr]     pl-[3.75rem] pr-[3.75rem] bg-white text-black min-w-full rounded-tl-[45px] rounded-tr-[45px]  '>
                        <div className='bg-white flex justify-start items-center '>
                            <img src='/modifiedLogo.jpg'></img>
                        </div>
                        <div className='bg-white flex flex-row items-center justify-center gap-5'>



                            <p>{aboutus_Internationalization}</p>

                            <a href='#Services'><p>{services_Internationalization}</p></a>
                            <a href='#UseCases'><p>{usecases_Internationalization}</p></a>
                        </div>
                        <div className='gap-[1.25rem] bg-white flex justify-end items-center'>
                            <img src='/Linkedin.svg' className='invert'></img>
                            <img src='/facebook.svg' className='invert'></img>
                            <img src='/tweeter.svg' className='invert'></img>


                        </div>
                    </div>
                    <div className='bg-white grid grid-cols-[1fr_1fr] pl-[3.75rem] pr-[3.75rem] gap-5'>
                        <div className='bg-white flex justify-start item-center flex-col '>
                            <div className={`w-[100%] flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} `}>
                                <div className=' mb-[1.688rem] border-2 flex justify-center items-center h-[1.625rem] w-[7.875rem] bg-[#B9FF66] border-[#B9FF66] border-2 rounded-[10px] text-[2.5rem] font-[500]'>
                                    <p className='text-[1.25rem] text-black'>{title_Internationalization}</p>
                                </div>
                            </div>

                            <p className={`flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} text-black mb-[1.25rem]`}><span className='m-1'>{email_Internationalization}</span> <span className='m-1'>info@positivus.com</span></p>
                            <p className={`flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} text-black mb-[1.25rem]`}><span className='m-1'>{phone_Internationalization}</span> <span className='m-1'>555-567-8901</span></p>
                            <p className={`flex ${lang == 'en' ? 'flex-row ' : 'flex-row-reverse '} text-black mb-[1.25rem]`}><span className='m-1'>{address_Internationalization}</span> <span className='m-1'>1234 Main St Moonstone City, Stardust State 12345</span></p>

                        </div>
                        <div className='bg-white flex justify-center items-center'>

                            <div className='pl-[2.5rem] gap-[1.25rem] pr-[2.5rem] bg-[#292A32] min-w-[100%] min-h-[70%]  rounded-[14px] flex flex-row items-center justify-center'>
                                <div class="FootInput-group">
                                    <input required="" type="text" name="text" autocomplete="off" class="FootInput" />
                                    <label class="user-label">{email_Internationalization}</label>
                                </div>
                                <div className='cursor-pointer bg-[#B9FF66] rounded-[14px] h-[4.188rem] flex justify-center items-center pr-[2.188rem] pl-[2.188rem]'><p>{Btm_Internationalization}</p></div>
                            </div>
                        </div>

                    </div>
                    <div className='   text-black bg-white border-t-2 border-white bg-black flex  justify-start gap-5 items-center pl-[3.75rem]'>
                        <p className='font-[400]'>© 2023 Positivus. All Rights Reserved.</p>
                        <p className='underline font-[400]'>Privacy Policy</p>
                        <div className={'flex flex-row text-center gap-5 ml-auto'}>
                            <div className='flex flex-row mr-[1rem]'>
                                <a href={'/en'}  className=' '>English</a>
                                <a href={'/ar'} className=' ml-5'> العربيه</a>
                            </div>

                        </div>

                    </div>
                  
                </div>

            </div>




            {/* in small screen */}
            <div className=' visible lg:hidden bg-black rounded-tl-[45px] rounded-tr-[45px] flex flex-row justify-center items-center min-w-screen min-h-[28.125rem] mt-[4rem]'>

                <div className=' bg-white rounded-tl-[45px] rounded-tr-[45px] flex flex-col justify-start pt-8 items-center   min-w-[93%] min-h-[28.125rem] mt-[4rem]'>
                    <div className='bg-white flex justify-start items-center '>
                        <img src='/modifiedLogo.jpg'></img>
                    </div>
                    <div className='bg-white text-black flex flex-col items-center justify-center gap-[0.938rem] mt-[2.313rem]'>
                        <p>{aboutus_Internationalization}</p>
                        <a href='#Services'><p>{services_Internationalization}</p></a>
                        <a href='#UseCases'><p>{usecases_Internationalization}</p></a>
                    </div>

                    <div className=' bg-white text-black flex flex-col items-center justify-center  mt-[2.313rem]'>
                        <div className=' mb-[2.313rem] mt-[2.313rem] flex justify-center items-center h-[1.625rem] w-[7.875rem] bg-[#B9FF66] border-[#B9FF66] border-2 rounded-[10px] text-[2.5rem] font-[500]'>
                            <p className='text-[1.25rem] text-black'>{title_Internationalization}</p>
                        </div>
                        <p className=' text-black mb-[0.9385rem]'>{email_Internationalization}: info@positivus.com</p>
                        <p className=' text-black mb-[0.9385rem] '>{phone_Internationalization}: 555-567-8901</p>
                        <p className='text-black'>{address_Internationalization}: 1234 Main St</p>
                        <p className='text-black'>Moonstone City, Stardust State 12345</p>

                    </div>


                    <div className='mt-[2.313rem] mb-[2.313rem]   gap-[1.25rem] p-[2.5rem] bg-[#292A32] min-w-[70%] min-h-[70%]  rounded-[14px] flex flex-col items-center justify-center'>
                        <div class="FootInput-group">
                            <input required="" type="text" name="text" autocomplete="off" class="FootInput" />
                            <label class="user-label">{email_Internationalization}</label>
                        </div>
                        <div className='bg-[#B9FF66] rounded-[14px] h-[4.188rem] flex justify-center items-center pr-[2.188rem] pl-[2.188rem] cursor-pointer '><p>{Btm_Internationalization}</p></div>
                    </div>

                    <div className='gap-[1.25rem] bg-white flex justify-end items-center'>
                        <img src='/Linkedin.svg' className='invert' ></img>
                        <img src='/facebook.svg' className='invert'></img>
                        <img src='/tweeter.svg' className='invert'></img>


                    </div>
                    <div className='   text-black bg-white border-t-2 border-white bg-black flex  justify-center gap-5 items-center pt-[2.313rem] mt-5 mb-5'>
                        <p className='font-[400]'>© 2023 Positivus. All Rights Reserved.</p>
                        <p className='underline font-[400]'>Privacy Policy</p>
                    </div>
                    <div className={'flex flex-row text-center gap-5 '}>
                        <div className='flex flex-row mr-[1rem]'>
                            <a href={'/en'} className=' '>English</a>
                            <a href={'/ar'} className=' ml-5'> العربيه</a>
                        </div>

                    </div>
                </div>

            </div>



        </>
    )

  return (
      <>
          {Mode == 'light' ? <LightMode /> : <DarkMode />}


      </>
  )
}
