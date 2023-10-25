import React, { useState } from 'react'
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
export default function leftside() {
    const { locales } = useRouter();
    const intl = useIntl();
    const checkbox1 = intl.formatMessage({ id: "page.teams.contactus.form.checkbox1" });
    const checkbox2 = intl.formatMessage({ id: "page.teams.contactus.form.checkbox2" });

    const nameinput = intl.formatMessage({ id: "page.teams.contactus.form.nameinput" });
    const emailInput = intl.formatMessage({ id: "page.teams.contactus.form.emailInput" });

    const MsgInput = intl.formatMessage({ id: "page.teams.contactus.form.MsgInput" });
    const btm = intl.formatMessage({ id: "page.teams.contactus.form.Btm" });
    const lang = intl.formatMessage({ id: "lang" });



    const [CheckedId, SetCheckedId] = useState('')
    const ChangeResources = (name)=>{
        SetCheckedId(name)
    }
  return (
      <div className=' rounded-[45px] ml-5 mr-5 lg:ml-0 lg:mr-0 lg:rounded-[0px] lg:rounded-tl-[45px] lg:rounded-bl-[45px] flex flex-col justify-start items-center bg-[#F3F3F3]'>
          <section className='mt-[3.75rem] flex flex-row justify-start gap-[2.188rem] item-center   min-w-[70%]'>
              <div className='flex flex-row gap-2'>
                  <label class="checkbox">
                      <input type="checkbox" onChange={() => ChangeResources('sayhi')} checked={CheckedId =='sayhi'? 1 : 0 } />
                          <div class="checkbox-circle">
                              <svg viewBox="0 0 52 52" class="checkmark">
                                  <circle fill="none" r="25" cy="26" cx="26" class="checkmark-circle"></circle>
                                  <path d="M16 26l9.2 8.4 17.4-21.4" class="checkmark-kick"></path>
                              </svg>
                          </div>
                  </label>
                  <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} font-[400]`}>{checkbox1}</p>
              </div>
            
              <div className='flex flex-row gap-1 '>
                  <label class="checkbox k">
                      <input type="checkbox" onChange={() => ChangeResources('GetQote')} checked={CheckedId == 'GetQote' ? 1 : 0} />
                      <div class="checkbox-circle">
                          <svg viewBox="0 0 52 52" class="checkmark">
                              <circle fill="none" r="25" cy="26" cx="26" class="checkmark-circle"></circle>
                              <path d="M16 26l9.2 8.4 17.4-21.4" class="checkmark-kick"></path>
                          </svg>
                      </div>
                  </label>                 
                  <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} ${lang == 'en' ? GeneralFont.className : CairoFont.className} font-[400]`}>{checkbox2}</p>
              </div>
        </section>

          <section className='flex flex-col justify-start items-start  w-[70%] mt-[2.5rem]'>
              <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} ml-[.5rem]`}>{nameinput}</p>
              <input type='text' className=' border-2 border-black px-4 py-2 placeholder-gray-500 min-w-[90%] min-h-[3.688rem] rounded-[14px] bg-white TextInput' placeholder={nameinput}></input>
        </section>
          <section className='flex flex-col justify-start items-start  w-[70%] mt-[1.563rem]'>
              <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} ml-[.5rem]`}>{emailInput}</p>
              <input type='text' className=' border-2 border-black px-4 py-2 placeholder-gray-500 min-w-[90%] min-h-[3.688rem] rounded-[14px] bg-white TextInput' placeholder={emailInput}></input>
          </section>
          <section className=' flex flex-col justify-start items-start  w-[70%] mt-[1.563rem]'>
              <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} ml-[.5rem]`}>{MsgInput}</p>
              <textarea className=' border-2 border-black px-4 py-2 placeholder-gray-500 min-w-[90%] min-h-[11.875rem] rounded-[14px] bg-white TextInput' placeholder={MsgInput}></textarea>
          </section>
          <section className=' flex flex-row justify-start items-center  w-[70%] mt-[1.563rem] '>

              <button class="BtmCons mb-3 min-w-[90%]  h-[4.25rem] ">   <p>{btm}</p>
              </button>
          </section>
    </div>
  )
}
