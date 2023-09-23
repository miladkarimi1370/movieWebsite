import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./styleNewBlackForMovie.css";
import { calculateRateOfMovie } from "../Funcs/Functions";
import StarRating from "./StarRating";
export default function NewBlankForMovie() {
  const [id_movies, set_IdMoveis] = useState(1008042);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id_movies}?api_key=360eec290c1f282ea30004cd946075a7&`
    )
      .then((response) => response.json())
      .then((response2) => console.log(response2));
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col custom-padding-for-col-new-blank">
            <div
              className="wrapper-of-backdrop position-relative"
              style={{
                backgroundImage:
                  'url("https://image.tmdb.org/t/p/original/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg")',
              }}
            >
              <div className="custom-opacity-for-backdrop d-flex">
                <div className="col-sm-12 col-md-4">
                  <div className="wrapper-of-img-in-new-blank d-flex justify-content-center p-5 custom-cursor">
                    <img
                      className="img-in-new-black"
                      src={
                        "https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
                      }
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
                        Download No One Will Save You 2023
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
                            className={`font-big  ${calculateRateOfMovie(7.2)}`}
                          >
                            7.2
                          </span>{" "}
                          / 10
                        </h6>
                      </div>
                      <div className="wrapper-of-point mt-1">
                        <h6>280 votes</h6>
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
                      Quality : 1080p WEB-DL
                    </h6>
                    <h6 className="text-white">
                      <i
                        className="fa-regular fa-clock px-2"
                        style={{ color: "#deb522" }}
                      ></i>
                      time : 94 minute
                    </h6>
                  </div>
                  <div className="wrapper-of-part2 d-flex justify-content-between py-2">
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-file-lines px-2"
                        style={{ color: "#deb522" }}
                      ></i>{" "}
                      Genres : Action , Horror , Adventure
                    </h6>
                    <h6>
                      <i
                        className="fa-solid fa-people-group px-2"
                        style={{ color: "#deb522" }}
                      ></i>{" "}
                      MPA : PG13
                    </h6>
                  </div>

                  <div className="wrapper-of-part3 d-flex justify-content-between py-2">
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-clapperboard px-2"
                        style={{ color: "#deb522" }}
                      ></i>
                      Director : James Cameron
                    </h6>
                    <h6 className="text-white">
                      <i
                        className="fa-solid fa-globe px-2"
                        style={{ color: "#fdb522" }}
                      ></i>{" "}
                      Country : United State
                    </h6>
                  </div>
                  <h6 className="text-white py-2">
                    <i
                      className="fa-solid fa-feather px-2"
                      style={{ color: "#fdb522" }}
                    ></i>{" "}
                    Writer : James Cameron
                  </h6>
                  <h6 className="text-white py-2">
                    <i
                      className="fa-solid fa-masks-theater px-2"
                      style={{ color: "#fdb522" }}
                    ></i>
                    Tom Cruz , Quackin phonix , Eddy Morphy , Daniel Radclif
                  </h6>
                  <h6 className="text-whtie py-2 line-height-p-2">
                    <i
                      className="fa-solid fa-film px-2"
                      style={{ color: "#fdb522" }}
                    ></i>
                    When a group of friends discover how to conjure spirits
                    using an embalmed hand, they become hooked on the new
                    thrill, until one of them goes too far and unleashes
                    terrifying supernatural forces.
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
