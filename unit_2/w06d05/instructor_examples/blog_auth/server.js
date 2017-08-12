const express        = require('express');
const app            = express();
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
// create req.body

// session middleware
// this will create a property on our request called
// req.session
app.use(session({
          secret: "This is a random secret string",
          resave: false,
          saveUninitialized: false
}));

const authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);
const articlesController = require('./controllers/articles.js');
app.use('/articles', articlesController);

const sessionsController = require('./controllers/session.js');
app.use('/sessions', sessionsController);

app.get('/', (req, res)=>{
	res.render('index.ejs');
});

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog'
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('listening....');
});


// Client request (from a form, or from going somewhere in the browser, url)

// intercepted by our middleware
// adding req.body -body parser
// adding method overried with methodoverride


// Then it moves on to its final endpoint

// router.get('somerout')
