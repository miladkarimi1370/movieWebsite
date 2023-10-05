import React, { useEffect, useState } from "react";
import TemplateOfCard from "./TemplateOfCard";
import Pagination from "./Pagination";
import { Oval } from "react-loader-spinner";
export default function Content() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const localPage = JSON.parse(localStorage.getItem("page"));
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=360eec290c1f282ea30004cd946075a7&page=${
        !localPage ? page : localPage
      }`
    )
      .then((response) => response.json())
      .then((respone) => {
        setMovies(respone.results);
        setPage(respone.page);
        setShowLoader(false);
        localStorage.setItem("page", JSON.stringify(respone.page));
      });
  }, [page]);

  const pageHandler = (e) => {
    setPage(e);
    setShowLoader(true);
    localStorage.setItem("page", JSON.stringify(e));
  };

  const informationOfMovies =
    movies.length &&
    movies.map((movieReq) => {
      return <TemplateOfCard key={movieReq.id} {...movieReq} />;
    });

  return (
    <>
      {!showLoader ? (
        <div className="container mt-5">
          <div className="row">
            {informationOfMovies && informationOfMovies}
          </div>
          <Pagination
            pageHandler={pageHandler}
            totalPages={movies.total_pages}
            currentPage={page}
          />
        </div>
      ) : (
        <div className="custom-property-for-loader">
          <Oval
            height={100}
            width={100}
            color="#526D82"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#526D82"
            strokeWidth={3}
            strokeWidthSecondary={3}
          />
        </div>
      )}
    </>
  );
}
