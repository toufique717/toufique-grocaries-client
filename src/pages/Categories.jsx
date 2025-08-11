 
 import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import image1 from "../assets/rice.jpg"
import image2 from "../assets/vegetables.jpg"
import image3 from "../assets/oils.jpg"
import image4 from "../assets/fish1.jpg"
import image5 from "../assets/fruits.jpg"
import image6 from "../assets/cosmetic.jpg"
import image7 from "../assets/chips.jpg"
import image8 from "../assets/cleaning.jpg"
import image9 from "../assets/beverege.jpg"
import image10 from "../assets/bakery.jpg"


const Categories = () => {
    return (
        <div className='py-4'>
 

            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>


            <div className="relative">
             <img src={image1} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
               Grains & Rice
             </p>
             </div>
 
         </SwiperSlide>



          <SwiperSlide>


            <div className="relative">
             <img src={image2} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
              Vegetables
             </p>
             </div>
 
         </SwiperSlide>


          <SwiperSlide>


            <div className="relative">
             <img src={image3} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
              Oils and Ghee 
             </p>
             </div>
 
         </SwiperSlide>



          <SwiperSlide>


            <div className="relative">
             <img src={image4} className="  object-cover " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
              Fish and meet
             </p>
             </div>
 
         </SwiperSlide>


         <SwiperSlide>


            <div className="relative">
             <img src={image5} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
               Fruits
             </p>
             </div>
 
         </SwiperSlide>




         <SwiperSlide>


            <div className="relative">
             <img src={image6} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
              Cosmetics
             </p>
             </div>
 
         </SwiperSlide>




         <SwiperSlide>


            <div className="relative">
             <img src={image7} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
              Desert
             </p>
             </div>
 
         </SwiperSlide>



         <SwiperSlide>


            <div className="relative">
             <img src={image8} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
              Cleaning
             </p>
             </div>
 
         </SwiperSlide>




         <SwiperSlide>


            <div className="relative">
             <img src={image9} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
              Coke Item
             </p>
             </div>
 
         </SwiperSlide>






         <SwiperSlide>


            <div className="relative">
             <img src={image10} className="w-full  " alt="Salad" />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-opacity-20 text-white font-bold   bg-black text-xl px-4 py-2">
              Bakery Item
             </p>
             </div>
 
         </SwiperSlide>
         
      </Swiper>
            
        </div>
    );
};

export default Categories;