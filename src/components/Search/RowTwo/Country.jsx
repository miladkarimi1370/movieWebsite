import React, { useEffect } from "react";
import { useState } from "react";

export default function Country() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/configuration/countries?api_key=360eec290c1f282ea30004cd946075a7&language=en-US"
    )
      .then((respons) => respons.json())
      .then((response2) => setCountries(response2));
  }, []);

  const selectFuncForCountry = (e) => {
    console.log(e.target.value);
  };
  const countriesInTheWorld =
    countries.length &&
    countries.map((co, index) => {
      return (
        <option key={index} value={co.english_name}>
          {co.english_name}
        </option>
      );
    });
  return (
    <>
      <div className="d-flex align-items-center my-4">
        <h6 className="text-warning font-tiny fw-bolder px-1 mb-0">Country </h6>
        <select
          onChange={selectFuncForCountry}
          className="form-select w-75 custom-bg-dark-for-search rounded-pill text-white font-tiny border-0 mx-2"
          aria-label="Default select example"
        >
          <option>All</option>
          {countriesInTheWorld && countriesInTheWorld}
        </select>
      </div>
    </>
  );
}
