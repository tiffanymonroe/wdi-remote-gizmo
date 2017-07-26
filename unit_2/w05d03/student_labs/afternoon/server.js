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

app.get('/dates', (req, res) => {
  res.send(dates);
})

// post route
app.post('/dates', (req, res) => {
  console.log('req.body is: ', req.body);
  res.send(req.body);
});

app.listen(port, function() {
  console.log('Running on port: ', port)
});
