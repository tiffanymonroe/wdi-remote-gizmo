const express        = require('express');
const app            = express();
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const dotenv         = require('dotenv').config();

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(session({
    secret: "this is a random string secret", //a random string do not copy this value or your stuff will get hacked
    resave: false,
    saveUninitialized: false

}));







const weather = require('./controllers/weather.js');
app.use('/weather', weather);



app.get('/', (req, res)=>{
	res.render('index.ejs', {});
});



app.listen(3000, ()=>{
	console.log('listening....');
});
