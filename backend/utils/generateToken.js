const jwt = require('jsonwebtoken');
const dbConfig = require('../configs/db.config');

const generateToken = (id) => {
  return jwt.sign({ idkhachhang: id }, dbConfig.JWT_SECRET, {
    expiresIn: 24 * 60 * 60,
  });
};

module.exports = generateToken;
