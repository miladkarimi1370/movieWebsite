import React from "react";

export default function Pagination({ pageHandler, currentPage, totalPages }) {
  const handlerPreviousFuc = () => {
    const newCurrentPage =
      currentPage - 1 < 1 ? (currentPage = 1) : currentPage - 1;

    pageHandler(newCurrentPage);
  };

  const handlerNextFunc = () => {
    const newCurrentPage =
      currentPage + 1 > totalPages
        ? (currentPage = totalPages)
        : currentPage + 1;

    pageHandler(newCurrentPage);
  };

  return (
    <>
      <nav
        aria-label="Page navigation example"
        className="m-5 d-flex justify-content-center"
      >
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => handlerPreviousFuc()}
            >
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a
              className="page-link"
              href="#"
              onClick={(e) => pageHandler(Number(e.target.innerText))}
              
            >
              {currentPage}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={(e) => pageHandler(Number(e.target.innerText))}
            >
              {currentPage + 1}
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={(e) => pageHandler(Number(e.target.innerText))}
            >
              {currentPage + 2}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => handlerNextFunc()}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
