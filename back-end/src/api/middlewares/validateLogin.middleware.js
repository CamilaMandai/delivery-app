const LoginService = require('../services/Login.service');

const isInvalidLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const token = await LoginService.validateUser(email, password);
  if (token.type) {
    return res.status(token.type).json({ message: token.message });
  }
  return next();
};

module.exports = {
  isInvalidLogin,
};