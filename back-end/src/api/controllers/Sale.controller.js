const SaleService = require('../services/Sale.service');
// const jwt = require('../../utils/jwt');

const create = async (req, res) => {
  //  const { token } = req.body;
  //  const isValid = jwt.decodeToken(token);
  //  if (!isValid) return res.status(401).json({ message: 'token invalid' });
   const sale = await SaleService.create(req.body);
   return res.status(201).json(sale);
};

const findBySellerId = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.findBySellerId(id);
  if (sale.type) {
    return res.status(sale.type).json(sale.message);
  }
  return res.status(200).json(sale);
};

const findByUserId = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.findByUserId(id);
  if (sale.type) {
    return res.status(sale.type).json(sale.message);
  }
  return res.status(200).json(sale);
};

const findBySaleId = async (req, res) => {
  const { id } = req.params;
  const sale = await SaleService.findBySaleId(id);
  if (sale.type) {
    return res.status(sale.type).json(sale.message);
  }
  return res.status(200).json(sale);
};

const updateStatus = async (req, res) => {
  const { id, newStatus } = req.body;
  await SaleService.updateStatus(id, newStatus);
  return res.status(204).json('ok');
};

module.exports = {
  create,
  findBySellerId,
  findByUserId,
  findBySaleId,
  updateStatus,
};
