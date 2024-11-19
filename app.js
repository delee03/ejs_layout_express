// app.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const path = require("path");

// Middleware
app.use(bodyParser.json());

// Set views directory và view engine (sử dụng EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Import controller
const controller = require(__dirname + "/apps/controllers");
app.use(controller);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
