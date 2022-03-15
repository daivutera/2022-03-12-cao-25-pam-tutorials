const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

const tableName = 'users2';

async function userLoginDb(email) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM ${tableName} WHERE email=?`;
    const [dataFromDb] = await connection.execute(sql, [email]);
    await connection.close();
    return dataFromDb;
  } catch (error) {
    console.log('beda su db');
    return false;
  }
}

module.exports = { userLoginDb };
