import {
  CART_ADD_ITEM,
  CART_CHANGEQTY_ITEM,
  CART_DECREASE_ITEM,
  CART_INCREASE_ITEM,
  CART_REMOVE_ITEM,
  CART_EMPTY,
} from '../constants/cartConstants';

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((eItem) => eItem.idsanpham === item.idsanpham);
      if (existItem) {
        state.cartItems[state.cartItems.findIndex((eItemIndex) => eItemIndex.idsanpham === item.idsanpham)].qty +=
          item.qty;
        return { ...state, cartItems: state.cartItems.map((x) => x) };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return { ...state, cartItems: state.cartItems.filter((x) => x.idsanpham !== action.payload.idsanpham) };
    case CART_INCREASE_ITEM:
      state.cartItems[state.cartItems.findIndex((x) => x.idsanpham === action.payload.idsanpham)].qty++;
      return { ...state, cartItems: state.cartItems.map((x) => x) };
    case CART_DECREASE_ITEM:
      state.cartItems[state.cartItems.findIndex((x) => x.idsanpham === action.payload.idsanpham)].qty--;
      return { ...state, cartItems: state.cartItems.map((x) => x) };
    case CART_CHANGEQTY_ITEM:
      state.cartItems[state.cartItems.findIndex((x) => x.idsanpham === action.payload.idsanpham)].qty =
        action.payload.qty;
      return { ...state, cartItems: state.cartItems.map((x) => x) };
    case CART_EMPTY:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
