//dependancies

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {type: String, required: true, unique: true},
  author: {type: String, required: true},
  body: String,
  comments:[{body: String, commentDate: Date}],
  publishDate: {type: Date, default: Date.now},
  hidden: Boolean,
  meta: {
    vote: Number,
    favs: Number
  }
});

mongoose.connect('mongodb://localhost:27017/example');

mongoose.connection.once('open', ()=> {
  console.log('connected to Mongoose');
  mongoose.connection.close();
})
