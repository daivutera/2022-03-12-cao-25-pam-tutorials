const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

const tableName = 'users2';

async function getUsersFromDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('connected to db');
    const sql = `SELECT COUNT(id)AS NumberOfUsers FROM ${tableName}`;
    const [dataFromDb] = await connection.query(sql);
    await connection.close();
    return dataFromDb;
  } catch (error) {
    console.log('beda su db', error);
    return false;
  }
}

module.exports = { getUsersFromDb };
