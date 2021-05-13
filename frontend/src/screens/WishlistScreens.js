import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message';
import WishItem from '../components/WishItem';
import { SANPHAM_DETAILS_RESET } from '../constants/sanphamConstants';

const WishlistScreens = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);
  const { wishItems } = wishList;
  useEffect(() => {
    dispatch({ type: SANPHAM_DETAILS_RESET });
  }, [dispatch]);
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="header-page">
            <h1>WISHLIST</h1>
          </div>
          {wishItems.length === 0 ? (
            <Message severity="warning">Wishlist trống!</Message>
          ) : (
            <div className="main-content">
              <form action="!#" className="shop-form">
                <div className="table-responsive">
                  <table className="shop-table table" cellSpacing="0">
                    <thead>
                      <tr>
                        <th className="product-remove"></th>
                        <th className="product-thumbnail"></th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-stock">Stock status</th>
                        <th className="product-add"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishItems.map((item) => (
                        <WishItem key={item.idsanpham} item={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistScreens;
