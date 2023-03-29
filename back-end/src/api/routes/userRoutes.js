const { Router } = require('express');
const LoginController = require('../controllers/Login.controller');
// const LoginService = require('../services/Login.service');

const router = Router();
// const loginService = new LoginService();
// const loginService = new LoginService();
const loginController = new LoginController();

router.post('/', 
  (req, res, next) => loginController.isInvalidLogin(req, res, next),
  (req, res) => loginController.login(req, res));

module.exports = router;