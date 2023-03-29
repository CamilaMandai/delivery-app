'use strict';
import { Model, STRING, INTEGER, DECIMAL } from "sequelize";
import db from ".";


class Product extends Model {
  id;
  name;
  price;
  urlImage;
}

  Product.init(
  {
    id: { 
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true ,
    },
    name: {type: STRING(100)},
    price: {type: DECIMAL(4,2)},
    urlImage: {type: STRING(200)},
  },
  { 
    timestamps: false, 
    tableName: 'products', 
    underscored: true,
    sequelize: db,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, { foreignKey: 'productId' });
  };


export default Product;