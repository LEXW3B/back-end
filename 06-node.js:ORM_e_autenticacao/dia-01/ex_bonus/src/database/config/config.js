require('dotenv').config();

const configDev = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD || 'mynewpassword',
  database: process.env.MYSQL_DATABASE || 'bank2',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
};

module.exports = {
  development: configDev,
  test: configDev,
  production: configDev,
};
