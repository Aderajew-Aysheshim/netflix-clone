// src/components/Banner.jsx
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../utils/axiosInstance";
import requests from "../utils/requests";
import "./Banner.css";
import { IMAGE_URL } from "../utils/requests";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const movies = await fetchMovies(requests.fetchNetflixOriginals);
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${IMAGE_URL}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {movie?.overview?.length > 150
            ? movie.overview.substr(0, 150) + "..."
            : movie?.overview}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
