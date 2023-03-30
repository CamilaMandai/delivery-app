const LoginService = require('../services/Login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await LoginService.validateUser(email, password);
  return res.status(200).json({ token });
};

const register = async (req, res) => {
  const result = await LoginService.register(req.body);
  if (result.type) {
    return res.status(result.type).json({ message: result.message });
  }
  return res.status(201).json(result.message);
};

module.exports = {
  login,
  register,
};
