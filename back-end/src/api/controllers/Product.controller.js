const ProductService = require('../services/Product.service');

const getAll = async (_req, res) => {
  const products = await ProductService.getAll();
  return res.status(200).json(products);
};

module.exports = {
  getAll,
};