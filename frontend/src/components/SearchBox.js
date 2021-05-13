import React, { useState } from 'react';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/shop/search/${keyword}`);
    } else {
      history.push('/shop');
    }
  };
  return (
    <div className="wrap-search">
      <div className="search-form">
        <input type="text" placeholder="Tìm kiếm.." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit" onClick={submitHandler}>
          <i className="pe-7s-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
