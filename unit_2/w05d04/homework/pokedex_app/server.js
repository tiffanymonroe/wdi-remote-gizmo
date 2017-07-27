// DEPENDENCIES

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

// DATA
const pokemon = require('./models/pokemon.js')

// LISTENER

app.listen(3000, () => {
  console.log("Gotta catch 'em all!");
})

// MIDDLEWARE

//static files
app.use(express.static('public'));

//parse information when we create new items
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//view data before parsing
app.get('/models', (req, res) => {
  res.send(pokemon);
});

//-------Index Route-------
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {pokemon: pokemon});
});

//-------Show Route-------
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    poke: pokemon[req.params.id]
  });
});
