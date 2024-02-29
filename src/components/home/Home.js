import React from 'react';
import PopularMovieSection from './Sections/PopularMovieSection';
import PopularSeriesSection from './Sections/PopularSeriesSection';

const Home = () => {
  return (
    <div>
      <div className='mt-4 sm:mt-8 md:mt-12 lg:mt-16'>
        <PopularMovieSection />
      </div>
      <div className='mt-4 sm:mt-8 md:mt-12 lg:mt-16'>
        <PopularSeriesSection />
      </div>
    </div>
  );
};

export default Home;
