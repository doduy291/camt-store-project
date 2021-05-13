module.exports = (sequelize, Sequelize) => {
  const mausanpham = sequelize.define(
    'mausanpham',
    {
      idmausanpham: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tenmausanpham: {
        type: Sequelize.STRING(30),
      },
      mota: {
        type: Sequelize.STRING(100),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return mausanpham;
};
