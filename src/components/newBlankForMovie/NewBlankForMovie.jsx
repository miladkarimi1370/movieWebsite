import React, { useContext } from "react";
import { useEffect } from "react";
import "./styleNewBlackForMovie.css";
import { calculateRateOfMovie } from "../Funcs/Funcs";
import StarRating from "./StarRating";

import { useState } from "react";
import { IdMovieContext } from "../../contextfile/context";

export default function NewBlankForMovie() {
  const { idMovie } = useContext(IdMovieContext);

  const [dataOfMovie, setDataOfMovie] = useState({});
  useEffect(() => {
    const idLocalStorage = JSON.parse(localStorage.getItem("idMovie"));

    fetch(
      `https://api.themoviedb.org/3/movie/${
        !idLocalStorage ? idMovie : idLocalStorage
      }?api_key=360eec290c1f282ea30004cd946075a7`
    )
      .then((response) => response.json())
      .then((response2) => {
        fetchAgain(response2.imdb_id);
      });
  }, [idMovie]);
  const fetchAgain = (id) => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=3f8f181f`)
      .then((response) => response.json())
      .then((response2) => {
        setDataOfMovie(response2);
      });
  };
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col custom-padding-for-col-new-blank">
            <div
              className="wrapper-of-backdrop position-relative"
              style={{
                backgroundImage: `url('${dataOfMovie.Poster}')`,
              }}
            >
              <div className="custom-opacity-for-backdrop d-flex">
                <div className="col-sm-12 col-md-4">
                  <div className="wrapper-of-img-in-new-blank d-flex justify-content-center p-5 custom-cursor">
                    <img
                      className="img-in-new-black"
                      src={dataOfMovie.Poster}
                      alt=""
                    />
                    <i
                      className="fa-solid fa-caret-right fa-2xl position-absolute custom-position-of-chevron-in-new-blank"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </div>
                </div>
                <div className="col-sm-12 col-md-8 text-white py-5 custom-padding-for-col8">
                  <div className="wrapper-of-part-title-and-rate mb-5 d-flex justify-content-between">
                    <div className="wrapper-of-title">
                      <h3 className="text-white">
                        Download {dataOfMovie.Title}
                      </h3>
                      <div className="d-flex">
                        <i
                          className="fa-solid fa-comment px-2"
                          style={{ color: "#deb522" }}
                        ></i>
                        <h6 className="font-tiny">
                          <span className="text-warning">10</span> comment
                        </h6>
                      </div>
                    </div>
                    <div className="wrapper-of-rate d-flex flex-column justify-content-cener align-items-center">
                      <div className="wrapper-of-detail-rate border-bottom">
                        <h6>
                          <span
                            className={`font-big  ${calculateRateOfMovie(
                              dataOfMovie.vote_average
                            )}`}
                          >
                            {dataOfMovie.imdbRating}
                          </span>{" "}
                          / 10
                        </h6>
                      </div>
                      <div className="wrapper-of-point mt-1">
                        <h6>{dataOfMovie.imdbVotes} votes</h6>
                      </div>
                      <div className="mt-1">
                        <i
                          className="fa-brands fa-imdb fa-2xl"
                          style={{ color: "#deb522" }}
                        ></i>
                      </div>
                    </div>
                    <h6 className="d-flex align-self-center">
                      <i
                        className="fa-solid fa-heart-circle-plus fa-xl"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </h6>
                  </div>
                  <div className="wrapper-of-part1 d-flex justify-content-between py-2">
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-tv px-2"
                        style={{ color: "#deb522" }}
                      ></i>
                      Release date : {dataOfMovie.Released}
                    </h6>
                    <h6 className="text-white">
                      <i
                        className="fa-regular fa-clock px-2"
                        style={{ color: "#deb522" }}
                      ></i>
                      Time : {dataOfMovie.Runtime}
                    </h6>
                  </div>
                  <div className="wrapper-of-part2 d-flex justify-content-between py-2">
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-align-justify px-2"
                        style={{ color: "#fdb522" }}
                      ></i>{" "}
                      Genre : {dataOfMovie.Genre}
                    </h6>
                    <h6>
                      <i
                        className="fa-solid fa-people-group px-2"
                        style={{ color: "#fdb522" }}
                      ></i>{" "}
                      Rated : {dataOfMovie.Rated}
                    </h6>
                  </div>

                  <div className="wrapper-of-part3 d-flex justify-content-between py-2">
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-masks-theater px-2"
                        style={{ color: "#fdb522" }}
                      ></i>
                      Actors : {dataOfMovie.Actors}
                    </h6>
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-globe px-2"
                        style={{ color: "#fdb522" }}
                      ></i>{" "}
                      Country : {dataOfMovie.Country}
                    </h6>
                  </div>
                  <h6 className="text-white py-2">
                    <i
                      className="fa-solid fa-feather px-2"
                      style={{ color: "#fdb522" }}
                    ></i>{" "}
                    Writer : {dataOfMovie.Writer}
                  </h6>
                  <h6 className="text-white py-2">
                    <i
                      className="fa-solid fa-bullhorn px-2"
                      style={{ color: "#fdb522" }}
                    ></i>
                    Director : {dataOfMovie.Director}
                  </h6>
                  <h6 className="text-whtie py-2 line-height-p-2">
                    <i
                      className="fa-solid fa-film px-2"
                      style={{ color: "#fdb522" }}
                    ></i>
                    {dataOfMovie.Plot}
                  </h6>
                  <div className="wrapper-of-critisize-poeple py-2 d-flex justify-content-between">
                    <div className="wrapper-of-vote-critisize d-flex justify-content-start align-items-center px-2">
                      <h6 className="px-2 mb-0">Critics vote : </h6>
                      <button className="btn btn-info btn-sm text-white fw-bold">
                        20
                      </button>
                    </div>
                    <div className="wrapper-of-star-rate">
                      <StarRating />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
