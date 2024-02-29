import React, { useState } from 'react';
import MovieCard from '../cards/MovieCard';

const BookmarkPage = ({ bookmarkData }) => {
  const [activeTab, setActiveTab] = useState('movie');

  return (
    <div className='mx-10 mt-14'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className='flex flex-wrap '>
        {bookmarkData &&
          Object.values(bookmarkData).map((item) => {
            if (activeTab !== item?.Type) return null;
            return (
              <div
                key={item?.imdbID}
                className='w-1/4 mb-10 flex justify-center'
              >
                <MovieCard item={item} />
              </div>
            );
          })}
      </div>
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
    <div className='mb-14 flex justify-center text-white'>
      <div className='relative  rounded-lg bg-[#3d434f]'>
        <div className='flex items-center'>
          <div
            id='movie'
            className={`w-[160px] h-[60px] flex justify-center items-center tab cursor-pointer z-20 ${
              activeTab === 'movie' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('movie')}
          >
            Movies
          </div>
          <div
            id='series'
            className={`w-[160px] h-[60px] flex justify-center items-center tab cursor-pointer z-20 ${
              activeTab === 'series' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('series')}
          >
            Series
          </div>
        </div>
        <div
          className='bg-[#282c34] w-[150px] h-[50px] absolute top-0 right-0 left-0 transition-all duration-300 rounded-lg m-[5px]'
          style={{ left: `${getIndicatorPosition()}px` }}
        />
      </div>
    </div>
  );
};

export default BookmarkPage;
