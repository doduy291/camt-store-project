import React from 'react';
import { Link } from 'react-router-dom';
import { formatVND } from '../utils/formatMoney';

const Shop = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="product-item">
        <div className="product-thumb">
          <div className="main-img">
            <Link to={`/singleproduct/${product.slug}`}>
              <img className="img-responsive" src={product.anhsanphampath} alt="img" />
            </Link>
          </div>

          <Link to={`/singleproduct/${product.slug}`} className="details">
            <i className="pe-7s-search"></i>
          </Link>
        </div>
        <h4 className="product-name">
          <Link to={`/singleproduct/${product.slug}`}>{product.tensanpham}</Link>
        </h4>
        <p className="product-price">{formatVND.format(product.giabanle)} VNĐ</p>
      </div>
    </div>
  );
};

export default Shop;
