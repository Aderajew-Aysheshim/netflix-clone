import React from 'react';
import './App.css';  // Make sure to import your CSS here
import Header from './components/Header';  // Header component
import Footer from './components/Footer';  // Footer component
import Home from './components/Home';  // Home component
import Row from './components/Row';  // Row component to display movie rows
import MovieList from './components/MovieList';  // MovieList component to display a list of movies
import Banner from './components/Banner';  // Banner component to display a promotional banner
import requests from './utils/requests';  // Requests for fetching movies
import axiosInstance from './utils/axiosinstance';
function App() {


  return (
    <div className="App">
      <Header />
      <Home />
      <div className="App">
        <MovieList />
      </div>
      <Row title="Netflix Originals" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
      <Row title="Horror Movies" />
      <Row title="Romance Movies" />
      <Row title="Documentaries" />
      <Footer />
    </div>
  );
}

export default App;


