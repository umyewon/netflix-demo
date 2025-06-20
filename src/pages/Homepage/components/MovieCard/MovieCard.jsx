import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css'

const MovieCard = ({movie}) => {
  return (
    <div style={{backgroundImage : 'url('+`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`+')'}} className="movieCard">
        <div className='overlay'>
            <h2>{movie.title}</h2>
            {movie.genre_ids.map((id)=>
                <Badge bg="danger">${id}</Badge>
            )}
        </div>
        <div>
            <div>{movie.vote_average}</div>
            <div>{movie.popularity}</div>
            <div>{movie.adult?'over18' : 'under18'}</div>
        </div>
    </div>
  )
}

export default MovieCard