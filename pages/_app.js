import '@/styles/globals.css'
import '@/styles/inputStyle.css'
import '@/styles/learnMore.css'
import '@/styles/BookCons.css'
import '@/styles/requestQuote.css'
import '@/styles/toggelswitch.css'
import '@/styles/coverflow.css'
import '@/styles/slider.css'

import '@/styles/requestQuoteDm.css'
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

import en from "../lang/en.json";
import ar from "../lang/ar.json";

import { store } from '../Store/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
export default function App({ Component, pageProps }) {
  const messages = {
    en: require('../lang/en.json'),
    ar: require('../lang/ar.json'),
  };
  const { locale } = useRouter();
  useEffect(()=>{
    console.log(locale)
  })
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>

    <Provider store={store}>
    <Component {...pageProps} />
     
    </Provider>
    </IntlProvider>
  )
}
