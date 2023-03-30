const { Router } = require('express');
const LoginController = require('../controllers/Login.controller');
const { isInvalidLogin } = require('../middlewares/validateLogin.middleware');

const router = Router();

router.post('/', isInvalidLogin, LoginController.login);
module.exports = router;