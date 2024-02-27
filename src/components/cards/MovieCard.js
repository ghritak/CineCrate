import React from 'react';
import SubHeading from '../elements/SubHeading';
import { FaStar } from 'react-icons/fa6';
import { IoPlayCircleOutline } from 'react-icons/io5';

const MovieCard = ({ item }) => {
  return (
    <div className='text-white'>
      <div className='cursor-pointer hover:scale-[98%] transition-all duration-300 group w-[270px]'>
        <div className='relative'>
          {item?.Poster !== 'N/A' ? (
            <img
              src={item?.Poster}
              alt={'Movie Poster'}
              style={{ width: 270, height: 390 }}
              loading='lazy'
            />
          ) : (
            <div className='bg-gray-300 w-[270px] h-[390px] animate-pulse' />
          )}
          <div className='absolute w-[270px] h-[390px] bg-black bg-opacity-50 top-0 opacity-0 group-hover:opacity-100 justify-center items-center flex transition-opacity ease-in-out duration-500'>
            <IoPlayCircleOutline color='white' size={100} />
          </div>
        </div>
        <div className='mt-2'>
          <SubHeading text={item?.Title} />
          {item.imdbRating && (
            <div className='flex items-center mb-1'>
              <p className='font-semibold'>IMDB Rating {item?.imdbRating}</p>
              <span className='ml-1 mb-[2px]'>
                <FaStar color='#DCC204' />
              </span>
            </div>
          )}
          <p className='line-clamp-2'>{item?.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
