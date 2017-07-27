const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// INDEX

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: pokemon
  });
});

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
  });

app.post('/pokemon/new', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
});

// SHOW

app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.id]
  });
});



//Port

app.listen (3000, () => {
  console.log("Go Catch 'em All!'");
});
