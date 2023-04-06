const { Router } = require('express');
const AdminController = require('../controllers/Admin.controller');

const router = Router();

router.post('/', AdminController.adminRegister);

module.exports = router;
