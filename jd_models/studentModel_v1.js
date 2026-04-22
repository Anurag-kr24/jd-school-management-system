const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  jd_name: String,
  jd_class: String,
  jd_roll: Number,
  jd_contact: String,
  jd_address: String
});

module.exports = mongoose.model("JD_Student", schema);