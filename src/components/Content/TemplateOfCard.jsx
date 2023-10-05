import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IdMovieContext } from "../../contextfile/context";

export default function TemplateOfCard({
  id,
  title,
  overview,
  poster_path,
  release_date,
  vote_count,
  vote_average,
  original_language,
}) {
  const { setIdMovie } = useContext(IdMovieContext);
  const addNewIdToContext = () => {
    setIdMovie(id);
    localStorage.setItem("idMovie", JSON.stringify(id));
  };
  return (
    <>
      <div className="col d-flex justify-content-center mt-5">
        <Link
          to={"/SpecificMovie"}
          onClick={addNewIdToContext}
          className={`card custom-border-for-card custom-color-for-card custom-z-index-for-card`}
          style={{ width: 18 + "rem" }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="card-img-top p-4 rounded custom-cursor"
            alt={title}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <h5 className="card-title text-white custom-cursor">{title}</h5>
                <h6 className="text-warning font-tiny">{release_date}</h6>
              </div>
              <div className="d-flex flex-column align-items-center">
                <h6 className="text-warning font-title border-bottom">
                  <span className="text-white font-text">10/</span>
                  {vote_average}
                </h6>
                <h6 className="text-white">{vote_average.toFixed(1)}k votes</h6>
              </div>
            </div>
            <div>
              <h6 className="text-white">
                <span className="font-tiny">language :</span>{" "}
                {original_language}
              </h6>
              <h6 className="text-white">
                <span className="font-tiny">vote counter : </span> {vote_count}
              </h6>
            </div>
            <div className="d-flex flex-column justify-content-end">
              <p className="card-text custom-height-for-overview overflow-hidden font-tiny p-2 text-white">
                {overview}
              </p>

              <div className="btn btn-primary btn-sm">view more</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
