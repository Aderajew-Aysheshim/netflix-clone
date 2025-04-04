import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=YOUR_API_KEY")
      .then((response) => response.json())
      .then((data) => setMovie(data.results[0]));
  }, []);

  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie.overview}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
