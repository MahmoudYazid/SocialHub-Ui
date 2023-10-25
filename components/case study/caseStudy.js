import React from 'react'
import CaseStudyTitle from './caseStudyTitle'
import CaseBody from './CaseBody'

export default function caseStudy() {
  return (
    <div id="UseCases" className='grid grid-rows-[.1fr_.5fr] min-w-screen min-h-[40rem] mt-[7.125rem]'>


          <CaseStudyTitle></CaseStudyTitle>
          <CaseBody></CaseBody>

      </div>
  )
}
