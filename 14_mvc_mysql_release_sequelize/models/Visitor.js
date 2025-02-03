const Visitor = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    'visitor',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT('medium'),
      },
    },
    {}
  );
  return model;
};
