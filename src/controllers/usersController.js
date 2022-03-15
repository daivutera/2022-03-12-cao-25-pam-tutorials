const { ErrorCase, successCase } = require('../helpers');
const { getUsersFromDb } = require('../modules/usersModule');

async function getUsers(req, res) {
  const users = await getUsersFromDb();
  if (users === false) {
    ErrorCase(res);
    return;
  }
  successCase(res, users);
}

module.exports = { getUsers };
