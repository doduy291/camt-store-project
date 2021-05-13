import React from 'react';

const CartEmpty = () => {
  return (
    <div className="error-content" style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
      <h1 style={{ border: 'unset' }}>
        <img
          className="img-responsive"
          src="https://polytronofficial.com/assets/images/empty-cart.png"
          alt="img"
          style={{ width: '100%' }}
        />
      </h1>
      <p>
        Giỏ hàng trống
        <br />
        Đi mua hàng nào! <a href="/shop">Shop</a>.
      </p>
    </div>
  );
};

export default CartEmpty;
