import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay.js";
import Form from "./components/Form.js";

export default function App() {
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  return (
    // Write JSX here -- JSX is what will return and display on our screen like HTML
    <div className="App">
      <Form />
      <MovieDisplay />
    </div>
  );
}
