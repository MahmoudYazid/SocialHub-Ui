import React, { useEffect } from 'react';
import { Cairo } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import { FormattedMessage, useIntl } from "react-intl";

const CairoFont = Cairo({
  subsets: ['latin']
})
const GeneralFont = Space_Grotesk({
  subsets: ['latin']
})
const SwiperComponent = () => {
  const intl = useIntl();

  const lang = intl.formatMessage({ id: "lang" });

  const Card=()=>(
    <div className='flex flex-col min-h-[100%] lg:min-w-[30rem] '>
      <div className={' flex flex-row justify-center items-center text-center min-h-[12rem] lg:min-w-[30rem] border-2 border-[#B9FF66] rounded-[45px] bg-[#191A23] text-white'}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias, ipsa deserunt quo aliquid fugit facere aliquam vero mollitia quidem eius consequatur id distinctio laudantium dolore aperiam fugiat tempore ducimus?</p> </div>
      <div className={'  bg-[#191A23] min-h-[2rem]  w-[2rem] border-2 border-r-[#B9FF66] border-b-[#B9FF66]  border-l-[#191A23] border-t-[#191A23] rotate-[45deg] ml-10 relative bottom-[1.1rem]'}><p></p> </div>
      <div className='flex flex-col '>
        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}  text-[#B9FF66] text-[1.125rem] ml-5 `}>mahmoud Smith</p>
        <p className={`${lang == 'en' ? GeneralFont.className : CairoFont.className}  text-white text-[1.125rem] ml-5 `}>Marketing Director at XYZ Corp</p>
      </div>

    </div>
  )
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div class="swiper rounded-[45px] w-[90vw] lg:w-[70vw] mySwiper flex flex-cols gap-5">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Card></Card>
        </div>
        <div class="swiper-slide">

          <Card></Card>

        </div>
        <div class="swiper-slide">
  
          <Card></Card>
  
        </div>
        
      </div>
      <div class="swiper-pagination bg-white"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  
   
  );
};

export default SwiperComponent;