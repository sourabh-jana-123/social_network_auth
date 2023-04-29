const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/sequelize');
 
const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  connectedSocialAccounts: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  googleAccessToken: {
    type: DataTypes.STRING
  },
  googleEmail: {
    type: DataTypes.STRING
  },
  googleProfileId: {
    type: DataTypes.STRING
  },
  githubAccessToken: {
    type: DataTypes.STRING
  },
  githubEmail: {
    type: DataTypes.STRING
  },
  githubProfileId: {
    type: DataTypes.STRING
  },
  amazonAccessToken: {
    type: DataTypes.STRING
  },
  amazonEmail: {
    type: DataTypes.STRING
  },
  amazonProfileId: {
    type: DataTypes.STRING
  },
});
 
module.exports = User;
