import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeValueInputItemCart, decreaseItemCart, increaseItemCart, removeFromCart } from '../actions/cartActions';
import { formatVND } from '../utils/formatMoney';
import { removeCartNotice } from '../utils/notification';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [valueQuantity, setValueQuantity] = useState(item.qty);

  const minusQty = () => {
    if (valueQuantity > 1) {
      dispatch(decreaseItemCart(item.idsanpham));
      return setValueQuantity(Number(valueQuantity) - 1);
    }
  };
  const plusQty = () => {
    if (valueQuantity < item.tonkho) {
      dispatch(increaseItemCart(item.idsanpham));
      return setValueQuantity(Number(valueQuantity) + 1);
    }
  };
  const changeValueInput = (valueInputQty) => {
    dispatch(changeValueInputItemCart(item.idsanpham, Number(valueInputQty)));
    return setValueQuantity(Number(valueInputQty));
  };

  const removeFromCartHandler = (id, tensanpham) => {
    dispatch(removeFromCart(id));
    removeCartNotice(tensanpham);
  };
  return (
    <>
      <tbody style={{ borderBottom: '1px solid #eaeaea' }}>
        <tr className="cart_item">
          <td className="product-remove">
            <button
              type="button "
              className="remove"
              onClick={() => removeFromCartHandler(item.idsanpham, item.tensanpham)}
            >
              <i className="fa fa-times"></i>
            </button>
          </td>
          <td className="product-thumbnail">
            <Link to={`/singleproduct/${item.slug}`}>
              <img className="img-responsive" width="70" height="93" src={item.anhsanphampath} alt="img" />
            </Link>
          </td>
          <td className="product-name">
            <Link to={`/singleproduct/${item.slug}`}>
              {item.tensanpham} ({item.tensizesanpham},{item.tenmausanpham})
            </Link>
          </td>
          <td className="product-price">
            <span className="amount">{formatVND.format(item.giabanle)} VNĐ</span>
          </td>
          <td className="product-quantity">
            <div className="quantity">
              <button className="minus-btn" type="button" onClick={() => minusQty()}>
                <i className="fa fa-minus"></i>
              </button>
              <input type="text" value={valueQuantity} onChange={(e) => changeValueInput(e.target.value)} />
              <button className="plus-btn" type="button" onClick={() => plusQty()}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </td>
          <td className="product-subtotal">
            <span className="amount">{formatVND.format(item.giabanle * valueQuantity)} VNĐ</span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;
