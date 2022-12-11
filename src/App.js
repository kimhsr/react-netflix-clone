import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./api/requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
        isLargeRow={undefined}
      />
      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={undefined}
      />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={undefined}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={undefined}
      />
    </div>
  );
}

export default App;
