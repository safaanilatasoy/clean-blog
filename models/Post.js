const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create schema
const PostSchema = new Schema({
  title: String,
  details: String,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});


// Creating model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;