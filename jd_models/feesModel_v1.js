const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  studentId: String,
  amount: Number,
  status: String
});

module.exports = mongoose.model("JD_Fees", schema);