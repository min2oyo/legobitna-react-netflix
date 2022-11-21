import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';

function App() {

  // 출력
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </>
  );

}

export default App;
