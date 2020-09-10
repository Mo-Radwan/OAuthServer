// const mongoose = require('mongoose');
import * as mongoose from 'mongoose';

// const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  scope: String
});

module.exports = mongoose.model('User', UserSchema);
