module.exports = (sequelize, Sequelize) => {
  const hoadon = sequelize.define(
    'hoadon',
    {
      idhoadon: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sohoadon: {
        type: Sequelize.STRING(20),
      },
      ngaytaohoadon: {
        type: Sequelize.DATE,
      },
      idnguoidung: {
        type: Sequelize.INTEGER,
      },
      tinhtrang: {
        type: Sequelize.INTEGER,
      },
      tongtien: {
        type: Sequelize.DECIMAL(15, 0),
      },
      idkhachhang: {
        type: Sequelize.INTEGER,
      },
      trahang: {
        type: Sequelize.INTEGER,
      },
      diachigiaohang: {
        type: Sequelize.STRING(200),
      },
      hinhthucthanhtoan: {
        type: Sequelize.STRING(30),
      },
      trangthaihoadon: {
        type: Sequelize.INTEGER,
      },
      congno: {
        type: Sequelize.DECIMAL(15, 0),
      },
      hantracongno: {
        type: Sequelize.DATEONLY,
      },
      loaihoadon: {
        type: Sequelize.INTEGER,
      },
      tiengiaohang: {
        type: Sequelize.DECIMAL(15, 0),
      },
      sodienthoai: {
        type: Sequelize.INTEGER,
      },
      view: {
        type: Sequelize.INTEGER,
      },
      idhinhthuc: {
        type: Sequelize.INTEGER,
      },
      mahuydon: {
        type: Sequelize.STRING(7),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return hoadon;
};
