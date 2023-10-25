import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { FormattedMessage, useIntl } from "react-intl";
import { Cairo } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
const CairoFont = Cairo({
    subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
    subsets: ['latin']
})
export default function learnMoreBody() {
    const router = useRouter();
    const { id } = router.query;
    const { locales } = useRouter();
    const intl = useIntl();
    const lang = intl.formatMessage({ id: "lang" });


    const DigitalMarketing_Internationalization_title = intl.formatMessage({ id: "page.learnmore.DigitalMarketing.title" });
    const DigitalMarketing_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.DigitalMarketing.desc" });

    const SearchEngineOptimization_Internationalization_title = intl.formatMessage({ id: "page.learnmore.SearchEngineOptimization.title" });
    const SearchEngineOptimization_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.SearchEngineOptimization.desc" });

    const PayPerClickAdvertising_Internationalization_title = intl.formatMessage({ id: "page.learnmore.PayPerClickAdvertising.title" });
    const PayPerClickAdvertising_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.PayPerClickAdvertising.desc" });


    const SocialMediaMarketing_Internationalization_title = intl.formatMessage({ id: "page.learnmore.SocialMediaMarketing.title" });
    const SocialMediaMarketing_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.SocialMediaMarketing.desc" });


    const EmailMarketing_Internationalization_title = intl.formatMessage({ id: "page.learnmore.EmailMarketing.title" });
    const EmailMarketing_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.EmailMarketing.desc" });


    const ContentCreation_Internationalization_title = intl.formatMessage({ id: "page.learnmore.ContentCreation.title" });
    const ContentCreation_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.ContentCreation.desc" });


    const AnalyticsAndTracking_Internationalization_title = intl.formatMessage({ id: "page.learnmore.AnalyticsAndTracking.title" });
    const AnalyticsAndTracking_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.AnalyticsAndTracking.desc" });

    const WebDevelopment_Internationalization_title = intl.formatMessage({ id: "page.learnmore.WebDevelopment.title" });
    const WebDevelopment_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.WebDevelopment.desc" });

    const MobileDevelopment_Internationalization_title = intl.formatMessage({ id: "page.learnmore.MobileDevelopment.title" });
    const MobileDevelopment_Internationalization_desc = intl.formatMessage({ id: "page.learnmore.MobileDevelopment.desc" });

    const [state, Setstate]= useState([
         {
            title: SearchEngineOptimization_Internationalization_title,
            key: 'SearchEngineOptimization',
            img: '/SeoDetails.jpg',
            desc:SearchEngineOptimization_Internationalization_desc
        },
        {
            title: PayPerClickAdvertising_Internationalization_title,
            key: 'PayPerClickAdvertising',
            img: '/PPCDetails.jpg',
            desc: PayPerClickAdvertising_Internationalization_desc
        },
        {
            title: SocialMediaMarketing_Internationalization_title,
            key: 'SocialMediaMarketing',
            img: '/SocialMediaDetails.jpg',
            desc:SocialMediaMarketing_Internationalization_desc
        },
        {
            title: EmailMarketing_Internationalization_title,
            key: 'EmailMarketing',
            img: '/EmailMarketingDetails.jpg',
            desc: EmailMarketing_Internationalization_desc
        },
        {
            title: ContentCreation_Internationalization_title,
            key: 'ContentCreation',
            img: '/contentCreationDetails.jpg',
            desc:ContentCreation_Internationalization_desc
        },
        {
            title: AnalyticsAndTracking_Internationalization_title,
            key: 'AnalyticsAndTracking',
            img: '/AnalyticsDetails.jpg',
            desc:AnalyticsAndTracking_Internationalization_desc
        },
        {
            title: WebDevelopment_Internationalization_title,
            key: 'WebDevelopment',
            img: '/WebsiteDetails.jpg',
            desc: WebDevelopment_Internationalization_desc
        },
        {
            title: MobileDevelopment_Internationalization_title,
            key: 'MobileDevelopment',
            img: '/SVG/Asset 1.svg',
            desc: MobileDevelopment_Internationalization_desc
        },
    ])
  return (

      <div className=' grid  grid-col-[1fr] lg:grid-cols-[1fr_1fr] lg:pl-[13%] '>
        {
              state.filter(data => data.key == id ).map((Fdata)=>(
                <>
                      <div className=' grid grid-rows-[.2fr_1fr]'>
                          <div className=' flex lg:justify-start items-center justify-center'>
                              <div className={`${lang == 'en' ? 'lg:text-start' : 'lg:text-end'} text-center  mt-5 w-[100%]`}>
                                  <mark className={`${lang == 'en' ? GeneralFont.className : CairoFont.className} bg-[#fbcbcc] text-[3.6419rem] font-[500] `} >{Fdata.title} </mark>
                              </div>
                          </div>
                          <div className=' flex lg:justify-start items-start justify-center  '>
                              <div className={`${lang == 'en' ? 'lg:text-start' : 'lg:text-end'}  text-center   mt-5 mb-5   `}>
                                  <p className={` ${lang == 'en' ? GeneralFont.className : CairoFont.className} text-[1.8rem] font-[400] `} >{Fdata.desc} </p>
                              </div>
                          </div>



                      </div>
                      <div className='  lg:flex  justify-center items-center'>
                          <img src={`${Fdata.img}`} className='w-[45rem] max-h-[100%]' />
                      </div>
                </>
              ))
        }


      </div>
  )
}
