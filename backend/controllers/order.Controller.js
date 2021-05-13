const asyncHandler = require('express-async-handler');
const db = require('../server');
const DBhoadon = db.hoadon;
const DBchitiethoadon = db.chitiethoadon;
const DBkhachhang = db.khachhang;
const DBsanpham = db.sanpham;

exports.createOrder = asyncHandler(async (req, res) => {
  const { name, phoneNumber, address, methodPay, orderItems, totalPrice } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    try {
      const maHDcustom = `HD${Number(Date.now() + Date.now())}`;
      const ngaygio = new Date().toLocaleString('sv-SE');
      // console.log(`${ngaygio.split(' ')[1].replace(/\//g, '-')} ${ngaygio.split(' ')[0].replace(/,/, '')}`);
      const checkKhacHang = await DBkhachhang.findOne({
        where: {
          idkhachhang: req.user.idkhachhang,
        },
      });
      if (checkKhacHang) {
        checkKhacHang.tenkhachhang = name;
        checkKhacHang.diachi = address;
        checkKhacHang.sodienthoai = phoneNumber;
        await checkKhacHang.save();
      }

      const createdOrder = await DBhoadon.build({
        sohoadon: maHDcustom,
        idnguoidung: 2,
        tinhtrang: 0,
        idkhachhang: req.user.idkhachhang,
        tongtien: totalPrice,
        ngaytaohoadon: `${ngaygio.split(' ')[0]} ${ngaygio.split(' ')[1]}`,
        hinhthucthanhtoan: methodPay,
        trangthaihoadon: 1,
        loaihoadon: 1,
        trahang: 1,
        congno: 0,
        diachigiaohang: address,
        sodienthoai: phoneNumber,
      }).save();

      orderItems.forEach(async (item) => {
        await DBchitiethoadon.build({
          idhoadon: createdOrder.idhoadon,
          idsanpham: item.idsanpham,
          soluong: item.qty,
          thanhtien: Number(item.giabanle * item.qty),
          uudai: 0,
        }).save();
      });
      const dataCreatedOrder = createdOrder.get({ plain: true });
      res.json(dataCreatedOrder);
    } catch (err) {
      console.log(err);
    }
  }
});

exports.getOrderDetail = asyncHandler(async (req, res) => {
  // Error, message empty
  let cache = {};
  let error = new Error();

  const order = await DBhoadon.findOne({
    where: {
      sohoadon: req.params.sohoadon,
    },
    include: [
      {
        model: DBkhachhang,
        attributes: {
          exclude: [
            'matkhau',
            'idkhachhang',
            'idnguoidung',
            'idloaikhachhang',
            'ngaysinh',
            'mangxahoi',
            'mota',
            'tag',
            'resetmatkhau',
          ],
        },
      },
      {
        model: DBchitiethoadon,
        as: 'chitiethoadon',
        include: [
          {
            model: DBsanpham,
            attributes: {
              exclude: ['anhsanpham'],
            },
          },
        ],
      },
    ],
  });
  if (order) {
    res.json(order);
  } else {
    res.status(401);
    cache = { ...cache, orderdetail: 'Hóa đơn không tồn tại.' };
    error = { ...error, ...cache };
    throw error;
  }
});

exports.getAccountOrders = asyncHandler(async (req, res) => {
  const order = await DBhoadon.findAll({
    where: { idkhachhang: req.user.idkhachhang },
  });
  res.json(order);
});

exports.cancelOrder = asyncHandler(async (req, res) => {
  const order = await DBhoadon.findOne({
    where: { sohoadon: req.params.sohoadon },
  });
  if (order) {
    order.trangthaihoadon = 5;
    const updated = await order.save();
    res.status(200).json(updated);
  } else {
    res.status(422);
    throw new Error('Không tìm thấy hóa đơn');
  }
});
