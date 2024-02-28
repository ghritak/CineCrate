import React, { useEffect, useRef, useState } from 'react';
import './watch.css';
import Lottie from 'lottie-react';
import Loader from '../../assets/loader.json';
import Movie from '../../assets/movie.json';
import { IoPauseSharp, IoPlaySharp } from 'react-icons/io5';
import { MdSkipNext } from 'react-icons/md';
import { ImVolumeMedium } from 'react-icons/im';
import { FaCompress } from 'react-icons/fa6';
import Heading from '../elements/Heading';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

const WatchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieName = queryParams.get('movie');
  const [isLoading, setLoading] = useState(true);
  const [isPlaying, setPlaying] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [isPaused, setPaused] = useState(false);
  const movieRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setPlaying(true);
      setShowButtons(false);
    }, 1000);
  }, []);

  const handleMouseMove = () => {
    setShowButtons(true);
    setTimeout(() => {
      setShowButtons(false);
    }, 5000);
  };

  return (
    <div onMouseMove={handleMouseMove} className='absolute inset-0 bg-black'>
      <div
        className={`absolute z-40 top-3 left-8 w-screen flex items-center transition-opacity duration-300 ${
          showButtons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div onClick={() => navigate(-1)} className='cursor-pointer mr-6'>
          <IoIosArrowBack size={36} color='white' />
        </div>
        <Heading text={movieName} showLine={false} />
      </div>
      <div
        className={`w-screen h-screen flex items-center justify-center ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
      >
        {isLoading && (
          <div className='w-60 h-60 rotate'>
            <LoaderComponent />
          </div>
        )}
      </div>

      <div
        className={`absolute top-0 w-screen h-screen flex items-center justify-center bg-gray-600 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
      >
        <div className=''>
          <MovieComponent isLoading={isLoading} movieRef={movieRef} />
        </div>
      </div>

      <div
        className={`absolute bottom-14 h-2 w-screen transition-opacity duration-300 ${
          showButtons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='bg-gray-500 h-1 mx-10 rounded-lg z-0' />
        <div className='mx-10 mt-3 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <span
              onClick={() => setLoading(!isLoading)}
              className='cursor-pointer'
            >
              {isLoading ? (
                <IoPauseSharp color='white' size={28} />
              ) : (
                <IoPlaySharp color='white' size={28} />
              )}
            </span>
            <span className='cursor-pointer'>
              <MdSkipNext color='white' size={32} />
            </span>
            <span className='cursor-pointer'>
              <ImVolumeMedium color='white' size={24} />
            </span>
          </div>
          <span className='cursor-pointer'>
            <FaCompress color='white' size={24} />
          </span>
        </div>
      </div>
    </div>
  );
};

const LoaderComponent = () => {
  return <Lottie animationData={Loader} loop={true} />;
};

const MovieComponent = ({ isLoading, movieRef }) => {
  //   useEffect(() => {
  //     if (!isLoading) {
  //       movieRef.pause();
  //     }
  //   }, [isLoading]);

  return <Lottie ref={movieRef} animationData={Movie} loop={isLoading} />;
};

export default WatchPage;
