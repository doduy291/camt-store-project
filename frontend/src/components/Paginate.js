import React from 'react';
import { Link } from 'react-router-dom';

const Paginate = ({ page, totalPages, keyword }) => {
  return (
    totalPages > 1 && (
      <nav className="pagination">
        <ul className="page-numbers">
          {page === 1 ? null : (
            <li>
              <Link
                className="last"
                to={keyword ? `/shop/search/${keyword}/page/${page - 1}` : `/shop/page/${page - 1}`}
              >
                <i className="fa fa-angle-left"></i>
              </Link>
            </li>
          )}
          {[...Array(totalPages).keys()].map((x) => (
            <li key={x + 1}>
              <Link
                className={page === x + 1 ? 'current' : ''}
                to={keyword ? `/shop/search/${keyword}/page/${x + 1}` : `/shop/page/${x + 1}`}
              >
                {x + 1}
              </Link>
            </li>
          ))}
          {page === totalPages ? null : (
            <li>
              <Link
                className="last "
                to={keyword ? `/shop/search/${keyword}/page/${page + 1}` : `/shop/page/${page + 1}`}
              >
                <i className="fa fa-angle-right"></i>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    )
  );
};

export default Paginate;
