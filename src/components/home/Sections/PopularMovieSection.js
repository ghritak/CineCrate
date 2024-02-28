import React from 'react';
import Heading from '../../elements/Heading';
import MovieCard from '../../cards/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { popularMovies } from './data';
import { breakpoints } from './constants';

const PopularMovieSection = () => {
  return (
    <div className='mt-10'>
      <div className=''>
        <Heading text={'Popular Movies'} />
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4.5}
        breakpoints={breakpoints}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        {popularMovies.map((item) => {
          return (
            <SwiperSlide key={item?.imdbID}>
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
