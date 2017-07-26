var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 3000;

app.listen(port, function() {
  console.log("App is running on port: ", port);
});

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db
var products = require('./products');

// index route
app.get('/products', function(req, res) {
  res.send(products);
});

//views route
app.get('/products', (req, res) => {
  res.render('index.ejs');
});

app.post('/products/new', (req, res) => {
    products.push(req.body);
    console.log(products);
    res.send('Thank you!');
});

app.post('/products', (req, res)=>{
    console.log('Create route accessed!');
    console.log('Req.body is: ', req.body);
    res.send(req.body);
});

// show route
app.get('/products/:id', function(req, res) {
  res.send(products[req.params.id]);
});

// create route
app.post('/products', function(req, res) {
  console.log('CREATE route accessed');
  console.log('Data within req.body: ', req.body);
  products.push(req.body);
  res.redirect('/products');
});
