const express = require('express');
const mongoose = require('mongoose');

const Post = require('./models/Post');
const ejs = require('ejs');
const path = require('path');


const app = express();


// Connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Template Engine

app.set('view engine', 'ejs');


//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index', { posts });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/posts/:id', async (req, res) => {
  // res.render('add_post');
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});

app.post('/posts', async (req,res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is Running on ${port}...`);
});
