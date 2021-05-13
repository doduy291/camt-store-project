module.exports = (sequelize, Sequelize) => {
  const khachhang = sequelize.define(
    'khachhang',
    {
      idkhachhang: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idloaikhachhang: {
        type: Sequelize.INTEGER,
      },
      idnguoidung: {
        type: Sequelize.INTEGER,
      },
      tenkhachhang: {
        type: Sequelize.STRING(40),
      },
      sodienthoai: {
        type: Sequelize.STRING(10),
      },
      email: {
        type: Sequelize.STRING(40),
      },
      matkhau: {
        type: Sequelize.STRING(100),
      },
      ngaysinh: {
        type: Sequelize.DATEONLY,
      },
      diachi: {
        type: Sequelize.STRING(255),
      },
      gioitinh: {
        type: Sequelize.INTEGER,
      },
      mangxahoi: {
        type: Sequelize.STRING(100),
      },
      lancuoimuahang: {
        type: Sequelize.DATE,
      },
      tongtienhang: {
        type: Sequelize.DECIMAL(15, 0),
      },
      mota: {
        type: Sequelize.STRING(200),
      },
      tag: {
        type: Sequelize.STRING(10),
      },
      role: {
        type: Sequelize.STRING(5),
      },
      resetmatkhau: {
        type: Sequelize.STRING(150),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return khachhang;
};
