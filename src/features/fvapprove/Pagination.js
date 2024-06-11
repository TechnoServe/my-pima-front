import React from "react";

const Pagination = ({ visitsPerPage, totalVisits, paginate, currentPage }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalVisits / visitsPerPage) }, (_, i) => i + 1);

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination-item ${number === currentPage ? "active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="pagination-button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
