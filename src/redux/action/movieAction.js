import api from "../api";

// 변수
const API_KEY = process.env.REACT_APP_API_KEY;

// 함수
function getMovies() {
  return async dispatch => {

    try {

      dispatch({ type: "GET_MOVIES_REQUEST" });

      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const topRatedMovieApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const upcomingMovieApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

      let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([popularMovieApi, topRatedMovieApi, upcomingMovieApi]);
      console.log('popularMovies: ', popularMovies);
      console.log('topRatedMovies: ', topRatedMovies);
      console.log('upcomingMovies: ', upcomingMovies);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
        }
      });

    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAILURE",
      });
    }

  };
}

export const movieAction = {
  getMovies,
};