import React from "react";
import MovieOrSeries from "./RowOne/MovieOrSeries";
import Director from "./RowOne/Director";
import Actor from "./RowOne/Actor";
import YearOfProduct from "./RowOne/YearOfProduct";
import Genres from "./RowTwo/Genres";
import Country from "./RowTwo/Country";
import Languages from "./RowTwo/Languages";
import Rate from "./RowTwo/Rate";
import "./styleOfSearch.css";

export default function Filter() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h6 className="text-warning py-4">
            <i
              className="fa-solid fa-magnifying-glass fa-lg"
              style={{ color: "#fdb522" }}
            ></i>{" "}
            Prefessional Search Bar :{" "}
          </h6>
          <div className="col-sm-12 col-md-12 p-3 bg-dark custom-rounded">
            {/* start row one  */}
            <div className="d-flex justify-content-between align-items-center py-2">
              <MovieOrSeries />
              <Director />
              <Actor />
              <YearOfProduct />
            </div>
            {/* end row one  */}
            {/* start row two  */}
            <div className="d-flex justify-content-end align-items-center">
              <Genres />
              <Country />
              <Languages />
              <Rate />
            </div>
            {/* end row two  */}
            <button
              type="button"
              className="btn btn-primary text-white fw-bold btn-sm rounded-pill"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
