const express = require("express");
const router = express.Router();
const Admin = require("../jd_models/adminModel_v1");

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne(req.body);
  res.send({ success: !!admin });
});

module.exports = router;