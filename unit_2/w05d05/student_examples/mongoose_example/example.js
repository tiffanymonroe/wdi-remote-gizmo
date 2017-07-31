//dependancies

const mongoose = require('mongoose'); //require mongoose package
const Schema = mongoose.Schema; //Schema is a mongoose property--it has many properties

const articleSchema = new Schema({
  title: {type: String, required: true, unique: true},
  //can say whether we want properties to be required or unique
  author: {type: String, required: true},
  body: String,
  comments:[{body: String, commentDate: Date}],
  //can have arrays of objects with specific properties
  publishDate: {type: Date, default: Date.now},
  //can set default properties
  hidden: Boolean,
  meta: {
    vote: Number,
    favs: Number
  }
});

//-----Properties----
//String
//Number
//Date
//Boolean
//Mixed
//ObjectId
//Array


const Article = mongoose.model('Article', articleSchema);
//creating article class--will be stored in Articles collection-- mongo does it automatically
module.exports = Article;

//the class only sets up the blueprint that all article objects musft follow. it doesn't create anything in the db.

mongoose.connect('mongodb://localhost:27017/example');

mongoose.connection.once('open', ()=> {
  console.log('connected to Mongoose');
  mongoose.connection.close();
})
