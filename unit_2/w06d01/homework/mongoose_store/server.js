//Dependencies
const express = require('express');
const app = express();
const Product = require('./models/products.js');

//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//Index Route

app.get('/shop', (req, res) => {
  res.render('index.ejs');
});

//New Route
app.get('/shop/new', (req, res) => {
  res.render('new.ejs');
});

// Create Route
app.post('/shop/', (req, res) => {
  res.send(req.body);
});

//Show Route

app.get('/shop/:id', (req, res) => {
  Product.findById(req.params.id, (error, product) => {
    res.send(product)
  });
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
