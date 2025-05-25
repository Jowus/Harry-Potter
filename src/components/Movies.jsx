import React, { useState, useEffect } from "react";
import Movie from "./Movie";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://potterhead-api.vercel.app/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="movies--list">
      <div className="movies--header">List of Harry Potter's Films</div>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          summary={movie.summary}
          releaseDate={movie.release_date}
          runningTime={movie.running_time}
          directors={movie.directors}
          screenwriters={movie.screenwriters}
          producers={movie.producers}
        />
      ))}
    </div>
  );
}

export default Movies;
