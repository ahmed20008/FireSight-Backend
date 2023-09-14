const crypto = require('crypto');

// Generate 32 bytes of random data
const randomBytes = crypto.randomBytes(32);

// Convert the random bytes to a hexadecimal string
const secretKey = randomBytes.toString('hex');

module.exports = {
  secret: secretKey
};