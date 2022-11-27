import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const MovieSlide = ({ movies }) => {

  // 변수
  const responsive = {  // 슬라이드
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // 출력
  return (
    <>
      <Carousel responsive={responsive}>
        {movies?.results.map(item => (
          <MovieCard key={item.id} item={item} />
        ))}
      </Carousel>
    </>
  );

};

export default MovieSlide;