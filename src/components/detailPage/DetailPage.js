/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaMastodon, FaStar } from 'react-icons/fa6';
import { BiMoviePlay } from 'react-icons/bi';
import { GiTomato } from 'react-icons/gi';
import Skeleton from '../elements/Skeleton';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import Button from '../elements/Button';
import NotFound from '../elements/NotFound';

const DetailPage = ({ bookmarkData, setBookmarkData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const movie_id = queryParams.get('id');
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const movie = movieData?.Title;
  const queryString = new URLSearchParams({ movie }).toString();

  useEffect(() => {
    localStorage.setItem('bookmarkData', JSON.stringify(bookmarkData));
  }, [bookmarkData]);

  useEffect(() => {
    fetchData(movie_id);
  }, [movie_id]);

  const fetchData = async (movie_id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${movie_id}&apikey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setMovieData(data);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const handleBookmark = () => {
    setBookmarkData((prevBookmarkData) => {
      const newBookmarkData = { ...prevBookmarkData };
      if (prevBookmarkData[movie_id]) {
        delete newBookmarkData[movie_id];
        console.log('Removed from bookmark');
      } else {
        newBookmarkData[movie_id] = movieData;
        console.log('Added to bookmark');
      }
      localStorage.setItem('bookmarkData', JSON.stringify(newBookmarkData));
      return newBookmarkData;
    });
  };

  if (loading) return <DetailSkeleton />;

  return (
    <div className='mt-10 lg:mt-20 flex flex-col align-middle justify-center text-white'>
      {movieData ? (
        <div className='sm:flex justify-between items-start'>
          <div className='sm:w-1/2 flex justify-center'>
            {movieData?.Poster !== 'N/A' ? (
              <img
                src={movieData?.Poster}
                alt={'Movie Poster'}
                className='rounded-md w-[260px] h-[340px] xs:w-[360px] xs:h-[530px] sm:w-[240px] sm:h-[330px]  md:w-[300px] md:h-[430px] lg:w-[360px] lg:h-[530px]'
                loading='lazy'
              />
            ) : (
              <div className='bg-gray-300 w-[180px] md:w-60 lg:w-[270px] h-[100px] md:h-[200px] lg:h-[390px] animate-pulse' />
            )}
          </div>
          <div className='sm:w-1/2 space-y-4 lg:pr-20 text-sm lg:text-md mt-6 sm:mt-0'>
            <div className='flex items-center space-x-4 text-lg md:text-xl lg:text-3xl'>
              <h1 className=' font-extrabold'>{movieData?.Title}</h1>
              <div
                onClick={handleBookmark}
                className='cursor-pointer hover:bg-[#3a404d] p-3 rounded-full transition-all duration-200'
              >
                <div>
                  {bookmarkData[movie_id] ? (
                    <IoBookmark />
                  ) : (
                    <IoBookmarkOutline />
                  )}
                </div>
              </div>
            </div>
            <p>{movieData?.Plot}</p>
            <p>Genre: {movieData?.Genre}</p>
            <p>
              Director: <span className='font-bold'>{movieData?.Director}</span>
            </p>
            <p>Writer: {movieData?.Writer}</p>
            <div className='my-3'>
              <div className='flex items-center flex-wrap gap-3'>
                {movieData?.Ratings.map((item, idx) => {
                  return <RatingsComponent key={idx} data={item} />;
                })}
              </div>
            </div>
            <div className='flex items-center'>
              <p className='mr-10'>Run Time: {movieData?.Runtime}</p>
              <p>Year: {movieData?.Year}</p>
            </div>
            <p>Actors: {movieData?.Actors}</p>
            <p>Awards: {movieData?.Awards}</p>
            <p>Language: {movieData?.Language}</p>
            <Button
              onPress={() => navigate(`/watch?${queryString}`)}
              title='Watch Online'
            />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

const RatingsComponent = ({ data }) => {
  const name =
    data?.Source === 'Internet Movie Database' ? 'CineCrate' : data?.Source;

  return (
    <div className='flex items-center gap-2 mr-10 text-sm lg:text-md'>
      {name === 'CineCrate' ? (
        <BiMoviePlay />
      ) : name === 'Rotten Tomatoes' ? (
        <GiTomato />
      ) : name === 'Metacritic' ? (
        <FaMastodon />
      ) : null}
      <p className='font-bold'>{name}</p>
      <span className='flex items-center'>
        <p className='mr-1'>{data?.Value}</p>{' '}
        <span className='mb-[2px]'>
          <FaStar color='#DCC204' />
        </span>
      </span>
    </div>
  );
};

const DetailSkeleton = () => {
  return (
    <div className='mt-20 flex flex-col align-middle justify-center text-white'>
      <div className='sm:flex justify-between items-start'>
        <div className=' sm:w-1/2 flex justify-center'>
          <div className='rounded-md w-[260px] h-[340px] xs:w-[360px] xs:h-[530px] sm:w-[240px] sm:h-[330px]  md:w-[300px] md:h-[430px] lg:w-[360px] lg:h-[530px] bg-gray-300 animate-pulse' />
        </div>
        <div className='sm:w-1/2 space-y-6 sm:pr-20 mt-6 sm:mt-0'>
          <div className='h-[40px] w-[200px] lg:w-[300px] animate-pulse bg-gray-300 rounded-md' />
          <div className='space-y-2'>
            <div className='h-[14px] w-[280px] xxs:w-[320px] xs:w-[420px] sm:w-[280px] md:w-[340px] lg:w-[440px] animate-pulse bg-gray-300 rounded-md' />
            <div className='h-[14px] w-[240px] xs:w-[300px] md:w-[320px] lg:w-[380px] animate-pulse bg-gray-300 rounded-md' />
            <div className='h-[14px] w-[200px] xs:w-[280px] md:w-[280px] lg:w-[320px] animate-pulse bg-gray-300 rounded-md' />
          </div>
          <div className='h-[14px] w-[200px] animate-pulse bg-gray-300 rounded-md' />
          <div className='h-[14px] w-[250px] animate-pulse bg-gray-300 rounded-md' />
          <div className='h-[14px] w-[200px] animate-pulse bg-gray-300 rounded-md' />

          <div className='my-3'>
            <div className='flex items-center mb-3 space-x-4'>
              <Skeleton h2 w={160} />
              <Skeleton h2 w={160} />
            </div>
            <Skeleton h2 w={120} />
          </div>
          <div className='flex items-center space-x-4'>
            <Skeleton para w={100} />
            <Skeleton para w={100} />
          </div>
          <div className='h-[14px] w-[240px] animate-pulse bg-gray-300 rounded-md' />
          <div className='h-[14px] w-[240px] animate-pulse bg-gray-300 rounded-md' />

          <Skeleton para w={160} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
