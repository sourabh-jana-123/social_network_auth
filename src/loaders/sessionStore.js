const MySQLStore = require('express-mysql-session');
const { host, user, password, database } = require('@config');

const sessionStore = new MySQLStore({
  host,
  user,
  password,
  database,
  clearExpired: true,
  checkExpirationInterval: 900000, // In milliseconds (15 minutes)
  expiration: 86400000, // In milliseconds (24 hours)
  createDatabaseTable: true,
  schema: {
    tableName: 'sessions',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data'
    }
  }
});

module.exports = { run: () => sessionStore };
