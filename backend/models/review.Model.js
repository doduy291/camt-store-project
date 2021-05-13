module.exports = (sequelize, Sequelize) => {
  const review = sequelize.define(
    'review',
    {
      idreview: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tenkhachhang: {
        type: Sequelize.STRING,
      },
      idsanpham: {
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.TEXT('medium'),
      },
      ngayreview: {
        type: Sequelize.DATE,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return review;
};
