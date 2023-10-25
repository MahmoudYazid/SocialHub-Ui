import React from 'react'
import  ProcessTitle from './processTitle'
import ProcessBody from './processBody'
export default function process() {
  return (
      <div className=' grid grid-rows-[.1fr_.5fr] min-w-screen min-h-[55rem] mt-[1rem]'>


          <ProcessTitle></ProcessTitle>
      <ProcessBody></ProcessBody>

      </div>
  )
}
