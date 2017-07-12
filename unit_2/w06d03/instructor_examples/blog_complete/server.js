var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));

var authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);
var articlesController = require('./controllers/articles.js');
app.use('/articles', articlesController);

app.get('/', function(req, res){
	res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.once('open', function(){
	console.log('connected to mongo');
});

app.listen(3000, function(){
	console.log('listening....');
});
