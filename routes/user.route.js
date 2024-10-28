// user.route.js
const express = require("express");
const userController = require("../controller/user.controller.js");

const router = express.Router();

// Route for login
router.get("/login", userController.login);

// Route for register
router.get("/register", userController.register);

// Route for admin dashboard
router.get("/adminDashboard", userController.adminDashboard);

// Route for admin user management
router.get("/adminUserManagement", userController.adminUserManagement);

// Route for admin logs
router.get("/adminLogs", userController.adminLogs);

// Route for staff appointments
router.get("/staffAppointments", userController.staffAppointments); // Add this line

module.exports = router;