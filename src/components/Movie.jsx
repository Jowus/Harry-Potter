import React from "react";

function Movie(props) {
  return (
    <div className="movies">
      <h2>{props.title}</h2>
      <p>
        <strong>Summary:</strong> {props.summary}
      </p>
      <p>
        <strong>Release Date:</strong> {props.releaseDate}
      </p>
      <p>
        <strong>Running Time:</strong> {props.runningTime} minutes
      </p>
      <p>
        <strong>Directors:</strong> {props.directors}
      </p>
      <p>
        <strong>Screenwriters:</strong> {props.screenwriters}
      </p>
      <p>
        <strong>Producers:</strong> {props.producers}
      </p>
    </div>
  );
}

export default Movie;
