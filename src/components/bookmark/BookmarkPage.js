import React from 'react';
import MovieCard from '../cards/MovieCard';

const BookmarkPage = ({ bookmarkData }) => {
  return (
    <div className='mx-10 mt-20'>
      <div className='flex flex-wrap '>
        {bookmarkData &&
          Object.values(bookmarkData).map((item) => {
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

export default BookmarkPage;
