const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const friends = require('./models/friends.js');
const methodOverride = require('method-override');


//MIDDLEWARE

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));


// Index Route

app.get('/friends', (req, res) => {
  res.render('index.ejs', {
    friends: friends
  });
});

app.delete('/friends/:index', (req, res) => {
  friends.splice(req.params.index, 1);
  res.redirect('/friends');
});


// New Route

app.get('/friends/new', (req, res) => {
  res.render('new.ejs')
});

app.post('/friends', (req, res) => {
  friends.push(req.body);
  res.redirect('/friends');
});

//Edit Route
app.get('/friends/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    friends: friends[req.params.index],
    index: req.params.index
  });
});

app.put('/friends/:index', (req, res) => {
  friends[req.params.index] = req.body;
  res.redirect('/friends');
});


// Show Route
app.get('/friends/:index', (req, res) => {
  res.render('show.ejs', {
    friends: friends[req.params.index]
  });
});



app.listen(3000, () => {
  console.log("I'll be there for you...");
});
