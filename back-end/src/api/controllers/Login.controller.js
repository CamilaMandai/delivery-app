const LoginService = require('../services/Login.service');
const jwt = require('../../utils/jwt');

const login = async (req, res) => {
  const { email, password } = req.body;
  const [token, user] = await Promise.all([
    LoginService.validateUser(email, password),
    LoginService.findByEmail(email),
  ]);
  return res.status(200).json({ token, user });
};

const validateToken = (req, res) => {
  const { token } = req.body;
  const isValid = jwt.decodeToken(token);
  return res.status(200).json(isValid);
};

module.exports = {
  login,
  validateToken,
};