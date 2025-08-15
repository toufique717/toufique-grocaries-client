 import Sectiontitle from './Sectiontitle';
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
 

import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Tsestimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('revews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <section>
        <Sectiontitle 
          heading={'---What our client say---'}
          subheading={'TESTIMONIALS'}
        />
      </section>

      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center px-16 py-16'>
                <Rating style={{ maxWidth: 180 }} value={3} readOnly />
                <p className='text-4xl py-4'><FaQuoteLeft /></p>
                <p>{review.details}</p>
                <p className='pt-4 text-xl text-yellow-500'>{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Tsestimonial;
