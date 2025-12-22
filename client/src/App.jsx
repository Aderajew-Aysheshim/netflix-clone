import React from 'react';
import './App.css'; 
import Header from './components/Header'; 
import Footer from './components/Footer';  
import Home from './components/Home';  
import Row from './components/Row';  
import MovieList from './components/MovieList';  
import Banner from './components/Banner';  
import requests from './utils/requests';
import axiosInstance from './utils/axiosInstance';

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


