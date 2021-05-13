import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ location }) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/profile" className={location.pathname === '/profile' ? 'is-active' : ''}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
            <span>Thông tin tài khoản</span>
          </Link>
        </li>
        <li>
          <Link to="/profile/hoa-don" className={location.pathname === '/profile/hoa-don' ? 'is-active' : ''}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
            </svg>
            <span>Quản lý đơn hàng</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
