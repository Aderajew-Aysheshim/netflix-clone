// src/utils/axiosInstance.js

import axios from 'axios';
import { BASE_URL } from './tmdbConfig';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
export const fetchMovies = async (url) => {
  try {
    const response = await instance.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}