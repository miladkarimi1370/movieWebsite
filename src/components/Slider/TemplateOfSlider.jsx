import React from "react";

export default function TemplateOfSlider({ vote_average, title, poster_path }) {
  return (
    <>
      <div className="card bg-dark text-white">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img custom-border-radius-for-slider"
          alt={title}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between">
            <h5 className="card-title text-warning">{title}</h5>
            <p className="card-text fw-bold bg-dark rounded-pill p-2">
              <span className="bg-warning rounded-pill p-2 text-dark fw-bold">
                {" "}
                imdb
              </span>{" "}
              {vote_average}
            </p>
          </div>
          <p className="card-text">
            <i
              className="fa-solid fa-heart-circle-plus fa-2xl"
              style={{ color: "#21fdf9" }}
            ></i>
          </p>
        </div>
      </div>
    </>
  );
}
