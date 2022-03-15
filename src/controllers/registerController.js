/* eslint-disable camelcase */
const { ErrorCase, successCase, hashPass } = require('../helpers');
const { registerUserToDb } = require('../modules/registerModule');

async function registerUser(req, res) {
  const { email, password } = req.body;
  const passwordHashed = hashPass(password);
  const users = await registerUserToDb(email, passwordHashed);
  if (users === false) {
    ErrorCase(res);
    return;
  }
  successCase(res, users);
}

module.exports = { registerUser };
