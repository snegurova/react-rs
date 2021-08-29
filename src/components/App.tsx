import React from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Cards from "./Cards/Cards";

const App: React.FC = () => (
  <div>
    <SearchBar />
    <Cards />
  </div>
);

export default App;
