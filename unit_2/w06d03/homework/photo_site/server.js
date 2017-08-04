//Dependancies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


//User Dependancies
const User = require('./models/users.js')
const usersController = require('./controllers/users.js');
const userData = require('./models/data.js');


//Photo Dependancies
const Photo = require('./models/photos.js')
const photosController = require('./controllers/photos.js');


//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use('/users', usersController);
app.use('/photos', photosController)

app.use(express.static('public'));

//Index Route
app.get('/', (req, res)=>{
    res.render('index.ejs');
});


//Connect to Mongoose

mongoose.connect('mongodb://localhost:27017/photo_site');
mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});


// Add products from Vampire homework, I think
// User.collection.insertMany(userData, (error, data) => {
//   console.log('seeded data');
//   mongoose.connection.close();
// })
//
app.listen(3000, ()=>{
  console.log("What's new? I'm listening.");
})
