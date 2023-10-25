import React from 'react'
import TestimonialsTitle from './TestimonialsTitle'
import TestimonialsBody from './TestimonialsBody'
export default function Testimonials() {
  return (
      <div className=' grid grid-rows-[.1fr_.5fr] min-w-screen min-h-[44rem] mt-[1rem] gap-5 z-2'>


          <TestimonialsTitle></TestimonialsTitle>
      <TestimonialsBody ></TestimonialsBody>

      </div>
  )
}
