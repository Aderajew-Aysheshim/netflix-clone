import { useEffect, useState } from 'react';
import axios from 'axios';
import './Row.css';

const tmdbAPI = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'en-US'
  }
});


tmdbAPI.interceptors.request.use(config => {
  console.log('Requesting:', config.url);
  return config;
});


tmdbAPI.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);


export const fetchMovies = async (endpoint) => {
  try {
    const { results } = await tmdbAPI.get(endpoint);
    return results;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};


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

        <img
          key={movies}
          className="row__poster"
          src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`}
          alt={movies?.name || movies?.title}
        />

      </div>
    </div>
  );
};

export default MovieList;
