const express = require("express");
const router = express.Router();
const Model = require("../jd_models/studentModel_v1");

router.post("/add", async (req,res)=>{
  res.send(await new Model(req.body).save());
});

router.get("/all", async (req,res)=>{
  res.send(await Model.find());
});

router.put("/update/:id", async (req,res)=>{
  res.send(await Model.findByIdAndUpdate(req.params.id, req.body));
});

router.delete("/delete/:id", async (req,res)=>{
  await Model.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;