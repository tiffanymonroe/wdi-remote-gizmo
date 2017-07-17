const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);

mongoose.connect('mongodb://localhost:27017/basiccrud');
db.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(3000, ()=>{
    console.log('listening');
});
