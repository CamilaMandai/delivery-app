const { comparePassword, createHash } = require('../../utils/crypto');
const { User } = require('../../database/models');
const jwtUtils = require('../../utils/jwt');

const validateUser = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (user && comparePassword(password, user.password)) {
      const token = jwtUtils.generateToken(user);
      return token;
    } 
    return { type: 404, message: 'Not found' };
  };

const findByEmail = async (email) => {
  const user = await User.findOne({ 
    where: { email }, 
    attributes: { exclude: ['password'] } });
  return user;
};

const register = async ({ name, email, password }) => {
  const isUser = await User.findOne({
    where: { email },
  });
  if (!isUser) {
    const hash = createHash(password);
    await User.create({ name, email, password: hash, role: 'customer' });
    return { type: null, message: 'Created' };
  }
  return { type: 409, message: 'Conflict' };
};

const findAll = async () => {
  const users = await User.findAll();
  return (users);
};

const remove = async (id) => {
  await User.destroy({ where: { id }})
};

module.exports = {
  validateUser,
  findByEmail,
  register,
  findAll,
  remove,
};
