const express = require("express");
const router = express.Router();
const Model = require("../jd_models/teacherModel_v1");

router.post("/add", async (req,res)=>{
  res.send(await new Model(req.body).save());
});

router.get("/all", async (req,res)=>{
  res.send(await Model.find());
});

module.exports = router;