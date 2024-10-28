// user.controller.js

const e = require("express");

const login = (req, res) => {
    res.render("login");
};

const register = (req, res) => {
    res.render("register");
};

// New admin dashboard function
const adminDashboard = (req, res) => {
    res.render("adminDashboard"); // Render the adminDashboard view
};

// New admin user management function
const adminUserManagement = (req, res) => {
    res.render("adminUserManagement"); // Render the adminUserManagement view
};

// New admin Logs function
const adminLogs = (req, res) => {
    res.render("adminLogs"); // Render the Logs view
};

// New staff appointments function
const staffAppointments = (req, res) => {
    res.render("staffAppointments"); // Render the staffAppointments view
};

const saveUser = (req, res) => {
    const email_data = req.body.email_data;
    const password_data = req.body.password_data;
    const repeat_data = req.body.repeat_data;

    console.log(email_data);
    console.log(password_data);
    console.log(repeat_data);
};

module.exports = { login, register, saveUser, adminDashboard, adminUserManagement, adminLogs, staffAppointments }; // Include staffAppointments in exports
