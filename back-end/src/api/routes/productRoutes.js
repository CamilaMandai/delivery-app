const { Router } = require('express');
const ProductController = require('../controllers/Product.controller');

const router = Router();

router.get('/', ProductController.getAll);

module.exports = router;