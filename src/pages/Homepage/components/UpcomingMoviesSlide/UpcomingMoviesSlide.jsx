import { useUpcomingMoviesQuery } from'../../../../hooks/useUpcomingMovies'
import Alert from 'react-bootstrap/Alert';
import MovieCard from '../MovieCard/MovieCard'
import './UpcomingMovieSlide.style.css';

// react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};
const UpcomingMoviesSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <Alert variant="danger">{error.message}</Alert>
    }

  return (
    <div>
        <h4 style={{fontFamily : "IAMAPLAYER", marginBottom : '-1.5%'}}>Upcoming Movies</h4>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass="movie-slider p-1"
            containerClass="carousel-container"
            responsive={responsive}     // 몇개 아이템 보여줄지?
        >
           {data.results?.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
        </Carousel>
    </div>
  )
}

export default UpcomingMoviesSlide