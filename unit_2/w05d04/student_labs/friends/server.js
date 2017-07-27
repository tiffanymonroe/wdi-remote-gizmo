const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const friends = require('./models/friends.js');

//MIDDLEWARE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));


app.get('/friends', (req, res) => {
  res.render('index.ejs', {
    friends: friends
  });
});


app.get('/friends/:index', (req, res) => {
  res.render('show.ejs', {
    friends: friends[req.params.index]
  });
});

app.delete('/friends/:index', (res, req) => {
  friends.splice(req.params.index, 1);
  res.redirect('/friends');
});

app.listen(3000, () => {
  console.log("I'll be there for you...");
});
