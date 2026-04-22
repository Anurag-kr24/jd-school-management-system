const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  subject: String,
  contact: String
});

module.exports = mongoose.model("JD_Teacher", schema);