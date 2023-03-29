const comparePassword = require('../../utils/crypto');
const { User } = require('../../database/models');
// import User from '../../database/models/User';
const jwtUtils = require('../../utils/jwt');

const validateUser = async (email, password) => {
    const user = await User.findOne({
      where: { email },
    });
    if (user && comparePassword(password, user.password)) {
      const token = jwtUtils.generateToken(user);
      return token;
    } 
    return { type: 404, message: 'Not found' };
  };

// const findAll = async () => {
//   const allUsers = await User.findAll();
//   console.log(allUsers);
//   return allUsers;
// }

module.exports = {
  validateUser,
};
// module.exports = findAll;