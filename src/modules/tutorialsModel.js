/* eslint-disable camelcase */
const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

const tableName = 'tutorials';

async function showTutorialsDb(user_id) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT *FROM ${tableName} WHERE user_id=?`;
    const [dataFromDb] = await connection.execute(sql, [user_id]);
    await connection.close();
    return dataFromDb;
  } catch (error) {
    console.log('beda su db');
    return false;
  }
}

async function showAuthTutorialsDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT *FROM ${tableName}`;
    const [dataFromDb] = await connection.execute(sql);
    await connection.close();
    return dataFromDb;
  } catch (error) {
    console.log('beda su db');
    return false;
  }
}
async function showNotAuthTutorialsDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT *FROM ${tableName} WHERE private=false`;
    const [dataFromDb] = await connection.execute(sql);
    await connection.close();
    return dataFromDb;
  } catch (error) {
    console.log('beda su db');
    return false;
  }
}

async function postTutorialDb(title, content, private, user_id) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO ${tableName} (title, content, private, user_id) VALUES(?,?,?,?)`;
    const [dataFromDb] = await connection.execute(sql, [
      title,
      content,
      private,
      user_id,
    ]);
    await connection.close();
    return dataFromDb;
  } catch (error) {
    console.log('beda su db');
    return false;
  }
}

module.exports = {
  showTutorialsDb,
  showAuthTutorialsDb,
  showNotAuthTutorialsDb,
  postTutorialDb,
};
