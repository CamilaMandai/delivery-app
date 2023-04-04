const SaleService = require('../services/Sale.service');

const create = async (req, res) => {
   const sale = await SaleService.create(req.body);
   return res.status(201).json(sale);
};

const findBySellerId = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.findBySellerId(id);
  if (sale.type) {
    return res.status(sale.type).json(sale.message);
  }
  return res.status(201).json(sale);
};

const findByUserId = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.findByUserId(id);
  if (sale.type) {
    return res.status(sale.type).json(sale.message);
  }
  return res.status(201).json(sale);
};

const findBySaleId = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.findBySaleId(id);
  if (sale.type) {
    return res.status(sale.type).json(sale.message);
  }
  return res.status(201).json(sale);
};

module.exports = {
  create,
  findBySellerId,
  findByUserId,
  findBySaleId,
};