
import React, { useState } from 'react'
import  LearnMoreBody  from '../../components/LearnMore/learnMoreBody'
import  LearnMoreFooter  from '../../components/LearnMore/LearnMoreFooter'
import LearnMoreIndex  from '../../components/LearnMore/LearnMoreIndex'


export default function learnmore() {
    
  return (
      <div className='LoadingPageBg min-w-screen min-h-screen  grid grid-rows-[.2fr_1fr_.2fr] '>
      <div className='w-[100%] h-[100%]'>
         <LearnMoreIndex></LearnMoreIndex>
      </div>
          <LearnMoreBody></LearnMoreBody>
          <LearnMoreFooter></LearnMoreFooter>
    </div>
  )
}
