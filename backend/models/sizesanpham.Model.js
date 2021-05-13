module.exports = (sequelize, Sequelize) => {
  const sizesanpham = sequelize.define(
    'sizesanpham',
    {
      idsize: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tensize: {
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
  return sizesanpham;
};
