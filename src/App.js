import "../src/App.css"

import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay.js";
import Form from "./components/Form.js";

export default function App() {
  //variable with your apiKey
  const apiKey = "98e3fb1f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies/fetch data 
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      // if we didn't add await in front of response.json then the movie would not display
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getRandomMovieTitle = () => {
    const movies = [
      "Clueless",
      "Inception",
      "The Shawshank Redemption",
      "Jurassic Park",
      "Scream"
    ];
    return movies[Math.floor(Math.random() * movies.length)];
  };

  // This will run on each refresh of the page
  useEffect(() => {
    const randomMovieTitle = getRandomMovieTitle();
    getMovie(randomMovieTitle);
  }, []);

  //This will run on the first render but not on subsequent renders
  // useEffect(() => {
  //   getMovie("Clueless");
  // }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="h-screen flex items-center flex-col justify-center bg-blue-950 text-white">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
