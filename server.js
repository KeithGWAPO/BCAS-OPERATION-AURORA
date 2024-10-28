const express = require("express");
const userRouter = require('./routes/user.route.js');
const path = require("path");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Added to handle form data
app.use(express.static(path.join(__dirname, 'public'))); // Connect public files

// Register the user router
app.use(userRouter);

// Start the server
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
