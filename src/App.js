/* eslint-disable react-hooks/exhaustive-deps */
import 'swiper/css';
import { BrowserRouter } from 'react-router-dom';
import BodyRoute from './Routes';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  let bookmarkData__ = JSON.parse(localStorage.getItem('bookmarkData')) || {};
  const [bookmarkData, setBookmarkData] = useState({});

  useEffect(() => {
    setBookmarkData(bookmarkData__);
  }, []);

  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen px-6'>
        <NavBar bookmarkData={bookmarkData} />
        <div className='flex-1 overflow-y-auto'>
          <BodyRoute
            setBookmarkData={setBookmarkData}
            bookmarkData={bookmarkData}
          />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
