const { Router } = require('express');
const SaleController = require('../controllers/Sale.controller');

const router = Router();

router.post('/', SaleController.create);
router.get('/seller/:id', SaleController.findBySellerId);
router.get('/customer/:id', SaleController.findByUserId);
router.get('/:id', SaleController.findBySaleId);

module.exports = router;