//Dependencies
const express = require('express');
const app = express();

//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//Index Route

app.get('/shop', (req, res) => {
  res.render('index.ejs');
});

//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop');
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})

//Listener
app.listen(3000, () => {
  console.log('The store is open for business!');
});
