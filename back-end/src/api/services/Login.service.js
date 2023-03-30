const comparePassword = require('../../utils/crypto');
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
    attributes: { exclude: ['id', 'password'] } });
  return user;
};

module.exports = {
  validateUser,
  findByEmail,
};