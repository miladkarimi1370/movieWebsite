import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=360eec290c1f282ea30004cd946075a7&language=en"
    )
      .then((response) => response.json())
      .then((response2) => setGenres(response2.genres));
  }, []);
const selectFunc = (e) => {
        console.log(e.target.value);
}
  const generesOfMovies =
    genres.length &&
    genres.map((genre) => {
      return (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      );
    });

  return (
    <>
      <div className="d-flex align-items-center my-4">
        <h6 className="text-warning font-tiny fw-bolder px-1 mb-0">Genre  </h6>
        <select
        onChange={selectFunc}
          className="form-select w-75 custom-bg-dark-for-search rounded-pill text-white font-tiny border-0 mx-2"
          aria-label="Default select example"
        >
          <option className="text-white">All</option>
          {generesOfMovies && generesOfMovies}
        </select>
      </div>
    </>
  );
}
