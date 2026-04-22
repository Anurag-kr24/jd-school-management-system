const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  studentId: String,
  subject: String,
  marks: Number
});

module.exports = mongoose.model("JD_Marks", schema);