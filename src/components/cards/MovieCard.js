import React from 'react';
import SubHeading from '../elements/SubHeading';
import { FaStar } from 'react-icons/fa6';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const id = item?.imdbID;
  const queryString = new URLSearchParams({ id }).toString();

  return (
    <div className='text-white'>
      <div
        onClick={() => navigate(`/movie?${queryString}`)}
        className='cursor-pointer hover:scale-[98%] transition-all duration-300 group w-[100px] xxs:w-[110px] xs:w-[120px] sm:w-[160px] md:w-[220px] lg:w-[270px]'
      >
        <div className='relative'>
          {item?.Poster !== 'N/A' ? (
            <img
              src={item?.Poster}
              alt={'Movie Poster'}
              className='w-[100px] h-[150px] xxs:w-[110px] xxs:h-[170px] xs:w-[120px] xs:h-[170px] sm:w-[160px] sm:h-[240px] md:w-[220px] md:h-[330px] lg:w-[270px] lg:h-[390px]'
              loading='lazy'
            />
          ) : (
            <div className='bg-gray-300 w-[100px] h-[150px] xxs:w-[110px] xxs:h-[170px] xs:w-[120px] xs:h-[170px] sm:w-[160px] sm:h-[240px] md:w-[220px] md:h-[330px] lg:w-[270px] lg:h-[390px] animate-pulse' />
          )}
          <div className='absolute w-[100px] h-[150px] xxs:w-[110px] xxs:h-[170px] xs:w-[120px] xs:h-[170px] sm:w-[160px] sm:h-[240px] md:w-[220px] md:h-[330px] lg:w-[270px] lg:h-[390px] bg-black bg-opacity-50 top-0 opacity-0 group-hover:opacity-100 justify-center items-center flex transition-opacity ease-in-out duration-500'>
            <IoPlayCircleOutline
              color='white'
              className='w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28'
            />
          </div>
        </div>
        <div className='mt-2'>
          <span className='line-clamp-1'>
            <SubHeading text={item?.Title} line1 />
          </span>
          {item.imdbRating && (
            <div className='flex items-center mb-1'>
              <p className='font-semibold text-xs md:text-sm lg:text-md'>
                IMDB Rating {item?.imdbRating}
              </p>
              <span className='ml-1 mb-[2px] text-xs md:text-sm lg:text-md'>
                <FaStar color='#DCC204' />
              </span>
            </div>
          )}
          <p className='line-clamp-2 text-xxs sm:text-xs md:text-sm'>
            {item?.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
