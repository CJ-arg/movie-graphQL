import React, { useState } from "react";
import Card from "./Card";

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      name: "Terminator",
      genre: "Action",
      year: 2000,
      url: "https://www.thedayspring.com.pk/wp-content/uploads/2020/04/movies-to-watch-768x385.jpg",
    },
    {
      name: "Terminator 2",
      genre: "Action",
      year: 2002,
      url: "https://www.thedayspring.com.pk/wp-content/uploads/2020/04/movies-to-watch-768x385.jpg",
    },
    {
      name: "Terminator 3",
      genre: "Action",
      year: 2003,
      url: "https://www.thedayspring.com.pk/wp-content/uploads/2020/04/movies-to-watch-768x385.jpg",
    },
    {
      name: "Terminator 4",
      genre: "Action",
      year: 2004,
      url: "https://www.thedayspring.com.pk/wp-content/uploads/2020/04/movies-to-watch-768x385.jpg",
    },
    {
      name: "Terminator 5",
      genre: "Action",
      year: 2005,
      url: "https://www.thedayspring.com.pk/wp-content/uploads/2020/04/movies-to-watch-768x385.jpg",
    },
  ]);

  return (
    <div className="movies">
      {movies.map((movie) => {
        return (
          <Card
            key={movie.name}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
            image={movie.url}
          />
        );
      })}
    </div>
  );
};

export default Movies;
