import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='py-6 bg-[#2b3035]'>
      <div className='flex align-middle justify-between'>
        <div>
          <h1 className='text-white text-3xl font-bold'>CineCrate</h1>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className={`flex items-center text-white  px-3 rounded-md ${
            isOpen ? 'border-white border-[1px]' : 'cursor-pointer'
          }`}
        >
          <p className={isOpen ? 'border-r-[1px] pr-2 mr-2' : ''}>Search</p>
          <div>
            <input
              className={`bg-[#2b3035]  outline-none border border-transparent transition-all duration-200 ${
                isOpen ? 'w-[300px]' : 'w-0'
              }`}
              placeholder='Game of Thrones...'
              type='text'
            />
          </div>
          <div onClick={() => {}} className='ml-2 cursor-pointer'>
            <IoSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
