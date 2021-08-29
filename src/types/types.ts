export interface MovieData {
  adult: boolean;
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface CardProps {
  movie: MovieData;
}
