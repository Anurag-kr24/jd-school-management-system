const express = require("express");
const router = express.Router();
const Model = require("../jd_models/attendanceModel_v1");

router.post("/mark", async (req,res)=>{
  res.send(await new Model(req.body).save());
});

router.get("/percentage/:id", async (req,res)=>{
  const total = await Model.countDocuments({studentId:req.params.id});
  const present = await Model.countDocuments({studentId:req.params.id,status:"Present"});
  res.send({percent:(present/total)*100});
});

module.exports = router;