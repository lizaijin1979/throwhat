const mysql = require('mysql')
const configs = require('../config')

const createMysqlClient = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lizj1979',
    port: '3306',
    database: 'cAuth',
  })
};

module.exports = { createMysqlClient};