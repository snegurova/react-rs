import React from "react";
import { CardProps } from "../../types/types";
import "./Card.css";

//{ adult, id, poster_path, release_date, title, vote_average, vote_count }

const Card: React.FC<CardProps> = ({
  movie: { adult, title, poster_path, release_date, vote_average },
}) => (
  <div className="card">
    {adult && <div className="adult">18+</div>}
    <img src={poster_path} alt={title} />
    <div className="card__info">
      <h2>{title}</h2>
      <div>{release_date}</div>
      <div>Rating: {vote_average}</div>
    </div>
  </div>
);

export default Card;
