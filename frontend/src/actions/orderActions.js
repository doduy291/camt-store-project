import axios from 'axios';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_ACCOUNT_FAIL,
  ORDER_ACCOUNT_REQUEST,
  ORDER_ACCOUNT_SUCCESS,
  ORDER_CANCEL_SUCCESS,
  ORDER_CANCEL_RESET,
} from '../constants/orderConstants';

export const createOrderAction = (orderItem) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    const {
      taikhoanLogin: { taikhoanInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${taikhoanInfo.token}`,
      },
    };
    const { data } = await axios.post('/api/order/create-order', orderItem, config);
    console.log(data);
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const orderDetailAction = (maHD) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/order/order-detail/${maHD}`);
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
    dispatch({
      type: ORDER_CANCEL_RESET,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const orderAccountAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_ACCOUNT_REQUEST });
    const { taikhoanInfo } = getState().taikhoanLogin;
    const config = {
      headers: {
        Authorization: `${taikhoanInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/order/account-order`, config);
    dispatch({
      type: ORDER_ACCOUNT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_ACCOUNT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const orderCancelAction = (sohoadon) => async (dispatch, getState) => {
  const { taikhoanInfo } = getState().taikhoanLogin;
  const config = {
    headers: {
      Authorization: `${taikhoanInfo.token}`,
    },
  };
  await axios.put(`/api/order/cancel/${sohoadon}`, {}, config);
  dispatch({ type: ORDER_CANCEL_SUCCESS });
};
