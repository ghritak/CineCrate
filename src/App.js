import { BrowserRouter } from 'react-router-dom';
import BodyRoute from './Routes';
import NavBar from './components/navbar/NavBar';
import 'swiper/css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen px-6'>
        <NavBar />
        <div className='flex-1 overflow-y-auto'>
          <BodyRoute />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
