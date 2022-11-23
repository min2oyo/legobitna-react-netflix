import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import { movieAction } from "../redux/action/movieAction";

const Home = () => {

  // 변수
  const dispatch = useDispatch(); // 리덕스
  const {
    popularMovies,                // 인기 영화
    topRatedMovies,               // 평점 높은 영화
    upcomingMovies                // 개봉예정 영화
  } = useSelector(state => state.movie);

  // 실행
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  // 출력
  return (
    <>
      <Banner movie={popularMovies?.results[0]} />
    </>
  );

};

export default Home;