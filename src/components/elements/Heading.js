import React from 'react';

const Heading = ({ text, showLine = true }) => {
  return (
    <div className='flex items-center mb-2 sm:mb-4 lg:mb-6'>
      {showLine && (
        <div className='w-[1px] sm:w-0.5 md:w-1 h-3 sm:h-4 md:h-[1.2rem] lg:h-8 mr-2 xs:mr-4 bg-white' />
      )}
      <div className='text-sm sm:text-lg md:text-2xl lg:text-4xl text-white font-bold'>
        {text}
      </div>
    </div>
  );
};

export default Heading;
