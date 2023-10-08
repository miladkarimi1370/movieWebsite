import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Languages() {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/configuration/languages?api_key=360eec290c1f282ea30004cd946075a7&language=en-US"
    )
      .then((response) => response.json())
      .then((response2) => setLanguages(response2));
  }, []);

  const languagesInTheWorld =
    languages.length &&
    languages.map((lang, index) => {
      return (
        <option key={index} value={lang.english_name}>
          {lang.english_name}
        </option>
      );
    });
  return (
    <>
      <div className="d-flex align-items-center my-4">
        <h6 className="text-warning font-tiny fw-bolder px-1 mb-0">
          Language{" "}
        </h6>
        <select
          className="form-select w-75 custom-bg-dark-for-search rounded-pill text-white font-tiny border-0 mx-2"
          aria-label="Default select example"
        >
          <option>All</option>
          {languagesInTheWorld && languagesInTheWorld}
        </select>
      </div>
    </>
  );
}
