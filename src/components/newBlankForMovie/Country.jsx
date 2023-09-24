import React from "react";

export default function Country({ country }) {
  const countryOfMovie =
    country &&
    country.map((count, index) => {
      return <span key={index}>{count.name} , </span>;
    });
  return <>Country : {countryOfMovie}</>;
}
