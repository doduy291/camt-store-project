import {
  SANPHAM_LIST_FAIL,
  SANPHAM_LIST_REQUEST,
  SANPHAM_LIST_SUCCESS,
  SANPHAM_DETAILS_FAIL,
  SANPHAM_DETAILS_REQUEST,
  SANPHAM_DETAILS_SUCCESS,
  SANPHAM_DETAILS_RESET,
  SANPHAM_REVIEW_FAIL,
  SANPHAM_REVIEW_REQUEST,
  SANPHAM_REVIEW_RESET,
  SANPHAM_REVIEW_SUCCESS,
  SANPHAM_RELATED_FAIL,
  SANPHAM_RELATED_REQUEST,
  SANPHAM_RELATED_SUCCESS,
  SANPHAM_COLOR_SUCCESS,
  SANPHAM_SIZE_SUCCESS,
} from '../constants/sanphamConstants';

export const sanphamListReducer = (state = { listSanPham: [] }, action) => {
  switch (action.type) {
    case SANPHAM_LIST_REQUEST:
      return { loading: true };
    case SANPHAM_LIST_SUCCESS:
      return {
        loading: false,
        listSanPham: action.payload.sanpham,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        totalsanpham: action.payload.totalsanpham,
      };
    case SANPHAM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sanphamDetailsReducer = (state = { detailSanPham: { review: [] }, sizes: [], colors: [] }, action) => {
  switch (action.type) {
    case SANPHAM_DETAILS_REQUEST:
      return { ...state, loading: false };
    case SANPHAM_DETAILS_SUCCESS:
      return { ...state, loading: false, detailSanPham: action.payload };
    case SANPHAM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case SANPHAM_DETAILS_RESET:
      return { detailSanPham: { review: [] }, sizes: [], colors: [] };
    case SANPHAM_COLOR_SUCCESS:
      return { ...state, colors: action.payload };
    case SANPHAM_SIZE_SUCCESS:
      return { ...state, sizes: action.payload };
    default:
      return state;
  }
};

export const sanphamCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case SANPHAM_REVIEW_REQUEST:
      return { loading: true };
    case SANPHAM_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case SANPHAM_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case SANPHAM_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const sanphamRelatedReducer = (state = { relatedSanPham: [] }, action) => {
  switch (action.type) {
    case SANPHAM_RELATED_REQUEST:
      return { loading: true };
    case SANPHAM_RELATED_SUCCESS:
      return {
        loading: false,
        relatedSanPham: action.payload,
      };
    case SANPHAM_RELATED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
