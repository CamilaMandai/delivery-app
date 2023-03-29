import { Model, STRING, INTEGER, DATE, DECIMAL } from "sequelize";
import db from ".";
import User from "./User";

class Sale extends Model {
  id;
  userId;
  saleId;
  totalPrice;
  deliveryAddress;
  deliveryNumber;
  saleDate;
  status;
}

Sale.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
      foreignKey: true,
      field: "user_id",
      references: {
        model: "users",
        key: "id",
      },
    },
    sellerId: {
      type: INTEGER,
      allowNull: false,
      foreignKey: true,
      field: "seller_id",
      references: {
        model: "users",
        key: "id",
      },
    },
    totalPrice: {
      type: DECIMAL(9, 2),
      allowNull: false,
      field: "total_price",
    },
    deliveryAddress: {
      type: STRING(100),
      allowNull: false,
      field: "delivery_address",
    },
    deliveryNumber: {
      type: STRING(50),
      allowNull: false,
      field: "delivery_number",
    },
    saleDate: {
      type: DATE,
      allowNull: false,
      field: "sale_date",
    },
    status: {
      type: STRING(50),
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: "sales",
  }
);
// ERRO PODE SER AQUI NO AS !!!!!!
Sale.belongsTo(User, { foreignKey: "userId", as: "users" });
Sale.belongsTo(User, { foreignKey: "sellerId", as: "sellers" });

User.hasMany(Sale, { foreignKey: "userId", as: "user" });
User.hasMany(Sale, { foreignKey: "sellerId", as: "seller" });

export default Sale;
