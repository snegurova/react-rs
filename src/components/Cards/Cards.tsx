import React from "react";
import movies from "./movies.ts";
import Card from "../Card/Card";
import { MovieData } from "../../types/types";
import "./Cards.css";

const Cards: React.FC = () => {
  const cards = movies.map((movie: MovieData) => {
    return <Card movie={movie} key={movie.id} />;
  });
  return <div className="cards-container">{cards}</div>;
};

export default Cards;
