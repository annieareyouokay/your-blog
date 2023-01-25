import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const handleOnClick = (e) => {
    const { outerText, classList } = e.target;
    if (classList.contains('is-disabled')) return;
    if (outerText === 'Next page') {
      onPageChange(currentPage + 1);
    } else {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <button
        className={`pagination-previous button ${
          currentPage === 1 ? 'is-disabled' : ''
        }`}
        onClick={handleOnClick}
      >
        Previous
      </button>
      <button
        className={`pagination-next button ${
          pageCount === currentPage ? 'is-disabled' : ''
        }`}
        onClick={handleOnClick}
      >
        Next page
      </button>
      <ul className="pagination-list">
        {pages.map((p) => {
          return (
            <li key={`Page_${p}`}>
              <button
                className={`pagination-link button ${
                  p === currentPage ? 'is-current' : ''
                }`}
                onClick={() => onPageChange(p)}
              >
                {p}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
