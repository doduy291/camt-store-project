import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6" data-aos="fade-right">
            <h3>ĐỊA CHỈ</h3>
            <div className="address">93 Nguyễn Đức Cảnh, Tp.Buôn Ma Thuột, Đăk Lăk</div>
            <p>
              Điện Thoại <a href="!#">097 325 63 37</a>
            </p>
            <p>
              Email. <a href="!#">camt@gmail.com</a>
            </p>
            <ul className="list-social">
              <li>
                <a href="https://www.facebook.com/CamTStore2020/" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-delay="150">
            <h3>HỖ TRỢ</h3>
            <ul className="list-link">
              <li>
                <a href="https://www.facebook.com/CamTStore2020/">THÔNG TIN CHUNG</a>
              </li>
              <li>
                <Link to="/profile">TÀI KHOẢN</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6" data-aos="fade-right" data-aos-delay="200">
            <h3>CỬA HÀNG</h3>
            <ul className="list-link">
              <li>
                <a href="https://www.facebook.com/CamTStore2020/">VỀ CHÚNG TÔI</a>
              </li>
              <li>
                <Link to="/shop">CỬA HÀNG</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
