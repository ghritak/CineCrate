import { BrowserRouter } from 'react-router-dom';
import BodyRoute from './Routes';
import NavBar from './components/navbar/NavBar';
import 'swiper/css';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-[#2b3035] px-6 min-h-screen'>
        <NavBar />
        <BodyRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
