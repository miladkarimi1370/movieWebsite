import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [showListMovies, setShowListMovis] = useState("invisible");
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=360eec290c1f282ea30004cd946075a7&query=${query}`
    )
      .then((respone) => respone.json())
      .then((response2) => {
        if (query.length > 3) {
          setMovies(response2.results);
          setShowListMovis("visible");
        } else if (query.length <= 3) {
          setMovies([]);
          setShowListMovis("d-none");
        }
      });
  }, [query]);
  return (
    <>
      <div className="container-fluid custom-color-for-header custom-radius-for-header">
        <div className="row d-flex align-items-center">
          <div className="col-sm-12 col-md-8">
            <nav>
              <ul className="d-flex">
                <li className="px-4 py-3 custom-hover-for-navbar">
                  <Link to={"/"} className="text-warning ">
                    Home
                  </Link>
                </li>
                <li className="px-4 py-3  custom-hover-for-navbar">
                  <Link to={"/top-reted"} className="text-warning ">
                    Top Reted
                  </Link>
                </li>
                <li className="px-4 py-3  custom-hover-for-navbar">
                  <Link to={"/up-coming"} className="text-warning">
                    Up Coming
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-12 col-md-4 d-flex align-items-center position-relative">
            <input
              type="text"
              placeholder="search"
              className="form-control"
              value={query}
              onInput={(e) => setQuery(e.target.value)}
            />
            {/* start list grout of searching movies */}
            <ol
              className={`list-group list-group-numbered position-absolute custom-z-index-for-list-show-movie custom-position-for-list-show-movie ${showListMovies}`}
            >
              {movies.length &&
                movies.map((movie) => {
                  return (
                    <Link
                      to={"/SpecificMovie"}
                      className="list-group-item d-flex border-1 cutom-color-for-list-show-movie custom-cursor"
                      key={movie.id}
                    >
                      <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-around align-items-start px-2">
                        <div className="fw-bold text-white">
                          {!movie.title ? movie.name : movie.title}
                        </div>
                        <div className="font-tiny text-warning">
                          {" "}
                          {!movie.release_date
                            ? movie.first_air_date
                            : movie.release_date}
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                        <span className="badge bg-primary rounded-pill text-white align-self-end mx-2 my-1">
                          {movie.vote_average}
                        </span>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          className="custom-size-for-img mx-3"
                          alt={movie.title}
                        />
                      </div>
                    </Link>
                  );
                })}
            </ol>
            {/* end list grout of searching movies */}
          </div>
        </div>
      </div>
    </>
  );
}
