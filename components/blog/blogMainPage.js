import React from 'react'
import BlogNavBar from './blogNavBar'
import Recent from './recent'
import Title from './title'
import Subtitle from './subtitle'
import AllPosts from './AllPosts'
import Footer from './footer'

export default function BlogMainPage() {
  return (
    <div className='	 bg-[#090D1F] flex flex-col min-w-[100%] min-h-screen '>
          <BlogNavBar></BlogNavBar>
          <Title></Title>
      
      <Subtitle SubTitle={"Recent blog posts"} ></Subtitle>
          <Recent></Recent>
      <Subtitle SubTitle={"All blog posts"} ></Subtitle>
      <AllPosts></AllPosts>
    </div>
  )
}
