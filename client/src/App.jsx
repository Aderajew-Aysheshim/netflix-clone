// src/App.jsx
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieList from './components/MovieList';
import requests from './utils/requests';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <MovieList title="Trending" fetchUrl={requests.fetchTrending} />
      <MovieList title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <MovieList title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieList title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieList title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieList title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieList title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieList title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default App;
