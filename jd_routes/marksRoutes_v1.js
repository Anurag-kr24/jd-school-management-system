const express = require("express");
const router = express.Router();
const Marks = require("../jd_models/marksModel_v1");

// ADD MARKS
router.post("/add", async (req, res) => {
  try {
    const data = new Marks(req.body);
    await data.save();
    res.json({ msg: "Marks added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL MARKS
router.get("/all", async (req, res) => {
  try {
    const data = await Marks.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;