import './App.css';
import PopularMovieSection from './components/Sections/PopularMovieSection';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className='bg-[#2b3035] h-screen px-6'>
      <NavBar />
      <PopularMovieSection />
    </div>
  );
}

export default App;
