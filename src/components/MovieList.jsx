import React, { useEffect, useState } from 'react';
import axios from 'axios'; // ✅ make sure axios is installed: `npm install axios`
import './Row.css';

// TMDB API instance
const tmdbAPI = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'en-US'
  }
});

// Request interceptor
tmdbAPI.interceptors.request.use(config => {
  console.log('Requesting:', config.url);
  return config;
});

// Response interceptor
tmdbAPI.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// ✅ Functional fetchMovies function
export const fetchMovies = async (endpoint) => {
  try {
    const { results } = await tmdbAPI.get(endpoint);
    return results;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

// ✅ Example component using fetchMovies (you can rename this to Row, MovieList, etc.)
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
        (movies.map((movies)  (
        <img
          key={movies}
          className="row__poster"
          src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`}
          alt={movies?.name || movies?.title}
        />
        )))
      </div>
    </div>
  );
};

export default MovieList;
