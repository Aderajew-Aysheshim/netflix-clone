import React from 'react';
import Row from './Row';
import Banner from './Banner';
import requests from '../utils/requests';
import './Home.css';
import Header from './Header'; // Ensure the path is correct
import Footer from './Footer'; // Ensure the path is correct
import RowList from './RowList';
// Home component to display the main content of the app
function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      {/* <RowList /> This will render the RowList component */}
      {/* <Footer /> */}

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;
