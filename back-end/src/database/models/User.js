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
    });
    User.associate = (models) => {
      User.hasMany(models.Sale, { as: 'SalesUser', foreignKey: 'userId' });
      User.hasMany(models.Sale, { as: 'SalesSeller', foreignKey: 'sellerId' });
    };

  return UserTable;
};

module.exports = User;