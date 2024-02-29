import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 mb-10 mt-20'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-xxs sm:text-sm md:text-sm'>
            &copy; 2024 CineCrate
          </div>
          <div className='text-xxs sm:text-sm md:text-sm'>
            Developed by <span className='font-bold'>Ghritak Jyoti Kalita</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
