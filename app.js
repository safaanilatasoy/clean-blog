const express = require('express');
const ejs = require('ejs');
const path = require('path');


const app = express();


// Template Engine

app.set('view engine', 'ejs');


//middlewares
app.use(express.static('public'));


// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post', (req, res) => {
  res.render('post');
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server is Running on ${port}...`);
});
