import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import OrderDetailEmpty from '../components/OrderDetailEmpty';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { orderDetailAction, orderCancelAction } from '../actions/orderActions';
import { formatVND } from '../utils/formatMoney';

const OrderDetailScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const taikhoanLogin = useSelector((state) => state.taikhoanLogin);
  const { taikhoanInfo } = taikhoanLogin;
  const orderDetail = useSelector((state) => state.orderDetail);
  const { loading: loadingOrderDetail, error: errorOrderDetail, order } = orderDetail;
  const orderCancel = useSelector((state) => state.orderCancel);
  const { success: successOrderCancel } = orderCancel;

  useEffect(() => {
    if (!order || order.sohoadon !== match.params.sohoadon) dispatch(orderDetailAction(match.params.sohoadon));
    if (successOrderCancel) dispatch(orderDetailAction(match.params.sohoadon));
  }, [dispatch, match, order, successOrderCancel]);

  const cancelOrderHandler = (sohoadon) => {
    if (!taikhoanInfo) {
      window.alert('Bạn phải đăng nhập để hủy hàng');
      history.push(`/login?redirect=order-detail/${sohoadon}`);
    } else if (taikhoanInfo.idkhachhang !== order.idkhachhang) {
      window.alert('Đây không phải hóa đơn của bạn!');
    } else {
      window.confirm('Bạn có chắc chắn muốn hủy đơn hàng?');
      dispatch(orderCancelAction(sohoadon));
    }
  };

  const trangthai = {
    1: ['Chờ duyệt đơn'],
    2: ['Đang đóng gói'],
    3: ['Đang giao hàng'],
    4: ['Đã giao hàng'],
    5: ['Hủy đơn hàng'],
  };
  const tinhtrang = {
    0: ['Chưa thanh toán'],
    1: ['Đã thanh toán'],
  };
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row col-md-12 main-content">
            {loadingOrderDetail ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Loader />
              </div>
            ) : errorOrderDetail && errorOrderDetail.orderdetail ? (
              <OrderDetailEmpty />
            ) : (
              <div className="order-detail-content">
                <h3>
                  Mã đơn hàng: {order.sohoadon}{' '}
                  {order.trangthaihoadon > 2 ? null : (
                    <button onClick={() => cancelOrderHandler(order.sohoadon)}>Hủy đơn</button>
                  )}
                  {successOrderCancel && <Message severity="success">Đơn hàng đã được hủy</Message>}
                </h3>
                <div className="table-responsive">
                  <table className="shop-table table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail"></th>
                        <th className="product-name">Tên sản phẩm</th>
                        <th className="product-price">Giá</th>
                        <th className="product-quantity">Số lượng</th>
                        <th className="product-subtotal">Tổng tiền</th>
                      </tr>
                    </thead>

                    {order.chitiethoadon.map((item) => (
                      <tbody key={item.idchitiethoadon} style={{ borderBottom: '1px solid #eaeaea' }}>
                        <tr className="cart_item">
                          <td className="product-thumbnail">
                            <Link to={`/singleproduct/${item.sanpham.slug}`}>
                              <img
                                className="img-responsive"
                                width="70"
                                height="93"
                                src={item.sanpham.anhsanphampath}
                                alt="img"
                              />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link to={`/singleproduct/${item.sanpham.slug}`}>{item.sanpham.tensanpham}</Link>
                          </td>
                          <td className="product-price">
                            <span className="amount">{formatVND.format(item.sanpham.giabanle)} VNĐ</span>
                          </td>
                          <td className="product-quantity">
                            <div>{item.soluong}</div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">{formatVND.format(item.sanpham.giabanle * item.soluong)} VNĐ</span>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
                <div className="row mgt-35">
                  <div className="col-md-6">
                    <div className="shop-shipping">
                      <h3>Thông tin khách hàng</h3>
                      <Card variant="outlined">
                        <CardContent style={{ paddingBottom: '16px' }}>
                          <div>
                            Tên: <span>{order.khachhang.tenkhachhang}</span>
                          </div>
                          <div>
                            Số điện thoại: <span>{order.khachhang.sodienthoai}</span>
                          </div>
                          <div>
                            Địa chỉ: <span>{order.khachhang.diachi}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="shop-totals">
                      <h3>Tình trạng hóa đơn</h3>
                      <Card variant="outlined">
                        <CardContent style={{ paddingBottom: '16px' }}>
                          <div>
                            Tình trạng:{' '}
                            <span style={order.tinhtrang === 1 ? { color: 'rgb(75, 154, 53)' } : { color: 'red' }}>
                              {tinhtrang[order.tinhtrang]}
                            </span>
                          </div>
                          <div>
                            Trạng thái:{' '}
                            <span style={order.trangthai === 4 ? { color: 'rgb(75, 154, 53)' } : { color: 'red' }}>
                              {trangthai[order.trangthaihoadon]}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="shop-totals">
                      <h3>Hình thức thanh toán</h3>
                      <Card variant="outlined">
                        <CardContent style={{ paddingBottom: '16px' }}>
                          <div>
                            Hình thức thanh toán:{' '}
                            <span>{order.hinhthucthanhtoan === 0 ? 'Ship COD' : 'Nhận tại Shop'}</span>
                          </div>
                          <div>
                            Ngày tạo: <span>{new Date(order.ngaytaohoadon).toLocaleString('vi-VN')}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="shop-totals">
                      <h3>Tổng tiền</h3>
                      <Card variant="outlined">
                        <CardContent style={{ paddingBottom: '16px' }}>
                          <div>
                            Tổng giá sản phẩm:{' '}
                            <span className="amount">
                              {formatVND.format(
                                order.chitiethoadon.reduce((pre, cur) => pre + Number(cur.thanhtien), 0)
                              )}{' '}
                              VNĐ
                            </span>
                          </div>
                          <div>
                            Phí ship: <span className="amount">Free Shipping</span>
                          </div>
                          <div>
                            Tổng giá đơn hàng: <span className="amount">{formatVND.format(order.tongtien)} VNĐ</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailScreen;
