require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'mysql2',
    useNullAsDefault: true,
    timezone: 'UTC',
    connection: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_POST,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
