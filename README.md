# 🎓 JD School Management System

A simple full-stack web application to manage students, teachers, attendance, marks, and fees.

---

## 🧠 What is this project?

This is a School Management System where an admin can:

* Add and manage students
* Add and manage teachers
* Mark attendance
* Store marks
* Track fees (paid/pending)
* View all data on a dashboard

It has:

* Frontend → HTML + Bootstrap (UI)
* Backend → Node.js + Express
* Database → MongoDB

---

## 🚀 How to Run the Project

### 1. Open Terminal in Project Folder

cd jd_school_system_v1

---

### 2. Start MongoDB (Database)

podman start jd_mongo

If not created before:

podman run -d -p 27017:27017 --name jd_mongo docker.io/library/mongo:7

---

### 3. Start Backend Server

node sms_engine_main.js

You should see:

DB Connected
Server running on 5100

---

### 4. Open Frontend

Go to:

jd_frontend/login.html

Open it in browser.

---

## 🔑 Login Credentials

Username: admin
Password: 1234

---

## 🧪 How to Use

1. Login as admin
2. Go to Dashboard
3. Add Students
4. Add Teachers
5. Add Marks
6. Add Fees
7. Mark Attendance

All data is stored in MongoDB.

---

## 🏗️ Project Structure

jd_school_system_v1/
│
├── jd_frontend/        # UI pages (HTML)
├── jd_models/          # Database models
├── jd_routes/          # API routes
├── sms_engine_main.js  # Main backend server
├── package.json
└── README.md

---

## ⚙️ Key Concepts Used

* CRUD Operations (Create, Read, Update, Delete)
* REST API
* MongoDB Database
* Express.js Server
* Frontend-Backend communication using Fetch API

---

## 🎤 How to Explain in Viva

"This is a full-stack School Management System built using Node.js, Express, and MongoDB. The frontend sends requests to backend APIs, which store and fetch data from the database."

---

## 👨‍💻 Author

Anurag Kumar
GitHub: https://github.com/Anurag-kr24

---

## ⭐ Note

This project is made for learning and demonstration purposes.
