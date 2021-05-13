require('dotenv').config();

module.exports = {
  HOST: '103.138.88.11',
  USER: 'sho71306_Adminchaungan',
  PASSWORD: 'Duantotnghiep2020',
  DB: 'sho71306_quanaocamt',
  dialect: 'mysql',
  // HOST: 'localhost',
  // USER: 'root',
  // PASSWORD: 'songlong',
  // DB: 'camt',
  // dialect: 'mysql',
  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
};
