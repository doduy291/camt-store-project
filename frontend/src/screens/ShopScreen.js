import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../components/Message';
import Loader from '../components/Loader';
import Shop from '../components/Shop';
import Paginate from '../components/Paginate';
import { sanphamListAction } from '../actions/sanphamActions';
import { SANPHAM_DETAILS_RESET } from '../constants/sanphamConstants';

const ShopScreen = ({ match }) => {
  const dispatch = useDispatch();
  const sanphamList = useSelector((state) => state.sanphamList);
  const { loading, error, listSanPham, page, totalPages, totalsanpham } = sanphamList;
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  useEffect(() => {
    dispatch({ type: SANPHAM_DETAILS_RESET });
    dispatch(sanphamListAction(keyword, pageNumber));
    window.scrollTo(0, 0);
  }, [dispatch, keyword, pageNumber, match]);

  return (
    <div className="main">
      <div className="container">
        <div className="header-page">
          <h1>SHOP</h1>
        </div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', height: '400px' }}>
            <Loader />
          </div>
        ) : error ? (
          <Message severity="error">{error}</Message>
        ) : listSanPham.length === 0 ? (
          <Message severity="info">Không tìm thấy sản phẩm</Message>
        ) : (
          <div className="main-content">
            <div className="top-products">
              <div className="showing-results">Sản phẩm hiển thị 1-8 trên {totalsanpham} sản phẩm</div>
              <div className="sortby">{/* FancySelect */}</div>
            </div>

            <div className="box-product" style={{ width: '100%' }}>
              {listSanPham.map((lsp) => (
                <Shop key={lsp.idsanpham} product={lsp}></Shop>
              ))}
            </div>

            <Paginate page={page} totalPages={totalPages} keyword={keyword ? keyword : ''} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopScreen;
