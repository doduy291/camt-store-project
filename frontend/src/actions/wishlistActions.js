import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from '../constants/wishlistConstants';

export const addToWishList = (id) => async (dispatch, getState) => {
  const { detailSanPham } = getState().sanphamDetail;
  if (detailSanPham.idsanpham === id) {
    dispatch({
      type: WISHLIST_ADD_ITEM,
      payload: {
        idsanpham: detailSanPham.idsanpham,
        tensanpham: detailSanPham.tensanpham,
        giabanle: detailSanPham.giabanle,
        anhsanphampath: detailSanPham.anhsanphampath,
        tonkho: detailSanPham.tonkho,
        slug: detailSanPham.slug,
      },
    });
  }
  localStorage.setItem('wishItems', JSON.stringify(getState().wishList.wishItems));
};
export const removeFromWishList = (id) => async (dispatch, getState) => {
  dispatch({
    type: WISHLIST_REMOVE_ITEM,
    payload: {
      idsanpham: id,
    },
  });
  localStorage.setItem('wishItems', JSON.stringify(getState().wishList.wishItems));
};
