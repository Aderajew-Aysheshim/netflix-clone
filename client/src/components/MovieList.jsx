import { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmdb';
import './Row.css';

const MovieList = ({ fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const fetched = await fetchMovies(fetchUrl);
      setMovies(fetched);
    };
    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/w500${movie.poster_path}`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
