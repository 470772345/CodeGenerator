// src/getTableColumns.js
const { sql, poolPromise } = require('./db');

async function getTableColumns(tableName) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${tableName}'`);
    return result.recordset.map(row => row.COLUMN_NAME);
  } catch (err) {
    console.error('SQL error', err);
    throw err;
  }
}

module.exports = getTableColumns;
