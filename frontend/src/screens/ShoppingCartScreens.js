import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup, FormControl } from '@material-ui/core';

import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';
import { createOrderAction } from '../actions/orderActions';
import { emptyCart } from '../actions/cartActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import { formatVND } from '../utils/formatMoney';
import { SANPHAM_DETAILS_RESET } from '../constants/sanphamConstants';

const ShoppingCartScreens = ({ history }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [methodPay, setMethodPay] = useState('0');
  const dispatch = useDispatch();
  const taikhoanLogin = useSelector((state) => state.taikhoanLogin);
  const { taikhoanInfo } = taikhoanLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  cart.totalPrice = cartItems.reduce((pre, cur) => pre + cur.giabanle * cur.qty, 0);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { success: successCreate, error: errorCreate, order } = orderCreate;

  useEffect(() => {
    dispatch({ type: SANPHAM_DETAILS_RESET });
    if (successCreate) {
      dispatch(emptyCart());
      dispatch({ type: ORDER_CREATE_RESET });
      history.push(`/order-detail/${order.sohoadon}`);
    }
  }, [dispatch, history, order, successCreate]);

  const placeOrderHandler = (e) => {
    e.preventDefault();
    if (!taikhoanInfo) {
      history.push('/login?redirect=shoppingcart');
    } else {
      window.confirm('Chuẩn bị tiến hành đặt hàng');
      let cartItemsClone = JSON.parse(JSON.stringify(cartItems));
      const cartFiltered = cartItemsClone.filter((item) => delete item.anhsanphampath && delete item.tonkho);
      dispatch(
        createOrderAction({
          name,
          phoneNumber,
          address,
          methodPay,
          orderItems: cartFiltered,
          totalPrice: cart.totalPrice,
        })
      );
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="header-page">
          <h1>SHOPPING CART</h1>
        </div>
        {cartItems.length === 0 ? (
          <CartEmpty />
        ) : (
          <div className="main-content">
            <form action="!#" className="shop-form">
              <div className="table-responsive">
                <table className="shop-table table">
                  <thead>
                    <tr>
                      <th className="product-remove"></th>
                      <th className="product-thumbnail"></th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                    </tr>
                  </thead>

                  {cartItems.map((item) => (
                    <CartItem key={item.idsanpham} item={item} />
                  ))}
                </table>
              </div>
              <div className="row mgt-35">
                <div className="col-md-6">
                  <div className="shop-shipping">
                    <h3>Thông tin khách hàng</h3>
                    <input
                      className="input-form"
                      type="text"
                      placeholder="HỌ VÀ TÊN"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errorCreate && errorCreate.name ? <span className="error-mess">{errorCreate.name}</span> : null}
                    <input
                      className="input-form"
                      type="number"
                      placeholder="SỐ ĐIỆN THOẠI"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {errorCreate && errorCreate.phoneNumber ? (
                      <span className="error-mess">{errorCreate.phoneNumber}</span>
                    ) : null}
                  </div>
                  <div className="shop-shipping">
                    <h3>Địa chỉ</h3>
                    <input
                      className="input-form"
                      type="text"
                      placeholder="ĐỊA CHỈ"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {errorCreate && errorCreate.address ? (
                      <span className="error-mess">{errorCreate.address}</span>
                    ) : null}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="shop-totals">
                    <h3>Hình thức thanh toán</h3>
                    <FormControl component="fieldset">
                      <RadioGroup value={methodPay} onChange={(e) => setMethodPay(e.target.value)}>
                        <div>
                          <Radio value="0" />
                          Ship COD
                        </div>
                        <div>
                          <Radio value="1" />
                          Nhận tại cửa hàng
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="shop-totals">
                    <h3>CART TOTALS</h3>
                    <table className="totals-table">
                      <thead>
                        <tr>
                          <td>Tổng giá sản phẩm:</td>
                          <td>
                            <span className="amount">
                              {formatVND.format(cartItems.reduce((pre, cur) => pre + cur.giabanle * cur.qty, 0))} VNĐ
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>Phí ship:</td>
                          <td>Free Shipping</td>
                        </tr>
                        <tr>
                          <td>Tổng giá đơn hàng:</td>
                          <td>
                            <span className="amount">{formatVND.format(cart.totalPrice)} VNĐ</span>
                          </td>
                        </tr>
                      </thead>
                    </table>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                      <button className="checkout-btn" onClick={placeOrderHandler}>
                        Thanh toán
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartScreens;
