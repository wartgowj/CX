const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  googleId: { type: String, default: "" },
  password: { type: String },
  pic: { type: String },
  date: { type: Date, default: Date.now }
});

userSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
  const self = this
  self.findOne(condition, (err, result) => {
    return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })
  })
}

const User = mongoose.model("User", userSchema);

module.exports = User;