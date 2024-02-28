import React from 'react';

const Heading = ({ text, showLine = true }) => {
  return (
    <div className='flex items-center'>
      {showLine && <div className='w-1 h-8 mr-4 bg-white' />}
      <div className='my-6 text-4xl text-white font-bold'>{text}</div>
    </div>
  );
};

export default Heading;
