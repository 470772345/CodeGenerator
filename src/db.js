// src/db.js
const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'xxx',
  server: 'xxxx', // You can use 'localhost\\instance' to connect to named instance
  database: 'xxxxx',

  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true // Change to true for local dev / self-signed certs
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.log('Database Connection Failed! Bad Config: ', err);
    throw err;
  });

module.exports = {
  sql, poolPromise
};
