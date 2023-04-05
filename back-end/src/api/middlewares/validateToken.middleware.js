const { decodeToken } = require('../../utils/jwt');

const isValidToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const user = decodeToken(authorization);
  if (!user) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  req.user = user;
  return next();
};

module.exports = {
  isValidToken,
};