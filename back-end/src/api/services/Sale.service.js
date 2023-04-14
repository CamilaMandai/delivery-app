const { Sale } = require('../../database/models');

const NOTFOUND = 'Sale not found';

const create = async ({
  userId, 
  sellerId, 
  totalPrice, 
  deliveryAddress, 
  deliveryNumber, 
}) => {
  const saleDate = new Date();
  const sale = await Sale.create({
    userId, 
    sellerId, 
    totalPrice, 
    deliveryAddress, 
    deliveryNumber, 
    saleDate,
    status: 'Pendente',
  });
  return sale;
};

const findBySellerId = async (id) => {
  const sale = await Sale.findAll({ where: { sellerId: id } });
  if (!sale) {
    return { type: 404, message: NOTFOUND };
  }
  return sale;
};

const findByUserId = async (id) => {
  const sale = await Sale.findAll({ where: { userId: id } });
  if (!sale) {
    return { type: 404, message: NOTFOUND };
  }
  return sale;
};

const findBySaleId = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  if (!sale) {
    return { type: 404, message: NOTFOUND };
  }
  return sale;
};

const updateStatus = async (id, newStatus) => {
  await Sale.update({ status: newStatus }, { where: { id } });
};

module.exports = {
  create,
  findBySellerId,
  findByUserId,
  findBySaleId,
  updateStatus,
};
