import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { BiMoviePlay } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (isOpen) {
      if (searchTerm.trim() !== '') {
        const queryString = new URLSearchParams({ searchTerm }).toString();
        navigate(`/search?${queryString}`);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='py-6 bg-[#2b3035]'>
      <div className='flex align-middle justify-between'>
        <Link to={'/'}>
          <div className='flex items-center'>
            <span className='mr-2'>
              <BiMoviePlay color='white' size={28} />
            </span>
            <h1 className='text-white text-3xl font-bold'>CineCrate</h1>
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(true)}
          className={`flex items-center text-white  px-3 rounded-md ${
            isOpen ? 'border-white border-[1px]' : 'cursor-pointer'
          }`}
        >
          <p className={isOpen ? 'border-r-[1px] pr-2 mr-2' : ''}>Search</p>
          <div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              onKeyDown={handleKeyPress}
              className={`bg-[#2b3035]  outline-none border border-transparent transition-all duration-200 ${
                isOpen ? 'w-[300px]' : 'w-0'
              }`}
              placeholder='Game of Thrones...'
              type='text'
            />
          </div>
          <div onClick={handleSearch} className='ml-2 cursor-pointer'>
            <IoSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
