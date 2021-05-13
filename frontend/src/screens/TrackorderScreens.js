import React from 'react'

const TrackorderScreens = () => {
    return (
        <div className="main">
        <div className="container">
            <div className="header-page">
                <h1>THEO DÕI ĐƠN HÀNG CỦA BẠN</h1>
                <p>Để theo dõi đơn hàng của bạn, vui lòng nhập ID đơn hàng của bạn vào ô bên dưới và nhấn quay lại. Điều này đã được trao cho bạn trên biên nhận của bạn và trong email xác nhận mà bạn đáng lẽ đã nhận được.</p>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <form action="#" className="order-form">
                            <label for="order-id">ID Đơn Hàng</label>
                            <input className="input-form" type="text" id="order-id" placeholder="Tìm thấy trong email xác nhận đặt hàng của bạn" />
                            <label for="billing-email">Thanh toán bằng thư điện tử</label>
                            <input className="input-form" type="text" id="billing-email" placeholder="Email bạn dùng để thanh toán" />
                            <button type="submit">THEO DÕI</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TrackorderScreens
