import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { sanphamRelatedAction } from '../actions/sanphamActions';
import { formatVND } from '../utils/formatMoney';

const RelatedProduct = ({ match }) => {
  const dispatch = useDispatch();
  const sanphamRelated = useSelector((state) => state.sanphamRelated);
  const { loading: relatedLoading, error: relatedError, relatedSanPham } = sanphamRelated;

  useEffect(() => {
    dispatch(sanphamRelatedAction(match.params.slug));
  }, [dispatch, match]);

  return (
    <>
      {relatedLoading ? (
        <Loader />
      ) : relatedError ? (
        <Message severity="error">{relatedError}</Message>
      ) : (
        <>
          <h3>RELATED PRODUCTS</h3>
          <div className="box-content">
            <div className="showcase">
              <div className="row">
                <div className="box-product" style={{ width: '100%' }}>
                  {relatedSanPham.map((product, i) => (
                    <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product-item has-deal">
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RelatedProduct;
