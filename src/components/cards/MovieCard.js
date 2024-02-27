import React from 'react';
import SubHeading from '../elements/SubHeading';
import { FaStar } from 'react-icons/fa6';

const MovieCard = ({ item }) => {
  //   const poster =
  //     'https://i.pinimg.com/564x/72/f2/29/72f229badd98e1ad269d0260f5ef92fe.jpg';

  return (
    <div className='text-white'>
      <div className='cursor-pointer hover:scale-95 transition-all duration-300'>
        <div>
          <img
            src={item?.Poster}
            alt={'Movie Poster'}
            style={{ width: 270, height: 390 }}
            loading='lazy'
          />
        </div>
        <div className='mt-2'>
          <SubHeading text={item?.Title} />
          <div className='flex items-center mb-1'>
            <p className='font-semibold'>IMDB Rating {item?.imdbRating}</p>
            <span className='ml-1 mb-[2px]'>
              <FaStar color='#DCC204' />
            </span>
          </div>
          <p className='line-clamp-2'>{item?.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
