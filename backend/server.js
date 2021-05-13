const dbConfig = require('./configs/db.config');
const Sequelize = require('sequelize');

// Database Connection
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  //timezone database
  timezone: '+07:00',
  // Remove alert "Executing (default)..."
  logging: false,
});

sequelize
  .authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
    return;
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Require Model
db.sanpham = require('./models/sanpham.Model')(sequelize, Sequelize);
db.hoadon = require('./models/hoadon.Model')(sequelize, Sequelize);
db.chitiethoadon = require('./models/chitiethoadon.Model')(sequelize, Sequelize);
db.khachhang = require('./models/khachhang.Model')(sequelize, Sequelize);
db.review = require('./models/review.Model')(sequelize, Sequelize);
db.sizesanpham = require('./models/sizesanpham.Model')(sequelize, Sequelize);
db.mausanpham = require('./models/mausanpham.Model')(sequelize, Sequelize);

// Association
//Hoadon - Chitiethoadon - Sanpham
db.hoadon.belongsTo(db.khachhang, {
  foreignKey: 'idkhachhang',
});
db.hoadon.hasMany(db.chitiethoadon, { foreignKey: 'idhoadon', as: 'chitiethoadon' });
db.chitiethoadon.belongsTo(db.sanpham, { foreignKey: 'idsanpham' });

//Sanpham - Review
db.sanpham.hasMany(db.review, { foreignKey: 'idsanpham', as: 'review' });
// Sanpham - Mausanpham - Sizesanpham
db.sanpham.belongsTo(db.mausanpham, { foreignKey: 'idmausanpham' });
db.sanpham.belongsTo(db.sizesanpham, { foreignKey: 'idsizesanpham' });

// Đồng bộ cơ sở dữ liệu Sequelize Sync
sequelize.sync();
// sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });

module.exports = db;
