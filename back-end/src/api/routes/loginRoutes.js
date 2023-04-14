const { Router } = require('express');
const LoginController = require('../controllers/Login.controller');
const { isInvalidLogin } = require('../middlewares/validateLogin.middleware');

const router = Router();

router.post('/', isInvalidLogin, LoginController.login);
router.post('/validateToken', LoginController.validateToken);
router.get('/getAll', LoginController.findAll);
router.delete('/:id', LoginController.remove);
module.exports = router;