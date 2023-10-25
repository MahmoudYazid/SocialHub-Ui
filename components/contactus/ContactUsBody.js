import React from 'react'
import Rightside from './rightside'
import Leftside from './leftside'
export default function ContactUsBody() {
  return (
    <div className=' lg:ml-[15%] lg:mr-[15%] mt-[6.25rem] grid grid-cols-[1fr] xl:grid-cols-[1fr_1fr] min-h-[40rem] max-w-screen'>
          <Leftside/>
          <Rightside></Rightside>
      </div>
  )
}
