const express = require('express');
const router = express.Router();
const { createOrder, getOrderDetail, getAccountOrders, cancelOrder } = require('../controllers/order.Controller');
const { protect } = require('../middleware/authMiddleware');
const { checkPlaceOrder } = require('../middleware/validatorMiddleware');

router.route('/account-order').get(protect, getAccountOrders);
router.route('/order-detail/:sohoadon').get(getOrderDetail);
router.route('/create-order').post(protect, checkPlaceOrder, createOrder);
router.route('/cancel/:sohoadon').put(protect, cancelOrder);

module.exports = router;
