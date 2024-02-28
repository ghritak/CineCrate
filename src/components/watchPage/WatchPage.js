import React from 'react';
import './watch.css';
import Lottie from 'lottie-react';
import Loader from '../../assets/loader.json';
import { IoPauseSharp } from 'react-icons/io5';
import { MdSkipNext } from 'react-icons/md';
import { ImVolumeMedium } from 'react-icons/im';
import { FaCompress } from 'react-icons/fa6';

const WatchPage = () => {
  return (
    <div className='absolute inset-0 bg-black'>
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='w-80 h-80 rotate'>
          <LoaderComponent />
        </div>
      </div>
      <div className='absolute bottom-16 h-2 w-screen '>
        <div className='bg-gray-500 h-1 mx-10 rounded-lg z-0' />
        <div className='mx-10 mt-4 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <span className='cursor-pointer'>
              <IoPauseSharp color='white' size={28} />
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
  return (
    <Lottie
      animationData={Loader}
      //   isClickToPauseDisabled={true}
      loop={true}
      size={40}
    />
  );
};

export default WatchPage;
