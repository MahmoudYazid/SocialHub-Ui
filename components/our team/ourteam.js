import React from 'react'
import OurTeamTitle from './ourTeamTitle'
import OurTeamFooter from './ourTeamFooter'
import OurteamBody from './ourteamBody'
export default function Ourteam() {
  return (
      <div className=' grid grid-rows-[.1fr_1fr_.1fr] min-w-screen min-h-[50rem] min-mt-[7.125rem] '>

          <OurTeamTitle></OurTeamTitle>
          
          <OurteamBody></OurteamBody>
          <OurTeamFooter></OurTeamFooter>


      </div>
  )
}
