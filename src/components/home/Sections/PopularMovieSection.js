import React from 'react';
import Heading from '../../elements/Heading';
import MovieCard from '../../cards/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { popularMovies } from './data';
import { Link } from 'react-router-dom';
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
            <Link to='/movie'>
              <SwiperSlide key={item?.imdbID}>
                <MovieCard item={item} />
              </SwiperSlide>
            </Link>
          );
        })}
        ...
      </Swiper>
    </div>
  );
};

export default PopularMovieSection;
