require('dotenv').config(); 


module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: process.env.DATABASE_NAME,
    username: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },

  test: {
    database: 'book_test',
    username: 'steven',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: 'book_test',
    username: 'steven',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
