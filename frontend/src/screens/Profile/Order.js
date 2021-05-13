import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderEmpty from '../../components/OrderEmpty';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { orderAccountAction } from '../../actions/orderActions';
import { formatVND } from '../../utils/formatMoney';

const Order = () => {
  const dispatch = useDispatch();
  const orderAccount = useSelector((state) => state.orderAccount);
  const { loading: loadingOrder, error: errorOrder, orders } = orderAccount;
  useEffect(() => {
    dispatch(orderAccountAction());
  }, [dispatch]);
  const trangthai = {
    1: ['Đang chờ duyệt đơn'],
    2: ['Đang đóng gói'],
    3: ['Đang giao hàng'],
    4: ['Hoàn thành'],
    5: ['Đã hủy'],
  };
  return (
    <>
      <h3>Danh sách đơn hàng</h3>
      {loadingOrder ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : errorOrder ? (
        <Message severity="error">{errorOrder}</Message>
      ) : (
        <div className="order-content">
          {orders.length === 0 ? (
            <OrderEmpty />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Mã hóa đơn</th>
                  <th>Ngày mua</th>
                  <th>Tổng tiền</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item) => (
                  <tr key={item.idhoadon}>
                    <td>
                      <Link to={`/order-detail/${item.sohoadon}`}>{item.sohoadon}</Link>
                    </td>
                    <td>{new Date(item.ngaytaohoadon).toLocaleString('vi-VN').split(' ')[1]}</td>
                    <td>{formatVND.format(item.tongtien)} VNĐ</td>
                    <td>{trangthai[item.trangthaihoadon]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};

export default Order;
