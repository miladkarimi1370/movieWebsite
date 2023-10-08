import React from 'react'

export default function MovieOrSeries() {
  return (
    <>
          <div className="d-flex justify-content-center align-items-center">
                <h6 className="text-warning fw-bold font-tiny mb-0 px-2">
                  variaty{" "}
                </h6>
                <div className="d-flex justify-content-between rounded-pill custom-bg-dark-for-search border-0  form-control">
                  <div className="form-check mx-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="movieOrseries"
                      id="movie"
                      value="movie"
                      defaultChecked
                    />
                    <label
                      className="form-check-label text-white fw-bolder font-tiny"
                      htmlFor="movie"
                    >
                      Movie
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="movieOrseries"
                      id="series"
                      value="series"
                    />
                    <label
                      className="form-check-label text-white fw-bolder font-tiny"
                      htmlFor="series"
                    >
                      Series
                    </label>
                  </div>
                </div>
              </div>
    </>
  )
}
