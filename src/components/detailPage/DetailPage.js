import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaMastodon, FaStar } from 'react-icons/fa6';
import { BiMoviePlay } from 'react-icons/bi';
import { GiTomato } from 'react-icons/gi';
import Skeleton from '../elements/Skeleton';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import Button from '../elements/Button';

const DetailPage = ({ bookmarkData, setBookmarkData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const movie_id = queryParams.get('id');
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
        `http://www.omdbapi.com/?i=${movie_id}&apikey=c09ad111`
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
    <div className='mx-10 mt-20 flex flex-col align-middle justify-center text-white'>
      <div className='flex justify-between items-start'>
        <div className=' w-1/2 flex justify-center'>
          {movieData?.Poster !== 'N/A' ? (
            <img
              src={movieData?.Poster}
              alt={'Movie Poster'}
              style={{ width: 360, height: 530 }}
              loading='lazy'
              className='rounded-md'
            />
          ) : (
            <div className='bg-gray-300 w-[180px] md:w-60 lg:w-[270px] h-[100px] md:h-[200px] lg:h-[390px] animate-pulse' />
          )}
        </div>
        <div className='w-1/2 space-y-4 pr-20'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-3xl font-extrabold'>{movieData?.Title}</h1>
            <div
              onClick={handleBookmark}
              className='cursor-pointer hover:bg-[#3a404d] p-3 rounded-full transition-all duration-200'
            >
              <div>
                {bookmarkData[movie_id] ? (
                  <IoBookmark size={22} />
                ) : (
                  <IoBookmarkOutline size={22} />
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
    </div>
  );
};

const RatingsComponent = ({ data }) => {
  const name =
    data?.Source === 'Internet Movie Database' ? 'CineCrate' : data?.Source;

  return (
    <div className='flex items-center gap-2 mr-10'>
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
    <div className='mx-10 mt-20 flex flex-col align-middle justify-center text-white'>
      <div className='flex justify-between items-start'>
        <div className=' w-1/2 flex justify-center'>
          <Skeleton w={360} h={530} />
        </div>
        <div className='w-1/2 space-y-6 pr-20'>
          <Skeleton h1 w={300} />
          <div className='space-y-2'>
            <Skeleton para w={600} />
            <Skeleton para w={500} />
            <Skeleton para w={400} />
          </div>
          <Skeleton para w={300} />
          <Skeleton para w={250} />
          <Skeleton para w={300} />
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
          <Skeleton para w={300} />
          <Skeleton para w={300} />
          <Skeleton para w={160} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
