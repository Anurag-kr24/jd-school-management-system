const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/jd_school_system_v1")
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.use("/admin", require("./jd_routes/adminRoutes_v1"));
app.use("/jd_students_api", require("./jd_routes/studentRoutes_v1"));
app.use("/jd_teachers_api", require("./jd_routes/teacherRoutes_v1"));
app.use("/attendance", require("./jd_routes/attendanceRoutes_v1"));
app.use("/marks", require("./jd_routes/marksRoutes_v1"));
app.use("/fees", require("./jd_routes/feesRoutes_v1"));
app.use("/chatbot", require("./jd_routes/chatbotRoutes_v1"));

const Student = require("./jd_models/studentModel_v1");
const Teacher = require("./jd_models/teacherModel_v1");
const Fees = require("./jd_models/feesModel_v1");

app.get("/jd_dashboard", async (req, res) => {
  const students = await Student.countDocuments();
  const teachers = await Teacher.countDocuments();
  const pendingFees = await Fees.countDocuments({ status: "Pending" });

  res.send({ students, teachers, pendingFees });
});

app.listen(5100, ()=>console.log("Server running on 5100"));