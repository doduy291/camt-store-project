import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_CHANGEQTY_ITEM,
  CART_DECREASE_ITEM,
  CART_INCREASE_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY,
} from '../constants/cartConstants';

export const addToCart = (id, qty, slug) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/sanpham/${slug}?idsp=${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      idsanpham: data.idsanpham,
      tensanpham: data.tensanpham,
      giabanle: data.giabanle,
      anhsanphampath: data.anhsanphampath,
      tonkho: data.tonkho,
      slug: data.slug,
      tenmausanpham: data.mausanpham.tenmausanpham,
      tensizesanpham: data.sizesanpham.tensize,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: {
      idsanpham: id,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const increaseItemCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_INCREASE_ITEM,
    payload: {
      idsanpham: id,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const decreaseItemCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_DECREASE_ITEM,
    payload: {
      idsanpham: id,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const changeValueInputItemCart = (id, qty) => async (dispatch, getState) => {
  dispatch({
    type: CART_CHANGEQTY_ITEM,
    payload: {
      idsanpham: id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const emptyCart = () => async (dispatch) => {
  dispatch({
    type: CART_EMPTY,
  });
  localStorage.removeItem('cartItems');
};
