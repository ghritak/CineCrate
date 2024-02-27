import React from 'react';
import PopularMovieSection from './Sections/PopularMovieSection';
import PopularSeriesSection from './Sections/PopularSeriesSection';

const Home = () => {
  return (
    <div className='mx-10'>
      <PopularMovieSection />
      <PopularSeriesSection />
    </div>
  );
};

export default Home;
