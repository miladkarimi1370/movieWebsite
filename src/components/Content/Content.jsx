import React, { useEffect, useState } from "react";
import TemplateOfCard from "./TemplateOfCard";
import Pagination from "./Pagination";

export default function Content() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=360eec290c1f282ea30004cd946075a7&page=${page}`
    )
      .then((response) => response.json())
      .then((respone) => {
        setMovies(respone.results);
        setPage(respone.page);
      });
  }, [page]);

  const pageHandler = (e) => {
    setPage(e);
  };

  const informationOfMovies =
    movies.length &&
    movies.map((movieReq) => {
      return <TemplateOfCard key={movieReq.id} {...movieReq} />;
    });

  return (
    <>
      <div className="container mt-5">
        <div className="row">{informationOfMovies && informationOfMovies}</div>
        <Pagination
          pageHandler={pageHandler}
          totalPages={movies.total_pages}
          currentPage={page}
        />
      </div>
    </>
  );
}
