import {
  TAIKHOAN_LOGIN_FAIL,
  TAIKHOAN_LOGIN_REQUEST,
  TAIKHOAN_LOGIN_SUCCESS,
  TAIKHOAN_LOGOUT,
  TAIKHOAN_REGISTER_FAIL,
  TAIKHOAN_REGISTER_REQUEST,
  TAIKHOAN_REGISTER_SUCCESS,
  TAIKHOAN_PROFILE_FAIL,
  TAIKHOAN_PROFILE_RESET,
  TAIKHOAN_PROFILE_SUCCESS,
  TAIKHOAN_PROFILE_REQUEST,
  TAIKHOAN_PROFILE_UPDATE_FAIL,
  TAIKHOAN_PROFILE_UPDATE_REQUEST,
  TAIKHOAN_PROFILE_UPDATE_SUCCESS,
  TAIKHOAN_PROFILE_UPDATE_RESET,
} from '../constants/taikhoanConstants';

export const taikhoanLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case TAIKHOAN_LOGIN_REQUEST:
      return { loading: true };
    case TAIKHOAN_LOGIN_SUCCESS:
      return { loading: false, taikhoanInfo: action.payload };
    case TAIKHOAN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case TAIKHOAN_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const taikhoanRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case TAIKHOAN_REGISTER_REQUEST:
      return { loading: true };
    case TAIKHOAN_REGISTER_SUCCESS:
      return { loading: false };
    case TAIKHOAN_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const taikhoanProfileReducer = (state = { profile: {} }, action) => {
  switch (action.type) {
    case TAIKHOAN_PROFILE_REQUEST:
      return { ...state, loading: true };
    case TAIKHOAN_PROFILE_SUCCESS:
      return { loading: false, profile: action.payload };
    case TAIKHOAN_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case TAIKHOAN_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const taikhoanProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case TAIKHOAN_PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case TAIKHOAN_PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true, profileUpdated: action.payload };
    case TAIKHOAN_PROFILE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case TAIKHOAN_PROFILE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
