import axios from 'axios';

const tmdbAPI = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: 'en-US',
    },
});

// Optional: logging requests
tmdbAPI.interceptors.request.use(config => {
    console.log('Requesting:', config.url);
    return config;
});

tmdbAPI.interceptors.response.use(
    response => response.data,
    error => {
        console.error('API Error:', error.response && error.response.status, error.message);
        return Promise.reject(error);
    }
);

// Fetch movies helper
export const fetchMovies = async(endpoint) => {
    try {
        const { results } = await tmdbAPI.get(endpoint);
        return results || [];
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
};