module.exports = (sequelize, Sequelize) => {
  const sanpham = sequelize.define(
    'sanpham',
    {
      idsanpham: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tensanpham: {
        type: Sequelize.STRING(50),
      },
      ngaytao: {
        type: Sequelize.DATEONLY,
      },
      masanpham: {
        type: Sequelize.STRING(14),
      },
      motasanpham: {
        type: Sequelize.TEXT,
      },
      giabanle: {
        type: Sequelize.DECIMAL(15, 0),
      },
      giabanbuon: {
        type: Sequelize.DECIMAL(15, 0),
      },
      gianhap: {
        type: Sequelize.DECIMAL(15, 0),
      },
      khoiluong: {
        type: Sequelize.INTEGER,
      },
      donvitinh: {
        type: Sequelize.STRING(5),
      },
      tonkho: {
        type: Sequelize.INTEGER,
      },
      idloaisanpham: {
        type: Sequelize.INTEGER,
      },
      idhangsanpham: {
        type: Sequelize.INTEGER,
      },
      thuoctinhkhachhang: {
        type: Sequelize.STRING(20),
      },
      anhsanpham: {
        type: Sequelize.BLOB('medium'),
      },
      idsizesanpham: {
        type: Sequelize.INTEGER,
      },
      idmausanpham: {
        type: Sequelize.INTEGER,
      },
      slug: {
        type: Sequelize.STRING,
      },
      anhsanphampath: {
        type: Sequelize.TEXT,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return sanpham;
};
