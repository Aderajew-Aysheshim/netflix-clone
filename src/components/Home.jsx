import React from "react";
import Row from "./Row"; // Import Row component

function Home() {
  return (
    <div className="home">
      <Row title="NETFLIX ORIGINALS" isLargeRow />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
    </div>
  );
}

export default Home;
// This component serves as the main content area for the Netflix clone app.
// It includes multiple Row components to display different categories of movies.