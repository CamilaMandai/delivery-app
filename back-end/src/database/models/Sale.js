import { Model, STRING, INTEGER, DATE, DECIMAL } from "sequelize";
import db from ".";

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
    user_id: {
      type: INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    seller_id: {
      type: INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    total_price: {
      type: DECIMAL(9, 2),
      allowNull: false,
    },
    delivery_address: {
      type: STRING(100),
      allowNull: false,
    },
    delivery_number: {
      type: STRING(50),
      allowNull: false,
    },
    sale_date: {
      type: DATE,
      allowNull: false,
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

export default Sale;
