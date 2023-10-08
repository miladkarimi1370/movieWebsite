import React from "react";

export default function Director() {
  return (
    <>
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <label
            htmlFor="director"
            className="form-label text-warning fw-bold font-tiny mb-0 px-2"
          >
            Director
          </label>
          <input
            type="text"
            className="form-control w-75 text-white rounded-pill custom-bg-dark-for-search border-0 font-tiny"
            id="director"
            placeholder="Christopher Nolan"
          />
        </div>
      </div>
    </>
  );
}
