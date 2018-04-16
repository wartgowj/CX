const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = mongoose.Schema({

  local: {
    username: String,
    password: String,
    pic: {
      type: String
    },
    date: { type: Date, default: Date.now }
  },
  facebook: {
    id: String,
    token: String,
    name: String,
    email: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;