const asyncHandler = require('express-async-handler');
const dbConfig = require('../configs/db.config');
const jwt = require('jsonwebtoken');
const db = require('../server');
const DBkhachhang = db.khachhang;

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    try {
      token = req.headers.authorization.split(' ')[1] || req.headers.authorization;
      const decoded = jwt.verify(token, dbConfig.JWT_SECRET);
      req.user = await DBkhachhang.findOne({
        where: { idkhachhang: decoded.idkhachhang },
        attributes: ['idkhachhang', 'tenkhachhang'],
      });
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized, token fail!');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('No token');
  }
});
