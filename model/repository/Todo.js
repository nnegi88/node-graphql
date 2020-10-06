const mongoose = require("../../config/db");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  completed: Boolean,
});

module.exports = mongoose.model("todos", userSchema);
