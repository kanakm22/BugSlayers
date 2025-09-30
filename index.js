const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const mongoose = require('mongoose');

main()
.then(()=>{
  console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt for username: ${username}`);
    res.redirect('/'); 
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt for username: ${username}`);
    res.redirect('/'); 
});

app.get('/catalog', (req, res) => {
  res.render('catalog.ejs');
});


app.get('/project', (req, res) => {
  res.render('project.ejs');
});

app.get('/graph1', (req, res) => {
  res.render('graph1.ejs');
});

app.get('/graph2', (req, res) => {
  res.render('graph2.ejs');
});

app.get('/graph3', (req, res) => {
  res.render('graph3.ejs');
});

app.get('/graph4', (req, res) => {
  res.render('graph4.ejs');
});





app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});