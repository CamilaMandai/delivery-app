const User = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    },
  );

  return UserTable;
};

module.exports = User;