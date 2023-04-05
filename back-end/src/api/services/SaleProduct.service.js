const { SaleProduct } = require('../../database/models');

const create = async ({
  saleId,
  productId,
  quantity,
}) => {
  const newSaleProduct = await SaleProduct.create({
   saleId,
   productId,
   quantity,
  });
  return newSaleProduct;
};

const findBySaleId = async (id) => {
  const products = await SaleProduct.findAll({ where: { saleId: id } });
  return products;
};

module.exports = {
  create,
  findBySaleId,
};