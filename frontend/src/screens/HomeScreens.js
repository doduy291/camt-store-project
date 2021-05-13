import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import AOS from 'aos';
import axios from 'axios';
import { params1, params2 } from '../utils/swiperConfigs';
import { formatVND } from '../utils/formatMoney';
import { subscribeNotice } from '../utils/notification';
// Install modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const HomeScreens = () => {
  const [trendProducts, setTrendProducts] = useState([]);
  const [trendProducts2, setTrendProducts2] = useState([]);
  const [emailSub, setEmailSub] = useState('');

  useEffect(() => {
    fetchAllProducts();
    fetchAllProducts2();
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  const fetchAllProducts = async () => {
    const { data } = await axios.get('/api/sanpham/trend');
    setTrendProducts(data);
  };
  const fetchAllProducts2 = async () => {
    const { data } = await axios.get('/api/sanpham/trend');
    setTrendProducts2(data);
  };
  const subscribeHandler = (e) => {
    e.preventDefault();
    if (!emailSub.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setEmailSub('Vui lòng nhập đúng định dạng Email...');
    } else {
      subscribeNotice();
      setEmailSub('');
    }
  };

  return (
    <div>
      <Swiper {...params1}>
        <div className="sliderHome1">
          <div className="slide-image">
            <img src="/images/slideshow3.jpg" alt="img" />
          </div>
        </div>
        <div className="sliderHome1">
          <div className="slide-image">
            <img src="/images/slideshow2.jpg" alt="img" />
          </div>
        </div>
        <div className="sliderHome1">
          <div className="slide-image">
            <img src="/images/home7-slideshow1.jpg" alt="img" />
          </div>
        </div>
      </Swiper>

      <div className="trending-clothing" style={{ marginTop: '30px' }}>
        <div className="container" data-aos="fade-up" data-aos-duration="2000">
          <h3>Trending</h3>
          <Swiper {...params2}>
            <div className="sliderHome2">
              <div className="showcase" style={{ width: '100%' }}>
                <div className="row">
                  <div className="box-product" style={{ width: '100%' }}>
                    {trendProducts.map((item, i) => (
                      <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                        <div className="product-item">
                          <div className="product-thumb">
                            <div className="main-img">
                              <Link to={`/singleproduct/${item.sanpham.slug}`}>
                                <img className="img-responsive" src={item.sanpham.anhsanphampath} alt="img" />
                              </Link>
                            </div>
                            <Link to={`/singleproduct/${item.sanpham.slug}`} className="details">
                              <i className="pe-7s-search"></i>
                            </Link>
                          </div>
                          <h4 className="product-name">
                            <Link to={`/singleproduct/${item.sanpham.slug}`}>{item.sanpham.tensanpham}</Link>
                          </h4>
                          <p className="product-price">{formatVND.format(item.sanpham.giabanle)} VNĐ</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="sliderHome2">
              <div className="showcase" style={{ width: '100%' }}>
                <div className="row">
                  <div className="box-product" style={{ width: '100%' }}>
                    {trendProducts2.map((item, i) => (
                      <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                        <div className="product-item">
                          <div className="product-thumb">
                            <div className="main-img">
                              <Link to={`/singleproduct/${item.sanpham.slug}`}>
                                <img className="img-responsive" src={item.sanpham.anhsanphampath} alt="img" />
                              </Link>
                            </div>
                            <Link to={`/singleproduct/${item.sanpham.slug}`} className="details">
                              <i className="pe-7s-search"></i>
                            </Link>
                          </div>
                          <h4 className="product-name">
                            <Link to={`/singleproduct/${item.sanpham.slug}`}>{item.sanpham.tensanpham}</Link>
                          </h4>
                          <p className="product-price">{formatVND.format(item.sanpham.giabanle)} VNĐ</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="sliderHome2">
              <div className="showcase" style={{ width: '100%'}}>
                <div className="row">
                  <div className="box-product" style={{width: '100%'}}>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-thumb">
                          <div className="main-img">
                            <a href="single-product.html">
                              <img className="img-responsive" src="/images/product-img-1.jpg" alt="img" />
                            </a>
                          </div>
                          <div className="overlay-img">
                            <a href="single-product.html">
                              <img className="img-responsive" src="/images/product-img-1-thumb.jpg" alt="img" />
                            </a>
                          </div>
                          <a href="single-product.html" className="details">
                            <i className="pe-7s-search"></i>
                          </a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">HANDMADE FLARED JACKET</a>
                        </h4>
                        <p className="product-price">189.99 USD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </Swiper>
        </div>
      </div>

      {/* // <!-- /.trending-clothing --> */}

      <hr className="gray-line" />
      <div className="about-block" data-aos="fade-up" data-aos-duration="2500">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <img className="img-responsive" src="/images/about-img-1.jpg" alt="img" />
            </div>
            <div className="col-md-3 col-xs-6">
              <img className="img-responsive" src="/images/about-img-2.jpg" alt="img" />
            </div>
            <div className="col-md-6 col-sm-12">
              <h3>Giới thiệu về CamT Store</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lectus mauris. Fusce ultrices in
                orci ac rhoncus. Duis dictum tempus neque, eu bibendum nibh viverra quis. Etiam sagittis ullamcorper
                volutpat. Vestibulum lacinia risus sed ligula malesuada volutpat. Quisque molestie condimentum purus at
                rhoncus. Donec faucibus condimentum erat, ut varius orci ultricies vitae. Nam viverra diam diam, at
                egestas tellus interdum condimentum.
              </p>
              <a className="content-link" href="/contact">
                Địa điểm
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.about-block --> */}

      <div className="parallax-banner-1 parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-offset-7" data-aos="fade-left">
              <p className="content-title">NEW</p>
              <br />
              <p className="content-title">BỘ SƯU TẬP</p>
              <p className="content-description">Mùa xuân/mùa hè CamT</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.parallax-banner-1 --> */}

      <div className="subscribe parallax">
        <div className="container">
          <i className="pe-7s-mail"></i>
          <h3 data-aos="fade-top">ĐĂNG KÝ</h3>
          <h5 data-aos="fade-top">Nhận tin tức mới & cập nhật của CamT</h5>
          <form action="!#" method="post" className="subscribe-form">
            <input
              type="email"
              name="your_email"
              value={emailSub}
              placeholder="YOUR EMAIL ADDRESS"
              data-aos="fade-right"
              onChange={(e) => setEmailSub(e.target.value)}
            />
            <button type="submit" data-aos="fade-left" onClick={subscribeHandler}>
              ĐĂNG KÝ
            </button>
          </form>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="form-note"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.subscribe --> */}

      <hr className="gray-line" />
      <div className="locations">
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-aos="zoom-out-up" data-aos-duration="2000">
              <div className="media">
                <div className="media-left">
                  <i className="pe-7s-alarm"></i>
                </div>
                <div className="media-body">
                  <h4>MỞ CỬA CẢ TUẦN</h4>
                  <h5>8AM : 8PM</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-out-up" data-aos-duration="2000">
              <div className="media">
                <div className="media-left">
                  <i className="pe-7s-medal"></i>
                </div>
                <div className="media-body">
                  <h4>HÀNG CHẤT LƯỢNG TỐT</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-out-up" data-aos-duration="2000">
              <div className="media">
                <div className="media-left">
                  <i className="pe-7s-world"></i>
                </div>
                <div className="media-body">
                  <h4>VẬN CHUYỂN TOÀN QUỐC</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.locations --> */}
    </div>
  );
};

export default HomeScreens;
