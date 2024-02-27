import React from 'react';

const SubHeading = ({ text }) => {
  return (
    <div className='my-1 text-2xl text-white font-bold overflow-hidden overflow-ellipsis line-clamp-2'>
      {text}
    </div>
  );
};

export default SubHeading;
