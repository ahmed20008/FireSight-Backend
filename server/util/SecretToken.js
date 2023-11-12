require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 14 * 24 * 60 * 60,
  });
};

module.exports.createResetToken = (id, password) => {
  const secret = process.env.TOKEN_KEY + password;
  return jwt.sign({ id }, secret, {
    expiresIn: '15m',
  });
};

module.exports.verifyResetToken = (token, password) => {
  const secret = process.env.TOKEN_KEY + password;
  return jwt.verify(token, secret)
};