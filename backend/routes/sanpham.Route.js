const express = require('express');
const {
  getAllSanPham,
  getDetailSanPham,
  createSanPhamReview,
  getRelatedSanPham,
  updateSlugTenSanPham,
  getColorDetailSanPham,
  getSizeDetailSanPham,
  getSanPhamTrend,
} = require('../controllers/sanpham.Controller');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getAllSanPham);
router.route('/trend').get(getSanPhamTrend);
router.route('/:slug').get(getDetailSanPham);
router.route('/:slug/color').get(getColorDetailSanPham);
router.route('/:slug/size').get(getSizeDetailSanPham);
router.route('/:id').put(updateSlugTenSanPham);
router.route('/relation/:slug').get(getRelatedSanPham);
router.route('/review/:id').post(protect, createSanPhamReview);
module.exports = router;
