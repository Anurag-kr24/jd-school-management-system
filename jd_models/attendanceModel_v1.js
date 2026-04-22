const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  studentId: String,
  date: String,
  status: String
});

module.exports = mongoose.model("JD_Attendance", schema);