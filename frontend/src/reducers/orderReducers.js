import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_CREATE_RESET,
  ORDER_ACCOUNT_FAIL,
  ORDER_ACCOUNT_REQUEST,
  ORDER_ACCOUNT_SUCCESS,
  ORDER_ACCOUNT_RESET,
  ORDER_CANCEL_SUCCESS,
  ORDER_CANCEL_RESET,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDetailReducer = (state = { order: { khachhang: {}, chitiethoadon: [] } }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderAccountReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_ACCOUNT_REQUEST:
      return { ...state, loading: true };
    case ORDER_ACCOUNT_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_ACCOUNT_RESET:
      return { orders: [] };
    default:
      return state;
  }
};

export const orderCancelReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CANCEL_SUCCESS:
      return { success: true };
    case ORDER_CANCEL_RESET:
      return {};
    default:
      return state;
  }
};
