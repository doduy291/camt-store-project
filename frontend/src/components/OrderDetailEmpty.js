import React from 'react';

const OrderDetailEmpty = () => {
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
      <p>Hóa đơn không tồn tại.</p>
    </div>
  );
};

export default OrderDetailEmpty;
