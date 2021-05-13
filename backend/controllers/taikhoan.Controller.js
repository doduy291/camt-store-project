const db = require('../server');
const DBkhachhang = db.khachhang;
const Op = db.Sequelize.Op;
const generateToken = require('../utils/generateToken');
const asyncHandler = require('express-async-handler');

const actions = {
  existed: ['Email đã tồn tại!'],
  matchPass: ['Mật khẩu không trùng!'],
};

// @route POST api/taikhoan/login
exports.login = asyncHandler(async (req, res) => {
  // Error, message empty
  let cache = {};
  let error = new Error();

  const { email, password } = req.body;
  const taikhoan = await DBkhachhang.findOne({
    where: { email: email },
  });
  if (taikhoan && password === taikhoan.matkhau) {
    res.json({
      idkhachhang: taikhoan.idkhachhang,
      email: taikhoan.email,
      token: generateToken(taikhoan.idkhachhang),
    });
  } else {
    res.status(401);
    cache = { ...cache, password: actions['matchPass'] };
    error = { ...error, ...cache };
    throw error;
  }
});

// @route POST api/taikhoan/register
exports.register = asyncHandler(async (req, res) => {
  // Error, message empty
  let cache = {};
  let error = new Error();

  const { email, password } = req.body;
  const khachhangExist = await DBkhachhang.findOne({
    where: {
      email: email,
    },
  });
  if (khachhangExist) {
    res.status(401);
    cache = { ...cache, email: actions['existed'] };
    error = { ...error, ...cache };
    throw error;
  }
  const khachhang = await DBkhachhang.build({
    idloaikhachhang: 1,
    idnguoidung: 0,
    tenkhachhang: email,
    email: email,
    matkhau: password,
    gioitinh: 1,
    ngaysinh: '2021-04-11',
  }).save();
  if (khachhang) {
    res.status(201).json({
      idkhachhang: khachhang.idkhachhang,
      email: khachhang.email,
      token: generateToken(khachhang.idkhachhang),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

//@routes GET api/taikhoan/profile
// Access: Private
exports.getProfile = asyncHandler(async (req, res) => {
  const profile = await DBkhachhang.findOne({
    where: { idkhachhang: req.user.idkhachhang },
    attributes: {
      exclude: ['matkhau', 'resetmatkhau'],
    },
  });
  if (profile) {
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('Không tìm thấy thông tin tài khoản!');
  }
});

//@routes PUT api/taikhoan/update
// Access: Private
exports.updateProfile = asyncHandler(async (req, res) => {
  const khachhang = await DBkhachhang.findByPk(req.user.idkhachhang);
  if (khachhang) {
    const { tenkhachhang, sodienthoai, diachi, matkhau } = req.body;
    khachhang.tenkhachhang = tenkhachhang || khachhang.tenkhachhang;
    khachhang.sodienthoai = sodienthoai || khachhang.sodienthoai;
    khachhang.diachi = diachi || khachhang.diachi;
    if (matkhau) khachhang.matkhau = matkhau;
    const updated = await khachhang.save();
    res.status(201).json(updated);
  } else {
    res.status(404);
    throw new Error('Lỗi update thông tin tài khoản');
  }
});
