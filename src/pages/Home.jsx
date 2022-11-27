import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { movieAction } from "../redux/action/movieAction";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

  // 변수
  const dispatch = useDispatch(); // 리덕스
  const {
    popularMovies,                // 인기 영화
    topRatedMovies,               // 평점 높은 영화
    upcomingMovies,               // 개봉예정 영화
    loading,                      // 로딩
  } = useSelector(state => state.movie);

  // 실행
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  // 출력
  return (
    <>
      {loading ?
        <>
          <ClipLoader
            color='#ffff'
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
        :
        <>
          <Banner movie={popularMovies?.results[0]} />
          <h1>popularMovies</h1>
          <MovieSlide movies={popularMovies} />
          <h1>topRatedMovies</h1>
          <MovieSlide movies={topRatedMovies} />
          <h1>upcomingMovies</h1>
          <MovieSlide movies={upcomingMovies} />
        </>
      }
    </>
  );

};

export default Home;