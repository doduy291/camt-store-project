import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  taikhoanLoginReducer,
  taikhoanRegisterReducer,
  taikhoanProfileReducer,
  taikhoanProfileUpdateReducer,
} from './reducers/taikhoanReducers';
import {
  sanphamListReducer,
  sanphamDetailsReducer,
  sanphamCreateReviewReducer,
  sanphamRelatedReducer,
} from './reducers/sanphamReducers';
import { cartReducer } from './reducers/cartReducer';
import {
  orderCreateReducer,
  orderDetailReducer,
  orderAccountReducer,
  orderCancelReducer,
} from './reducers/orderReducers';
import { wishlistReducer } from './reducers/wishlistReducer';

const reducer = combineReducers({
  taikhoanLogin: taikhoanLoginReducer,
  taikhoanRegister: taikhoanRegisterReducer,
  taikhoanProfile: taikhoanProfileReducer,
  taikhoanProfileUpdate: taikhoanProfileUpdateReducer,
  sanphamList: sanphamListReducer,
  sanphamDetail: sanphamDetailsReducer,
  sanphamCreateReview: sanphamCreateReviewReducer,
  sanphamRelated: sanphamRelatedReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetail: orderDetailReducer,
  orderAccount: orderAccountReducer,
  orderCancel: orderCancelReducer,
  wishList: wishlistReducer,
});

const taikhoanInfoFromStorage = localStorage.getItem('taikhoanInfo')
  ? JSON.parse(localStorage.getItem('taikhoanInfo'))
  : null;
const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const wishItemFromStorage = localStorage.getItem('wishItems') ? JSON.parse(localStorage.getItem('wishItems')) : [];

const initialState = {
  taikhoanLogin: { taikhoanInfo: taikhoanInfoFromStorage },
  cart: { cartItems: cartItemFromStorage },
  wishList: { wishItems: wishItemFromStorage },
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
