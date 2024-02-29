import React from 'react';

const SubHeading = ({ text, line1, line2 }) => {
  return (
    <div
      className={`my-1 text-xs sm:text-sm md:text-lg lg:text-2xl text-white font-bold overflow-hidden overflow-ellipsis ${
        line1 ? 'line-clamp-1' : line2 ? 'line-clamp-2' : ''
      }`}
    >
      {text}
    </div>
  );
};

export default SubHeading;
