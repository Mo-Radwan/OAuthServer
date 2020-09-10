// const mongoose = require('mongoose');
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OAuthAccessTokenSchema = new mongoose.Schema({
  accessToken: String,
  accessTokenExpiresAt: Date,
  scope: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  client: { type: Schema.Types.ObjectId, ref: 'OAuthClient' }
});

module.exports = mongoose.model('OAuthAccessToken', OAuthAccessTokenSchema);
