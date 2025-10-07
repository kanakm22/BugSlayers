const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');
const User = require('./User');

const PORT = process.env.PORT || 3000;






// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));




// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signUp.ejs");
});

app.post("/signup", async (req, res) => {
    try {
        const { fullname, username, email, mobile, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).send("Passwords do not match.");
        }

        const newUser = new User({
            fullname,
            username,
            email,
            mobile,
            password,
            confirmPassword
        });

        const savedUser = await newUser.save();

        console.log("User registered successfully.");
        console.log("user: ",savedUser);

        res.redirect("/login");
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).send("Username or email already exists.");
        }
        console.error("Error during signup:", error);
        res.status(500).send("An error occurred. Please try again later");
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(400).send("User not found.");
        }

        if (user.password === password) {
            res.redirect("/index.ejs");
        } else {
            res.status(400).send("Incorrect password.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("An error occurred. Please try again later.");
    }
});




app.get("/catalog", (req, res) => {
  res.render("catalog.ejs");
});

app.get("/project", (req, res) => {
  res.render("project.ejs");
});

app.get("/graph1", (req, res) => {
  res.render("graph1.ejs");
});

app.get("/graph2", (req, res) => {
  res.render("graph2.ejs");
});

app.get("/graph3", (req, res) => {
  res.render("graph3.ejs");
});

app.get("/graph4", (req, res) => {
  res.render("graph4.ejs");
});

// ❌ No app.listen() for Vercel

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

//module.exports = (req, res) => {
//  res.status(200).send("Hello from your Serverless Function!");
//};

module.exports = app;
