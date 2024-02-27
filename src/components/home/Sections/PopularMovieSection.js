import React from 'react';
import Heading from '../../elements/Heading';
import MovieCard from '../../cards/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { popularMovies } from './constans';

const PopularMovieSection = () => {
  return (
    <div className='mt-10'>
      <div className=''>
        <Heading text={'Popular Movies'} />
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4.5}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        // autoplay={{
        //   delay: 4000,
        //   // disableOnInteraction: false,
        // }}
        // modules={[Autoplay]}
      >
        {popularMovies.map((item) => {
          return (
            <SwiperSlide>
              <MovieCard item={item} />
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </div>
  );
};

export default PopularMovieSection;
