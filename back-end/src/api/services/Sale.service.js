const { Sale } = require('../../database/models');

const create = async ({
  userId, 
  sellerId, 
  totalPrice, 
  deliveryAddress, 
  deliveryNumber, 
  saleDate }) => {
  const sale = await Sale.create({
    userId, 
    sellerId, 
    totalPrice, 
    delivery_address: deliveryAddress, 
    delivery_number: deliveryNumber, 
    sale_date: saleDate,
    status: 'pendente',
  });
  return sale;
};

const findBySellerId = async (id) => {
  const sale = await Sale.findOne({ where: { seller_id: id } });
  if (!sale) {
    return { type: 404, message: 'Sale not found' };
  }
  return sale;
};

const findByUserId = async (id) => {
  const sale = await Sale.findOne({ where: { user_id: id } });
  if (!sale) {
    return { type: 404, message: 'Sale not found' };
  }
  return sale;
};

const findBySaleId = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  if (!sale) {
    return { type: 404, message: 'Sale not found' };
  }
  return sale;
};

module.exports = {
  create,
  findBySellerId,
  findByUserId,
  findBySaleId,
};