const express = require('express');
const { login, register, getProfile, updateProfile } = require('../controllers/taikhoan.Controller');
const { protect } = require('../middleware/authMiddleware');
const { checkLogIn, checkRegister, checkUpdateProfile } = require('../middleware/validatorMiddleware');
const router = express.Router();

router.route('/profile').get(protect, getProfile);
router.route('/login').post(checkLogIn, login);
router.route('/register').post(checkRegister, register);
router.route('/update').put(protect, checkUpdateProfile, updateProfile);

module.exports = router;
