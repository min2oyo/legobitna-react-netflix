import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';

function App() {

  // 출력
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </>
  );

}

export default App;
