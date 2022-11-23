import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/action/movieAction";

const Home = () => {

  // 변수
  const dispatch = useDispatch(); // 리덕스

  // 실행
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  // 출력
  return (
    <>
      <span>home</span>
    </>
  );

};

export default Home;