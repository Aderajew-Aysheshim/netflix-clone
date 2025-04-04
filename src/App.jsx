import React from 'react';
import './App.css';  // Make sure to import your CSS here
import Header from './components/Header';  // Header component
import Footer from './components/Footer';  // Footer component
import Home from './components/Home';  // Home component
import Row from './components/Row';  // Row component to display movie rows

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
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