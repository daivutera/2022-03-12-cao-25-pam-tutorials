const {
  ErrorCase,
  successCase,
  verifyHash,
  generateJwtToken,
} = require('../helpers');
const { userLoginDb } = require('../modules/loginModule');
const Joi = require('joi');

async function loginUser(req, res) {
  const { email, password } = req.body;
  const users = await userLoginDb(email);

  if (users === false) {
    ErrorCase(res);
    return;
  }
  if (!users.length) {
    return ErrorCase(res, 'password or name does not match1');
  }

  const foundUserObj = users[0];

  if (!verifyHash(password, foundUserObj)) {
    // slaptazodziai nesutapo
    return ErrorCase(res, 'email or pass not match 2');
  }
  const token = generateJwtToken(foundUserObj);
  successCase(res, token);
}
module.exports = { loginUser };
