import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeFromWishList } from '../actions/wishlistActions';
import { formatVND } from '../utils/formatMoney';
import { removeWishListNotice } from '../utils/notification';

const WishItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromWishHandler = (id, tensanpham) => {
    dispatch(removeFromWishList(id));
    removeWishListNotice(tensanpham);
  };
  return (
    <>
      <tr className="cart_item">
        <td className="product-remove">
          <button
            type="button "
            className="remove"
            onClick={() => removeFromWishHandler(item.idsanpham, item.tensanpham)}
          >
            <i className="fa fa-times"></i>
          </button>
        </td>
        <td className="product-thumbnail">
          <Link to={`/singleproduct/${item.slug}`}>
            <img className="img-responsive" src={item.anhsanphampath} alt="img" />
          </Link>
        </td>
        <td className="product-name">
          <Link to={`/singleproduct/${item.slug}`}>{item.tensanpham}</Link>
        </td>
        <td className="product-price">
          <span className="amount">{formatVND.format(item.giabanle)} VNĐ</span>
        </td>
        <td className="product-stock">
          {item.tonkho >= 1 ? <span className="highlight">Còn hàng</span> : <span>Hết hàng</span>}
        </td>
        <td className="product-add">
          <Link to={`/singleproduct/${item.slug}`} className="add-to-cart-btn">
            Xem chi tiết
          </Link>
        </td>
      </tr>
    </>
  );
};

export default WishItem;
