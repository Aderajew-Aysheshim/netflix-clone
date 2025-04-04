import React from "react";
import "./Row.css"; // Import Row CSS

function Row({ title, isLargeRow }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const movies = []; // Populate with movie data from the API

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
