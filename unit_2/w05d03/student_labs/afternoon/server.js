// dependencies
var express = require('express');
var app = express();

// port
var port = 3000;

// middleware
// ?

// data
var dates = [
  { name: "Bangor", created_at: Date.now() },
  { name: "San Jose", created_at: Date.now() },
  { name: "Bozeman", created_at: Date.now() }
];

// get route

// post route


app.listen(port, function() {
  console.log('Running on port: ', port)
});
