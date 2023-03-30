const { Router } = require('express');
const LoginController = require('../controllers/Login.controller');

const router = Router();

router.post('/', LoginController.register);

module.exports = router;