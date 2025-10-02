const express = require("express");
const app = express();
const path = require("path");
// const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("/public"));

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
  res.render("signup.ejs");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt for username: ${username}`);
  res.redirect("/");
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  console.log(`Signup attempt for username: ${username}`);
  res.redirect("/");
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

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

module.exports = (req, res) => {
  res.status(200).send("Hello from your Vercel Serverless Function!");
};

module.exports = app;
