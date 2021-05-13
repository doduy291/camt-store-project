import toast from 'react-hot-toast';

// Profile
export const successUpdateInfoNotice = () => {
  return toast.success(`Đã cập nhật thông tin tài khoản.`, {
    style: {
      background: '#ca7379',
      color: '#fff',
    },
    duration: 5000,
  });
};

// CART
export const addToCartNotice = (qty, tensanpham, size, color) => {
  return toast.success(`Đã thêm ${qty} ${tensanpham} (Size: ${size}, ${color}) vào giỏ hàng.`, {
    style: {
      background: '#ca7379',
      color: '#fff',
    },
    duration: 3000,
  });
};
export const removeCartNotice = (tensanpham) => {
  return toast.success(`Đã xóa sản phẩm "${tensanpham}" khỏi giỏ hàng`, {
    style: {
      background: '#ca7379',
      color: '#fff',
    },
    duration: 2000,
    iconTheme: {
      primary: '#ff4b4b',
      secondary: '#fff',
    },
  });
};

// WISH LIST
export const addToWishListNotice = (tensanpham) => {
  return toast.success(`Đã thêm "${tensanpham}" vào WishList`, {
    style: {
      background: '#ca7379',
      color: '#fff',
    },
    duration: 2000,
    icon: '❤️',
  });
};
export const removeWishListNotice = (tensanpham) => {
  return toast.success(`Đã xóa sản phẩm "${tensanpham}" khỏi WishList`, {
    style: {
      background: '#ca7379',
      color: '#fff',
    },
    duration: 3000,
    iconTheme: {
      primary: '#ff4b4b',
      secondary: '#fff',
    },
  });
};

// REVIEW - COMMENT
export const successReviewNotice = () => {
  return toast.success(`Cám ơn bạn đã đánh giá.`, {
    style: {
      background: '#ca7379',
      color: '#fff',
    },
    duration: 2000,
    icon: '⭐',
  });
};

export const subscribeNotice = () => {
  return toast.success(`Cám ơn bạn đã đăng ký nhận tin tức từ CamT`, {
    style: {
      background: '#ca7379',
      color: '#fff',
    },
    duration: 2000,
    icon: '❤️',
  });
};
