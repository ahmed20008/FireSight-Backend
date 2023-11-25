require("dotenv").config();
const jwt = require("jsonwebtoken");

const token_key = process.env.TOKEN_KEY;

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, token_key, {
    expiresIn: 14 * 24 * 60 * 60,
  });
};

module.exports.createResetToken = (id, password) => {
  const secret = token_key + password;
  return jwt.sign({ id }, secret, {
    expiresIn: '15m',
  });
};

module.exports.verifyResetToken = (token, password) => {
  const secret = token_key + password;
  return jwt.verify(token, secret)
};

module.exports.verifyToken = (token) => {
  return jwt.verify(token, token_key)
};