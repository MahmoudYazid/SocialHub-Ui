import React from 'react'
import ServiceBoxes from './serviceBoxes'
import ServiceTitle from './serviceTitle'
import { Space_Grotesk } from 'next/font/google'
const GeneralFont = Space_Grotesk({
  subsets: ['latin']
})
export default function services() {
  return (
    <div id="Services" className={`${GeneralFont.className} grid grid-rows-[.1fr_1fr] min-w-screen min-h-[71.313rem] mt-[7.125rem]`}>


          <ServiceTitle></ServiceTitle>
              <ServiceBoxes></ServiceBoxes>
    
      
    </div>
  )
}
