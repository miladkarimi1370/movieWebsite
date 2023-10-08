import React from "react";

export default function Rate() {
  return (
    <>
      {" "}
      <label
        htmlFor="year-of-product"
        className="form-label text-warning fw-bolder font-tiny mb-0 px-2"
      >
        Rate
      </label>
      <input type="range" className="form-range w-25" id="year-of-product" />
    </>
  );
}
