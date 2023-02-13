const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String
  }
})

const ModelClass = mongoose.model("User", userSchema);
module.exports = ModelClass;