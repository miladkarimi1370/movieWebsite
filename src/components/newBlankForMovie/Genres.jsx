import React from "react";

export default function Genres({ genres }) {
  const genreOfMovie =
    genres &&
    genres.map((genre) => {
      return <span key={genre.id}>{genre.name} , </span>;
    });
  return <>Genre : {genreOfMovie && genreOfMovie}</>;
}
