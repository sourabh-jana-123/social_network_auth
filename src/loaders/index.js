const sequelizeLoader = require('./sequelize');
const expressLoader = require('./express');
const sessionStore = require('./sessionStore');

module.exports = {
  run: async ({ expressApp }) => {
    const db = await sequelizeLoader.run();
    console.log('✌️ DB loaded and connected!');

    // const mysqlSessionStore = sessionStore.run();
  
    // await expressLoader.run({ app: expressApp, db, mysqlSessionStore });
    console.log('✌️ Express loaded');
  }
}