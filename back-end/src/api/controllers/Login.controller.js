const LoginService = require('../services/Login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const [token, user] = await Promise.all([
    LoginService.validateUser(email, password),
    LoginService.findByEmail(email),
  ]);
  return res.status(200).json({ token, user });
};

module.exports = {
  login,
};