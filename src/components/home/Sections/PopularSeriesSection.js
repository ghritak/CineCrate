import React from 'react';
import Heading from '../../elements/Heading';
import MovieCard from '../../cards/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { popularSeries } from './data';
import { breakpoints } from './constants';

const PopularSeriesSection = () => {
  return (
    <div>
      <div className=''>
        <Heading text={'Popular Series'} />
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4.5}
        breakpoints={breakpoints}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        // autoplay={{
        //   delay: 4000,
        //   // disableOnInteraction: false,
        // }}
        // modules={[Autoplay]}
      >
        {popularSeries.map((item) => {
          return (
            <SwiperSlide key={item?.imdbID}>
              <MovieCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularSeriesSection;
