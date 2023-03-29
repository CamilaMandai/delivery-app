const LoginService = require('../services/Login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await LoginService.validateUser(email, password);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
