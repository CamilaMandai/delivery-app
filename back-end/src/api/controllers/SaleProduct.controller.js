const SaleProduct = require('../services/SaleProduct.service');

const create = async (req, res) => {
  const newSaleProduct = await SaleProduct.create(req.body);
  return res.status(201).json(newSaleProduct);
};

const findBySaleId = async (req, res) => {
  const { id } = req.params;
  const products = await SaleProduct.findBySaleId(id);
  return res.status(200).json(products);
};

module.exports = {
  create,
  findBySaleId,
};