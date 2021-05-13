import axios from 'axios';
import {
  SANPHAM_LIST_FAIL,
  SANPHAM_LIST_SUCCESS,
  SANPHAM_LIST_REQUEST,
  SANPHAM_DETAILS_FAIL,
  SANPHAM_DETAILS_REQUEST,
  SANPHAM_DETAILS_SUCCESS,
  SANPHAM_REVIEW_FAIL,
  SANPHAM_REVIEW_REQUEST,
  SANPHAM_REVIEW_SUCCESS,
  SANPHAM_RELATED_FAIL,
  SANPHAM_RELATED_REQUEST,
  SANPHAM_RELATED_SUCCESS,
  SANPHAM_COLOR_SUCCESS,
  SANPHAM_SIZE_SUCCESS,
} from '../constants/sanphamConstants';

export const sanphamListAction = (keyword = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({
      type: SANPHAM_LIST_REQUEST,
    });
    const { data } = await axios.get(`/api/sanpham?keyword=${keyword}&pageNumber=${pageNumber}`);
    dispatch({
      type: SANPHAM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SANPHAM_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const sanphamDetailsAction = (slug, size = '', color = '') => async (dispatch) => {
  try {
    dispatch({ type: SANPHAM_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/sanpham/${slug}?size=${size}&color=${color}`);
    dispatch({
      type: SANPHAM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SANPHAM_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const sanphamCreateReviewAction = (id, review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SANPHAM_REVIEW_REQUEST,
    });
    const { taikhoanInfo } = getState().taikhoanLogin;
    const configs = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${taikhoanInfo.token}`,
      },
    };
    await axios.post(`/api/sanpham/review/${id}`, review, configs);
    dispatch({
      type: SANPHAM_REVIEW_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: SANPHAM_REVIEW_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const sanphamRelatedAction = (idsanpham) => async (dispatch) => {
  try {
    dispatch({
      type: SANPHAM_RELATED_REQUEST,
    });
    const { data } = await axios.get(`/api/sanpham/relation/${idsanpham}`);
    dispatch({
      type: SANPHAM_RELATED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SANPHAM_RELATED_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const dataColor = (slug) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/sanpham/${slug}/color`);
    dispatch({
      type: SANPHAM_COLOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const dataSize = (slug) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/sanpham/${slug}/size`);
    dispatch({
      type: SANPHAM_SIZE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
