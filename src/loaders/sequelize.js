const Sequelize = require('sequelize');
const config = require('@config');

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    dialect: 'mysql',
  }
);

module.exports = {
  run: async () => {
    sequelize.authenticate()
    .then(() => {
      console.log('Connected to MySQL database!');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
}


