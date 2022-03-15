/* eslint-disable camelcase */
const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

const tableName = 'users2';

async function registerUserToDb(email, password) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO ${tableName} (email, password)VALUES(?,?)`;
    const [dataFromDb] = await connection.execute(sql, [email, password]);
    await connection.close();
    return dataFromDb;
  } catch (error) {
    console.log('beda su db', error);
    return false;
  }
}

module.exports = { registerUserToDb };
