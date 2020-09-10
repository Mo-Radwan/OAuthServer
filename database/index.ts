// const mongoose = require('mongoose');
import * as mongoose from 'mongoose';
const config = require('config');
const OAuthAccessToken = require('./OAuthAccessToken');
const OAuthAuthorizationCode = require('./OAuthAuthorizationCode');
const OAuthClient = require('./OAuthClient');
const OAuthRefreshToken = require('./OAuthRefreshToken');
const OAuthScope = require('./OAuthScope');
const User = require('./User');

// mongoose.Promise = Promise;

function connect() {
  mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Mongoose connected');
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = {
  connect,
  OAuthAccessToken,
  OAuthAuthorizationCode,
  OAuthClient,
  OAuthRefreshToken,
  OAuthScope,
  User
};
