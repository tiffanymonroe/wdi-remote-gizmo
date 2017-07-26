const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

// INDEX

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: pokemon
  });
});


// SHOW

app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.id]
  });
});

// NEW

// app.get('/pokemon/new', (req, res) => {
//
// })

//Port

app.listen (3000, () => {
  console.log("Go Catch 'em All!'");
})
