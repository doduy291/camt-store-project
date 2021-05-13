import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { logout } from '../actions/taikhoanActions';

const Header = ({ location, history }) => {
  const [open, setOpen] = useState(false);
  const [sohoadon, setSohoadon] = useState('');
  const dispatch = useDispatch();
  const taikhoanLogin = useSelector((state) => state.taikhoanLogin);
  const { taikhoanInfo } = taikhoanLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const wishList = useSelector((state) => state.wishList);
  const { wishItems } = wishList;

  const logoutHandler = () => {
    dispatch(logout());
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const searchHoaDonHandler = (e) => {
    e.preventDefault();
    if (sohoadon) {
      history.push(`/order-detail/${sohoadon}`);
      setSohoadon('');
      handleClose();
    } else {
      setSohoadon('Vui lòng nhập số hóa đơn.');
    }
  };
  return (
    <>
      <div className="topbar">
        <div className="container">
          {taikhoanInfo ? (
            <div className="left-topbar">XIN CHÀO {taikhoanInfo.email}!</div>
          ) : (
            <div className="left-topbar">
              <a href="/login">Đăng NHẬP</a> HOẶC <a href="/login">ĐĂNG KÝ</a>
            </div>
          )}

          <div className="right-topbar">
            <ul className="list-inline">
              <li>
                <div className="btn-group">
                  <button className="dropdown dropdown-toggle" data-toggle="dropdown">
                    <span>CÀI ĐẶT</span>
                    <i className="pe-7s-angle-down"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/profile">
                        <i className="fa fa-user"></i> Tài khoản
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <i className="fa fa-heart"></i> Danh Sách Yêu Thích (
                        {wishItems.length !== 0 ? wishItems.length : 0})
                      </Link>
                    </li>
                    <li>
                      <Link to="/shoppingcart">
                        <i className="fa fa-shopping-cart"></i> Giỏ Hàng
                      </Link>
                    </li>
                    <li>
                      <div className="search-right-topbar" onClick={handleOpen}>
                        <div>
                          <i className="fa fa-search" /> Tìm hóa đơn
                        </div>
                      </div>
                      <Modal open={open} onClose={handleClose}>
                        <div className="modal-search-topbar">
                          <form>
                            <div className="form-input" style={{ display: 'flex', alignItems: 'center' }}>
                              <label style={{ marginBottom: 0 }}>Tìm kiếm hóa đơn:</label>
                              <input
                                className="input-form"
                                style={{ width: '60%', marginLeft: '3px' }}
                                type="text"
                                placeholder="Search..."
                                value={sohoadon}
                                onChange={(e) => setSohoadon(e.target.value)}
                              />
                              <button className="submit-btn" type="submit" onClick={(e) => searchHoaDonHandler(e)}>
                                Search
                              </button>
                            </div>
                          </form>
                        </div>
                      </Modal>
                    </li>
                    {taikhoanInfo ? (
                      <li onClick={() => logoutHandler()}>
                        <a href="/">
                          <i className="fa fa-sign-out"></i> Đăng xuất
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="gray-line" />
      <header>
        <div className="container">
          <a className="logo" href="/">
            <img src="/images/logo.png" alt="img" />
          </a>
          <div className="header-social">
            <ul className="list-social">
              <li>
                <a href="https://www.facebook.com/CamTStore2020/" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="top-cart">
            <Link to="/shoppingcart">
              <i className="pe-7s-cart"></i>
              <span>{cartItems.length !== 0 ? cartItems.reduce((pre, cur) => pre + Number(cur.qty), 0) : 0}</span>
            </Link>
          </div>
          <nav className="main-nav">
            <div className="minimal-menu">
              <ul className="menu">
                <li className={location.pathname === '/' ? 'current-menu-item' : ''}>
                  <Link to="/">TRANG CHỦ</Link>
                </li>
                <li className={location.pathname === '/shop' ? 'current-menu-item' : ''}>
                  <Link to="/shop">CỬA HÀNG</Link>
                </li>
                <li className={location.pathname === '/contact' ? 'current-menu-item' : ''}>
                  <Link to="/contact">LIÊN HỆ</Link>
                </li>
                <li className="hidden-xs">
                  <Route render={({ history }) => <SearchBox history={history} />} />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
