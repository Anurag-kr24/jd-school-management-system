const express = require("express");
const router = express.Router();
const Fees = require("../jd_models/feesModel_v1");

// ADD FEES
router.post("/add", async (req, res) => {
  try {
    const data = new Fees(req.body);
    await data.save();
    res.json({ msg: "Fees saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL FEES
router.get("/all", async (req, res) => {
  try {
    const data = await Fees.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;