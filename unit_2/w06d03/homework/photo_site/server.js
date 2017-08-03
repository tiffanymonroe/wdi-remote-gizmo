//Dependancies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const User = require('./models/users.js')
const usersController = require('./controllers/users.js');

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use('/users', usersController);

app.use(express.static('public'));

//Index Route
app.get('/', (req, res)=>{
  User.find({}, (err, foundUsers)=>{
    res.render('index.ejs', {
      users: foundUsers
    });
  });
});


//Connect to Mongoose

mongoose.connect('mongodb://localhost:27017/photo_site');
mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});

app.listen(3000, ()=>{
  console.log("What's new? I'm listening.");
})
