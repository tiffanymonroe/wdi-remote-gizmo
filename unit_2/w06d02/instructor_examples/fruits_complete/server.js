var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connection;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

var fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);

mongoose.connect('mongodb://localhost:27017/basiccrud');
db.once('open', function() {
    console.log('connected to mongo');
});

app.listen(3000, function(){
    console.log('listening');
});
