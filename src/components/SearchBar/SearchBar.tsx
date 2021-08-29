import React from "react";
import "./SearchBar.css";
import img from "./blog-article-image.jpeg";

const SearchBar: React.FC = () => (
  <div className="search-container">
    <input type="text" placeholder="Type to search" />
    <button>Search</button>
  </div>
);

export default SearchBar;
