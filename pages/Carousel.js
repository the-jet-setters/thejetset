import React from 'react';
import Image from 'next/dist/client/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Parallax, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade"

function Carousel(props) {

     
      return (
            <div className='mx-auto h-2/4'>
            <Swiper
            className='mx-auto'
      modules={[Navigation, Pagination, A11y,Parallax, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect={'fade'}
      parallax
      autoplay
      autoHeight
      fadeEffect
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='w-full'>
      <Image 
      width={1920}
      height={1200}
      alt='?'
      
      src='https://images.unsplash.com/photo-1538330627166-33d1908c210d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'></Image>
      </SwiperSlide>
      <SwiperSlide>
      <Image 
      width={1920}
      height={1200}
      alt='?'
      
      src='https://images.unsplash.com/photo-1599566276129-97d70dfdda11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80'></Image>

      </SwiperSlide>
      <SwiperSlide>
      <Image 
      width={1920}
      height={1200}
      alt='?'
      
      src='https://images.unsplash.com/photo-1613041716824-8a2e091c3713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'></Image>

      </SwiperSlide>
      <SwiperSlide>
      <Image 
      width={1920}
      height={1200}
      alt='?'
      
      src='https://images.unsplash.com/photo-1560253034-1a9c043ffb28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80'></Image>

      </SwiperSlide>
     
    </Swiper>
                
            </div>
      );
}

export default Carousel;