const { Router } = require('express');
const ProductSaleController = require('../controllers/SaleProduct.controller');

const router = Router();

router.post('/', ProductSaleController.create);
router.get('/:id', ProductSaleController.findBySaleId);

module.exports = router;