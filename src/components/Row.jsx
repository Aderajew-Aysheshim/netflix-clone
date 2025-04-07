import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "../utils/requests"; // Image URL for posters
import { fetchMovies } from "../utils/axiosinstance"; // Correct import for fetchMovies from axiosinstance
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await fetchMovies(fetchUrl); // Fetch movies based on fetchUrl
      setMovies(results); // Set fetched movies to state
    }
    fetchData();
  }, [fetchUrl]); // Dependency array to re-fetch when fetchUrl changes

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        (movies.map((movies)  (
        <img
          key={movies}
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          src={`${IMAGE_URL}${isLargeRow ? movies?.poster_path : movies?.backdrop_path}`} // Select the right image based on row type
          alt={movies?.name} // Alt text for accessibility
        />
        )))
      </div>
    </div>
  );
};

export default Row;
// This component fetches and displays a row of movies based on the provided fetchUrl and title props.