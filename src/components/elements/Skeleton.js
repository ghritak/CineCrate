import React from 'react';

const Skeleton = ({ w, h, para, h1, h2 }) => {
  if (para)
    return (
      <div
        style={{ width: w }}
        className='h-[14px] animate-pulse bg-gray-300 rounded-md'
      />
    );

  if (h1)
    return (
      <div
        style={{ width: w }}
        className='h-[40px] animate-pulse bg-gray-300 rounded-md'
      />
    );
  if (h2)
    return (
      <div
        style={{ width: w }}
        className='h-[26px] animate-pulse bg-gray-300 rounded-md'
      />
    );

  return (
    <div
      style={{ width: w, height: h }}
      className='animate-pulse bg-gray-300 rounded-md'
    />
  );
};

export default Skeleton;
