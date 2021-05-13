import React from 'react';

const OrderEmpty = () => {
  return (
    <div className="error-content">
      <h1 style={{ border: 'unset' }}>
        <img
          className="img-responsive"
          src="https://polytronofficial.com/assets/images/empty-cart.png"
          alt="img"
          style={{ width: '100%' }}
        />
      </h1>
      <p>
        Hóa đơn trống
        <br />
        Đi mua hàng nào! <a href="/shop">Shop</a>.
      </p>
    </div>
  );
};

export default OrderEmpty;
