const Banner = ({ movie }) => {

  // 확인
  console.log(`movie:`, movie);

  // 출력
  return (
    <>
      {movie &&
        <div
          className="banner"
          style={{
            backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}` + ")",
          }}
        >
          <div className="banner-info">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      }
    </>
  );
};


export default Banner;