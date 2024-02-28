import React from 'react';

const Button = ({ title = 'Click me', onPress }) => {
  return (
    <div
      onClick={onPress}
      className='bg-[#3a404d] w-40 justify-center flex py-3 rounded-md hover:bg-[#525969] transition-all duration-200 cursor-pointer'
    >
      {title}
    </div>
  );
};

export default Button;
