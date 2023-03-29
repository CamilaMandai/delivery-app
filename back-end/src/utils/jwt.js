const jsonwebtoken = require('jsonwebtoken');

const jwt = jsonwebtoken;

const TOKEN_SECRET = process.key || 'secret_key';

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  try {
    return jwt.sign(payload.dataValues, TOKEN_SECRET, jwtConfig);
  } catch (error) {
    throw new Error('Falha ao gerar token');
  }
};

const decodeToken = (token) => {
  try {
    const result = jwt.verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    // console.log('deu ruim');
    return null;
  }
};

module.exports = {
  generateToken,
  decodeToken,
};
