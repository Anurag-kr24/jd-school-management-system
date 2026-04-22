const express = require("express");
const router = express.Router();

router.post("/ask",(req,res)=>{
  const msg = req.body.message.toLowerCase();

  let reply="Not understood";

  if(msg.includes("timing")) reply="8 AM to 2 PM";
  if(msg.includes("exam")) reply="Next month";
  if(msg.includes("fee")) reply="Check fees section";

  res.send({reply});
});

module.exports = router;