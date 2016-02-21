var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);


/*
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  admin: Boolean,
  created_at: Date,
  updated_at: Date
  */
