//Dependancies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


//controllers
const authorsController = require('./controllers/authors.js');
const articlesController = require('./controllers/articles.js');

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use('/authors', authorsController);
app.use('/articles', articlesController);

app.use(express.static('public'));

//Index Route
app.get('/', (req, res) =>{
  res.render('index.ejs');
})



//mongoose
mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});

app.listen(3000, ()=>{

  console.log("I'm listening.");
})
