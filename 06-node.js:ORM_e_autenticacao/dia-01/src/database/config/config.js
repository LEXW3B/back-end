require('dotenv').config();

const devConfig = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_NAME_BD || 'database',
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  dialect: 'mysql'
}

module.exports = {
  development: devConfig,
  test: devConfig,
  production: devConfig,
};