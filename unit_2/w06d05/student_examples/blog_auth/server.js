const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const session = require('express-session')

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
//creates req.body

//session middleware
//session function pass through object that will create a property on our request called req.session to store user info
app.use(session({
		secret: "this is a random string secret",
		// a random string that will encrypt our session cookie // do not copy this value or your stuff will get hacked
		resave: false,
		//resave, if set to true, will save every time--we just want it to save when changed
		saveUninitialized: false
		//when it is new but not modified // reduce server storage

}))

const authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);
const articlesController = require('./controllers/articles.js');
app.use('/articles', articlesController);

const sessionsController = require('./controllers/session.js');
app.use('/sessions', sessionsController);
//


app.get('/', (req, res)=>{
	res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});

app.listen(3000, ()=>{
	console.log('listening....');
});
