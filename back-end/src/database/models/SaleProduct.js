'use strict';
import { Model, INTEGER } from "sequelize";
import db from ".";
import Product from "./Product";
import Sale from "./Sale";


class SalesProduct extends Model {
  saleId;
  productId;
  quantity;
}

  SalesProduct.init( {
    saleId: { 
      type: INTEGER, 
      primaryKey: true, 
    },
    productId: { 
      type: INTEGER,
      primaryKey: true,
    },
    quantity: {type: INTEGER,}
  },{ 
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
    sequelize: db,
  });

  
  SalesProduct.belongsTo(Sale, { foreignKey: 'saleId' });
  SalesProduct.belongsTo(Product, { foreignKey: 'productId' })
  

  export default SalesProduct;