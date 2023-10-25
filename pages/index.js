import Navbar from '../components/Navbar'
import BookConsultation from '../components/bookConsultation/bookConsultation'
import LogotypesBar from '../components/LogotypesBar'
import Services from '../components/services/services'
import CtaCard from '../components/cta card/CtaCard'
import CaseStudy from '../components/case study/caseStudy'
import Process from '../components/our working process/process'
import Ourteam from '../components/our team/ourteam'
import Testimonials from '../components/Testimonials/Testimonials'
import Contactus from '../components/contactus/contactus'
import Footer from '../components/footer/footer'
import { Space_Grotesk } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'

const GeneralFont = Space_Grotesk({
  subsets: ['latin']
})
export default function Home() {
  const Mode = useSelector((state) => state.ModeSlicerReducer.mode)
  const LightMode = () => (
    <main className={`${GeneralFont.className} flex flex-col  min-w-[100%] bg-white min-h-screen   `}>
      <header>
        <title>Positivus</title>

        <link rel="alternate" href="http://localhost:3000/" hrefLang="en" />
        <link rel="alternate" href="http://localhost:3000/ar" hrefLang="ar" />

      </header>
      <Navbar></Navbar>
      <BookConsultation></BookConsultation>

      <LogotypesBar></LogotypesBar>
      <Services></Services>
      <CtaCard></CtaCard>
      <CaseStudy></CaseStudy>
      <Process></Process>
      <Ourteam></Ourteam>
      <Testimonials></Testimonials>
      <Contactus></Contactus>
      <Footer></Footer>
    </main>
  )
  const DarkMode = () => (
    <main className={`${GeneralFont.className} flex flex-col  min-w-[100%] bg-black min-h-screen   `}>
      <header>
        <title>Positivus</title>
      </header>
      <Navbar></Navbar>
      <BookConsultation></BookConsultation>

      <LogotypesBar></LogotypesBar>
      <Services></Services>
      <CtaCard></CtaCard>
      <CaseStudy></CaseStudy>
      <Process></Process>
      <Ourteam></Ourteam>
      <Testimonials></Testimonials>
      <Contactus></Contactus>
      <Footer></Footer>
    </main>
  )
  return (
  

     <>
      {Mode == 'light' ? <LightMode /> : <DarkMode />}


    </>
  )
}
