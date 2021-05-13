import {
  TAIKHOAN_LOGIN_FAIL,
  TAIKHOAN_LOGIN_REQUEST,
  TAIKHOAN_LOGIN_SUCCESS,
  TAIKHOAN_LOGOUT,
  TAIKHOAN_REGISTER_REQUEST,
  TAIKHOAN_REGISTER_FAIL,
  TAIKHOAN_REGISTER_SUCCESS,
  TAIKHOAN_PROFILE_REQUEST,
  TAIKHOAN_PROFILE_SUCCESS,
  TAIKHOAN_PROFILE_FAIL,
  TAIKHOAN_PROFILE_UPDATE_FAIL,
  TAIKHOAN_PROFILE_UPDATE_REQUEST,
  TAIKHOAN_PROFILE_UPDATE_SUCCESS,
} from '../constants/taikhoanConstants';
import { ORDER_ACCOUNT_RESET } from '../constants/orderConstants';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: TAIKHOAN_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/taikhoan/login', { email, password }, config);
    dispatch({
      type: TAIKHOAN_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('taikhoanInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TAIKHOAN_LOGIN_FAIL,
      payload: error && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const register = (email, password, confirmpassword) => async (dispatch) => {
  try {
    dispatch({ type: TAIKHOAN_REGISTER_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/taikhoan/register', { email, password, confirmpassword }, config);
    dispatch({ type: TAIKHOAN_REGISTER_SUCCESS });
    dispatch({ type: TAIKHOAN_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('taikhoanInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TAIKHOAN_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('taikhoanInfo');
  dispatch({
    type: TAIKHOAN_LOGOUT,
  });
  dispatch({ type: ORDER_ACCOUNT_RESET });
};

export const getProfileAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TAIKHOAN_PROFILE_REQUEST });
    const { taikhoanInfo } = getState().taikhoanLogin;
    const configs = {
      headers: {
        Authorization: `${taikhoanInfo.token}`,
      },
    };
    const { data } = await axios.get('/api/taikhoan/profile', configs);
    dispatch({
      type: TAIKHOAN_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAIKHOAN_PROFILE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateProfileAction = (profile) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TAIKHOAN_PROFILE_UPDATE_REQUEST,
    });
    const { taikhoanInfo } = getState().taikhoanLogin;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${taikhoanInfo.token}`,
      },
    };
    const { data } = await axios.put('/api/taikhoan/update', profile, config);
    dispatch({
      type: TAIKHOAN_PROFILE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAIKHOAN_PROFILE_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
