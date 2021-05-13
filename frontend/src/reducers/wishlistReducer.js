import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from '../constants/wishlistConstants';

export const wishlistReducer = (state = {}, action) => {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      const item = action.payload;
      const existItem = state.wishItems.find((eItem) => eItem.idsanpham === item.idsanpham);
      if (existItem) {
        return { ...state, wishItems: state.wishItems.map((x) => x) };
      } else {
        return { ...state, wishItems: [...state.wishItems, item] };
      }
    case WISHLIST_REMOVE_ITEM:
      return { ...state, wishItems: state.wishItems.filter((x) => x.idsanpham !== action.payload.idsanpham) };
    default:
      return state;
  }
};
