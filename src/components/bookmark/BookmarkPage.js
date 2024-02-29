import React, { useState } from 'react';
import MovieCard from '../cards/MovieCard';

const BookmarkPage = ({ bookmarkData }) => {
  const [activeTab, setActiveTab] = useState('movie');

  return (
    <div className='mt-10 lg:mt-14 text-white'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {Object.values(bookmarkData).find((item) => item?.Type === activeTab) ? (
        <div className='flex flex-wrap '>
          {bookmarkData &&
            Object.values(bookmarkData).map((item) => {
              if (activeTab !== item?.Type) return null;
              return (
                <div
                  key={item?.imdbID}
                  className='w-1/2 xxs:w-1/3 xl:w-1/4 mb-10 flex justify-center'
                >
                  <MovieCard item={item} />
                </div>
              );
            })}
        </div>
      ) : (
        <div className='h-[400px] flex items-center justify-center'>
          There is no {activeTab} bookmarked
        </div>
      )}
    </div>
  );
};

const Tabs = ({ activeTab, setActiveTab }) => {
  const getIndicatorPosition = () => {
    const tab = document.getElementById(activeTab);
    if (tab) {
      return tab.offsetLeft;
    }
    return 0;
  };

  return (
    <div className='mb-10 lg:mb-14 flex justify-center text-white'>
      <div className='relative  rounded-lg bg-[#3d434f]'>
        <div className='flex items-center'>
          <div
            id='movie'
            className={`w-[50px] xs:w-[80px] md:w-[110px] lg:w-[160px] h-[30px] xs:h-[40px] md:h-[50px] lg:h-[60px] text-xxs sm:text-sm md:text-md flex justify-center items-center tab cursor-pointer z-20 ${
              activeTab === 'movie' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('movie')}
          >
            Movies
          </div>
          <div
            id='series'
            className={`w-[50px] xs:w-[80px] md:w-[110px] lg:w-[160px] h-[30px] xs:h-[40px] md:h-[50px] lg:h-[60px] text-xxs sm:text-sm md:text-md flex justify-center items-center tab cursor-pointer z-20 ${
              activeTab === 'series' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('series')}
          >
            Series
          </div>
        </div>
        <div
          // className='bg-[#282c34] w-[44px] xs:w-[70px] md:w-[100px] lg:w-[150px] h-[24px] xs:h-[30px] md:h-[40px] lg:h-[50px] absolute -top-[2px] xs:top-0 transition-all duration-300 rounded-lg m-[5px]'
          className='bg-[#282c34] w-[40px] xs:w-[70px] md:w-[100px] lg:w-[150px] h-[20px] xs:h-[30px] md:h-[40px] lg:h-[50px] absolute top-0 transition-all duration-300 rounded-lg m-[5px]'
          style={{ left: `${getIndicatorPosition()}px` }}
        />
      </div>
    </div>
  );
};

export default BookmarkPage;
