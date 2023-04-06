const AdminService = require('../services/Admin.service');

const adminRegister = async (req, res) => {
  const { name, email, password, role } = req.body;

  const newRegistro = await AdminService.adminRegister(name, email, password, role);
  if (newRegistro.status) {
    return res.status(newRegistro.status).json({ message: newRegistro.message });
  }

  const result = { ...newRegistro.newUser.dataValues, token: newRegistro.token };
  return res.status(201).json(result);
};

module.exports = {
  adminRegister,
};
