import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FacebookShareButton } from 'react-share';
import Loader from '../components/Loader';
import Message from '../components/Message';
import TabPanelProduct from '../components/TabPanelProduct';
import RelatedProduct from '../components/RelatedProduct';

import { dataColor, dataSize, sanphamDetailsAction } from '../actions/sanphamActions';
import { addToCart } from '../actions/cartActions';
import { addToWishList } from '../actions/wishlistActions';
import { formatVND } from '../utils/formatMoney';
import { addToCartNotice, addToWishListNotice } from '../utils/notification';

const SingleproductScreens = ({ match }) => {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [colorName, setColorName] = useState('');
  const [sizeName, setSizeName] = useState('');

  const dispatch = useDispatch();
  const sanphamDetail = useSelector((state) => state.sanphamDetail);
  const { loading, error, detailSanPham, colors, sizes } = sanphamDetail;

  const [valueQuantity, setValueQuantity] = useState(1);
  useEffect(() => {
    if (detailSanPham.slug) {
      dispatch(dataColor(detailSanPham.slug));
      dispatch(dataSize(detailSanPham.slug));
    }
    if (!detailSanPham.tensanpham || detailSanPham.slug !== match.params.slug) {
      dispatch(sanphamDetailsAction(match.params.slug));
    } else {
      setSize(detailSanPham.idsizesanpham);
      setColor(detailSanPham.idmausanpham);
      setColorName(detailSanPham.mausanpham.tenmausanpham);
      setSizeName(detailSanPham.sizesanpham.tensize);
    }
    window.scrollTo(0, 0);
  }, [match, dispatch, detailSanPham]);

  // Quantity
  const minusQty = () => {
    if (valueQuantity > 1) return setValueQuantity(Number(valueQuantity) - 1);
  };
  const plusQty = () => {
    if (valueQuantity < detailSanPham.tonkho) return setValueQuantity(Number(valueQuantity) + 1);
  };
  const changeValueInput = (qty) => {
    return setValueQuantity(qty);
  };

  // Add To Cart - Add To WishList
  const addToCartHandler = () => {
    dispatch(addToCart(detailSanPham.idsanpham, valueQuantity, detailSanPham.slug));
    addToCartNotice(valueQuantity, detailSanPham.tensanpham, sizeName, colorName);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const addToWishListHandler = () => {
    dispatch(addToWishList(detailSanPham.idsanpham));
    addToWishListNotice(detailSanPham.tensanpham);
  };

  // Handler
  const handleColorChange = (event, idmausanpham, tenmausanpham) => {
    setColor(idmausanpham);
    setColorName(tenmausanpham);
    const colorItem = event.target.dataset.color;
    dispatch(sanphamDetailsAction(match.params.slug, size, colorItem));
  };

  // Handler
  const handleSizeChange = (event, idsizesanpham, tensizesanpham) => {
    setSize(idsizesanpham);
    setSizeName(tensizesanpham);
    const sizeItem = event.target.dataset.size;
    dispatch(sanphamDetailsAction(match.params.slug, sizeItem, color));
  };
  const shareUrl = `https://camtapp.herokuapp.com/${match.url}`;
  return (
    <>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : error ? (
        <div className="container">
          <Message>{error}</Message>
        </div>
      ) : (
        <div className="main">
          <div className="container">
            <div className="main-content">
              <div className="product">
                <div className="row">
                  <div className="col-md-6">
                    <div className="images">
                      <div id="product-showcase">
                        <div className="gallery">
                          <div className="full">
                            <img src={detailSanPham.anhsanphampath} alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="summary">
                      <h2 className="product-name">{detailSanPham.tensanpham}</h2>

                      <div className="price">{formatVND.format(detailSanPham.giabanle)} VNĐ</div>
                      <div className="product-filter">
                        <div className="size-filter" id="size-filter">
                          <p className="size-name">Màu sắc:</p>
                          <div className="flex-wrap">
                            {colors.map((colorItem, i) => (
                              <button
                                key={i}
                                data-color={colorItem.idmausanpham}
                                className={`option-filter ${colorItem.idmausanpham === color ? 'current' : ''}`}
                                onClick={(event) =>
                                  handleColorChange(event, colorItem.idmausanpham, colorItem.mausanpham.tenmausanpham)
                                }
                              >
                                {colorItem.mausanpham.tenmausanpham}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="color-filter" id="color-filter">
                          <p className="color-name">Size: </p>
                          <div className="flex-wrap">
                            {sizes.map((sizeItem, i) => (
                              <button
                                key={i}
                                data-size={sizeItem.idsizesanpham}
                                className={`option-filter ${sizeItem.idsizesanpham === size ? 'current' : ''}`}
                                onClick={(event) =>
                                  handleSizeChange(event, sizeItem.idsizesanpham, sizeItem.sizesanpham.tensize)
                                }
                              >
                                {sizeItem.sizesanpham.tensize}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="product-action">
                        <div className="clearfix">
                          <div className="quantity">
                            <button className="minus-btn" onClick={() => minusQty()}>
                              <i className="fa fa-minus"></i>
                            </button>
                            <input
                              type="text"
                              value={valueQuantity}
                              onChange={(e) => changeValueInput(e.target.value)}
                            />
                            <button className="plus-btn" onClick={() => plusQty()}>
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                          <button
                            type="button"
                            className="add-to-cart-btn"
                            disabled={detailSanPham.soluong === 0}
                            onClick={() => addToCartHandler()}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                        </div>
                        <div className="wishlist-link" onClick={() => addToWishListHandler()}>
                          <i className="pe-7s-like"></i>Thêm vào WishList
                        </div>
                      </div>
                      <div className="share-this">
                        <h4>Chia sẻ facebook:</h4>
                        <ul className="list-social-2">
                          <li>
                            <FacebookShareButton url={shareUrl}>
                              <div className="facebook">
                                <i className="fa fa-facebook"></i>
                              </div>
                            </FacebookShareButton>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-tabs vertical-tabs">
                  <TabPanelProduct match={match} product={detailSanPham} size={size} color={color} />
                </div>
              </div>
              <div className="related-products">
                <RelatedProduct match={match} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleproductScreens;
