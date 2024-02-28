import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SearchedPage from './components/searchComponent/SearchedPage';
import DetailPage from './components/detailPage/DetailPage';
import BookmarkPage from './components/bookmark/BookmarkPage';
import WatchPage from './components/watchPage/WatchPage';

const BodyRoute = ({ setBookmarkData, bookmarkData }) => {
  return (
    <div className='max-w-9xl'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route
          exact
          path='/search'
          element={<SearchedPage bookmarkData={bookmarkData} />}
        />
        <Route
          exact
          path='/movie'
          element={
            <DetailPage
              bookmarkData={bookmarkData}
              setBookmarkData={setBookmarkData}
            />
          }
        />
        <Route
          exact
          path='/bookmarks'
          element={<BookmarkPage bookmarkData={bookmarkData} />}
        />
        <Route exact path='/watch' element={<WatchPage />} />
      </Routes>
    </div>
  );
};

export default BodyRoute;
