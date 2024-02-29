/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../cards/MovieCard';

const SearchedPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('searchTerm');
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [searchedData, setSearchedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);

  const fetchData = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&page=2&apikey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSearchedData(data);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
      return null;
    }
  };

  return (
    <div className='mx-10'>
      <p className='text-white mb-6 ml-8'>
        {!loading && `Search results for "${searchTerm}"`}
      </p>
      {!loading ? (
        <div className='flex flex-wrap '>
          {searchedData &&
            searchedData.Search &&
            searchedData.Search.map((item) => {
              return (
                <div
                  key={item?.imdbID}
                  className='w-1/4 mb-10 flex justify-center'
                >
                  <MovieCard item={item} />
                </div>
              );
            })}
        </div>
      ) : (
        <div className='flex flex-wrap'>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
            return (
              <div key={item} className='w-1/4 mb-10 flex justify-center'>
                <div className='w-[270px] h-[400px] animate-pulse bg-gray-300' />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchedPage;
