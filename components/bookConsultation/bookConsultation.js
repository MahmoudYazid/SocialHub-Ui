import React from 'react'
import Rightside  from './rightside'
import Leftside from './leftside'
export default function bookConsultation() {
  return (
    <div className='  ml-[2.5rem] mr-[2.5rem] mt-[10.25rem] grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] min-h-[32.188rem] max-w-screen'>
      <Leftside></Leftside>
      <Rightside></Rightside>
    </div>
  )
}
