const { createHash } = require('../../utils/crypto');
const { User } = require('../../database/models');
const jwtUtils = require('../../utils/jwt');

const getUserByEmail = async (email) => {
  const user = await User.findOne({ 
    where: { email }, 
    attributes: { exclude: ['password'] } });
  return user;
};

const adminRegister = async (name, email, password, role = 'administrator') => {
  const isUser = await getUserByEmail(email);
  if (isUser) return { status: 409, message: 'User already exists' };

  const hash = createHash(password);
  const newUser = await User.create({ name, email, password: hash, role });

  if (!newUser) return { status: 404, message: 'Error admin service l20' };

  const newUserCustomer = {
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
  };

  const token = jwtUtils.tokenAdmin(newUserCustomer);
  const result = { newUser, newUserCustomer, token };
  return result;
};

module.exports = {
  getUserByEmail,
  adminRegister,
};
