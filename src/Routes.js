import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SearchedPage from './components/searchComponent/SearchedPage';
import DetailPage from './components/detailPage/DetailPage';

const BodyRoute = () => {
  return (
    <div className='max-w-9xl'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/search' element={<SearchedPage />}></Route>
        <Route exact path='/movie' element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
};

export default BodyRoute;
