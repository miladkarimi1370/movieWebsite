import React from "react";
import { useEffect } from "react";
import "./styleNewBlackForMovie.css";
import { calculateRateOfMovie } from "../Funcs/Functions";
import StarRating from "./StarRating";
import { useContext } from "react";
import idMovieContext from "../../contextfile/context";
import { useState } from "react";
import Genres from "./Genres";
import Language from "./Language";
import Country from "./Country";
import Companies from "./Companies";

export default function NewBlankForMovie() {
  const { idMovie } = useContext(idMovieContext);
  const [dataOfMovie, setDataOfMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=360eec290c1f282ea30004cd946075a7&`
    )
      .then((response) => response.json())
      .then((response2) => {
        console.log(response2);
        setDataOfMovie(response2);
      });
  }, [idMovie]);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col custom-padding-for-col-new-blank">
            <div
              className="wrapper-of-backdrop position-relative"
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original${
                  dataOfMovie.backdrop_path && dataOfMovie.backdrop_path
                }')`,
              }}
            >
              <div className="custom-opacity-for-backdrop d-flex">
                <div className="col-sm-12 col-md-4">
                  <div className="wrapper-of-img-in-new-blank d-flex justify-content-center p-5 custom-cursor">
                    <img
                      className="img-in-new-black"
                      src={`https://image.tmdb.org/t/p/w500${dataOfMovie.poster_path}`}
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
                        Download {dataOfMovie.title}
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
                            {dataOfMovie.vote_average}
                          </span>{" "}
                          / 10
                        </h6>
                      </div>
                      <div className="wrapper-of-point mt-1">
                        <h6>{dataOfMovie.vote_count} votes</h6>
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
                      release date : {dataOfMovie.release_date}
                    </h6>
                    <h6 className="text-white">
                      <i
                        className="fa-regular fa-clock px-2"
                        style={{ color: "#deb522" }}
                      ></i>
                      time : {dataOfMovie.runtime} minute
                    </h6>
                  </div>
                  <div className="wrapper-of-part2 d-flex justify-content-between py-2">
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-masks-theater px-2"
                        style={{ color: "#fdb522" }}
                      ></i>{" "}
                      <Genres genres={dataOfMovie && dataOfMovie.genres} />
                    </h6>
                    <h6>
                      <i
                        className="fa-solid fa-sack-dollar px-2"
                        style={{ color: "#fdb522" }}
                      ></i>{" "}
                      Budget : {dataOfMovie.budget}$
                    </h6>
                  </div>

                  <div className="wrapper-of-part3 d-flex justify-content-between py-2">
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-language px-2"
                        style={{ color: "#fdb522" }}
                      ></i>
                      <Language
                        languages={
                          dataOfMovie.spoken_languages &&
                          dataOfMovie.spoken_languages
                        }
                      />
                    </h6>
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-globe px-2"
                        style={{ color: "#fdb522" }}
                      ></i>{" "}
                      <Country
                        country={
                          dataOfMovie.production_countries &&
                          dataOfMovie.production_countries
                        }
                      />
                    </h6>
                  </div>
                  <h6 className="text-white py-2">
                    <i
                      className="fa-solid fa-feather px-2"
                      style={{ color: "#fdb522" }}
                    ></i>{" "}
                    Revenue : {dataOfMovie.revenue}$
                  </h6>
                  <h6 className="text-white py-2">
                    <i
                      className="fa-solid fa-bullhorn px-2"
                      style={{ color: "#fdb522" }}
                    ></i>
                    <Companies
                      companies={
                        dataOfMovie.production_companies &&
                        dataOfMovie.production_companies
                      }
                    />
                  </h6>
                  <h6 className="text-whtie py-2 line-height-p-2">
                    <i
                      className="fa-solid fa-film px-2"
                      style={{ color: "#fdb522" }}
                    ></i>
                    {dataOfMovie.overview && dataOfMovie.overview}
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
