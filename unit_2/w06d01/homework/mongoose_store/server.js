//Dependencies
const express = require('express');
const app = express();
const Product = require('./models/products.js');
const productData = require('./models/portola.js');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


//Middleware

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//Index Route

app.get('/shop', (req, res) => {
  Product.find({}, (error, allProducts) => {
    res.render('index.ejs', {
      products: allProducts
    });
  });
});

//New Route
app.get('/shop/new', (req, res) => {
  res.render('new.ejs');
});

// Create Route
app.post('/shop/', (req, res) => {
  Product.create(req.body, (error, createdProduct) => {
    res.redirect('/shop');
  });
});

//Show Route

app.get('/shop/:id', (req, res) => {
  Product.findById(req.params.id, (error, foundProduct) => {
    res.render('show.ejs', {
      product: foundProduct
    });
  });
});



//Delete Route
app.delete('/shop/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/shop');
  });
});

//Edit Route

app.get('/shop/:id/edit', (req, res) => {
  Product.findById(req.params.id, (error, foundProduct) => {
    res.render('edit.ejs',{
      product: foundProduct
    });
  });
});

//Put Route
app.put('/shop/:id', (req, res) => {
  Product.findBrsyIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedModel) => {
    res.send(updatedModel);
  });
});

//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop');
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})

// Add products
// Product.collection.insertMany(productData, (error, data) => {
//   console.log('added real Portola coffee');
//   mongoose.connection.close();
// })

//Listener
app.listen(3000, () => {
  console.log('The store is open for business!');
});
