module.exports = (sequelize, Sequelize) => {
  const chitiethoadon = sequelize.define(
    'chitiethoadon',
    {
      idchitiethoadon: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idhoadon: {
        type: Sequelize.INTEGER,
      },
      idsanpham: {
        type: Sequelize.INTEGER,
      },
      soluong: {
        type: Sequelize.INTEGER,
      },
      thanhtien: {
        type: Sequelize.DECIMAL(15, 0),
      },
      uudai: {
        type: Sequelize.DECIMAL(15, 0),
      },
      ghichu: {
        type: Sequelize.STRING(100),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return chitiethoadon;
};
