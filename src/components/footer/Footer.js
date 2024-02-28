import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-4 mx-10 mb-10 mt-20'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-sm'>&copy; 2024 CineCrate</div>
          <div className='text-sm'>
            Developed by <span className='font-bold'>Ghritak Jyoti Kalita</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
