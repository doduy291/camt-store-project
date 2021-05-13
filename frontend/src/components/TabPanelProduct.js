import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Message from '../components/Message';
import { sanphamCreateReviewAction, sanphamDetailsAction } from '../actions/sanphamActions';
import { SANPHAM_REVIEW_RESET } from '../constants/sanphamConstants';
import { successReviewNotice } from '../utils/notification';

const TabPanelProduct = ({ match, product, size, color }) => {
  const [comment, setComment] = useState();
  const dispatch = useDispatch();
  const sanphamCreateReview = useSelector((state) => state.sanphamCreateReview);
  const { success: successReview, error: errorReview } = sanphamCreateReview;

  useEffect(() => {
    if (successReview) {
      setComment('');
      dispatch(sanphamDetailsAction(match.params.slug, size, color));
      successReviewNotice();
      dispatch({ type: SANPHAM_REVIEW_RESET });
    }
  }, [dispatch, match, successReview, size, color]);

  const reviewHandler = (e) => {
    e.preventDefault();
    dispatch(sanphamCreateReviewAction(product.idsanpham, { comment }));
  };
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <p>MÔ TẢ</p>
          </Tab>
          <Tab>
            <p>THÔNG TIN CHI TIẾT</p>
          </Tab>
          <Tab>
            <p>ĐÁNH GIÁ</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <p>
              Cras ut magna quis metus tristique vulputate. Ut a sapien scelerisque, fermentum lorem a, aliquet mi. Ut
              lobortis lorem nisl, vel euismod ligula ornare quis. In consectetur elit sed leo fringilla, a placerat
              ipsum mollis. Proin suscipit metus vitae lectus malesuada scelerisque. Quisque interdum malesuada nisi non
              accumsan. Suspendisse eget lorem libero. Pellentesque mauris risus, cursus eget aliquet quis, iaculis vel
              purus. Nam in ligula vel mi interdum tincidunt sit amet eget leo. Phasellus dapibus augue a lorem luctus
              aliquet. Duis consectetur eros arcu, eget consequat orci mattis non.Nam nec ex maximus sem egestas
              elementum. Duis nisl arcu, sodales ut porttitor at, tincidunt vitae risus. Suspendisse eu nunc ligula.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <p>
              Lorem consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non, volutpat vel tortor.
              Integer laoreet placerat suscipit. Sed sodales scelerisque commodo. Nam porta cursus lectus. Proin nunc
              erat, gravida a facilisis quis, ornare id lectus. Proin consectetur nibh quis.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <div>
              <div className="comments-area">
                <p className="comment-count">{product.review.length} Comment</p>
                <ol className="comment-list media-list">
                  {product.review.length === 0 && <Message severity="info"> Không có đánh giá </Message>}
                  {product.review.map((item, i) => (
                    <li key={i} className="comment">
                      <article className="comment-body media">
                        <div className="media-left">
                          <a href="!#">
                            <img className="avatar" src="/images/cmt-avatar.png" alt="img" />
                          </a>
                        </div>
                        <div className="media-body">
                          <div className="comment-content">{item.comment}</div>
                          <div className="comment-info">
                            <h5>{item.tenkhachhang}</h5>
                            <div className="comment-date">
                              <i className="pe-7s-clock"></i>
                              {new Date(item.ngayreview).toLocaleString('vi-VN')}
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ol>
                <div className="comment-respond pe-7s-user">
                  <form action="!#" className="comment-form" onSubmit={reviewHandler}>
                    <div className="wrap-textarea">
                      <textarea
                        className="textarea-form"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Viết đánh giá*"
                      />
                    </div>
                    <button type="submit">ĐÁNH GIÁ</button>
                  </form>
                </div>
                <div style={{ marginTop: '10px' }}>
                  {errorReview && errorReview.message && <Message severity="info">{errorReview.message}</Message>}
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabPanelProduct;
