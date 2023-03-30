const crypto = require('crypto');

const createHash = (password) => crypto.createHash('md5').update(password).digest('hex');

const comparePassword = (password, savedHash) => {
  const passHash = createHash(password);
  return passHash === savedHash;
};

// console.log(createHash('batatinha'));
// console.log(comparePassword('batatinha', 'd3aa349c8d932ea71f11aa096ba29f61'));
// console.log(comparePassword('cenourinha', 'd3aa349c8d932ea71f11aa096ba29f61'));

module.exports = {
  comparePassword,
  createHash,
};