import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { IoBookmarkOutline } from 'react-icons/io5';
import Logo from '../../assets/favicon.ico';

const NavBar = ({ bookmarkData }) => {
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
      <div className='align-middle justify-between flex'>
        <Link to={'/'}>
          <div className='flex items-center'>
            <span className='mr-2 text-lg sm:text-xl md:text-3xl'>
              <img src={Logo} alt='logo' className='w-7 md:w-10 rounded-lg' />
            </span>
            <h1 className='text-white text-lg sm:text-2xl md:text-3xl font-bold'>
              <span style={{ color: '#af1d4c' }}>Cine</span>
              <span className='text-gray-300'>Crate</span>
            </h1>
          </div>
        </Link>
        <div className='flex items-center text-white space-x-1 md:space-x-5'>
          <div
            onClick={() => setIsOpen(true)}
            className={`flex items-center h-7 md:h-9 px-2 md:px-3 rounded-md text-xs xs:text-sm md:text-md ${
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
                className={`bg-[#2b3035] outline-none border border-transparent transition-all duration-200 ${
                  isOpen
                    ? 'w-[80px] xs:w-[100px] sm:w-[160px] n:w-[300px]'
                    : 'w-0'
                }`}
                placeholder='Game of Thrones...'
                type='text'
              />
            </div>
            <div
              onClick={handleSearch}
              className='ml-2 cursor-pointer text-sm md:text-md'
            >
              <IoSearch />
            </div>
          </div>
          <div
            onClick={() => navigate('/bookmarks')}
            className='flex items-center space-x-2 cursor-pointer relative'
          >
            <p className='hidden md:block'>Bookmarks</p>
            <IoBookmarkOutline />
            <span className='absolute -top-2 -right-2 w-4 h-4 text-xs flex justify-center items-center rounded-full bg-red-400'>
              {Object.keys(bookmarkData).length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
