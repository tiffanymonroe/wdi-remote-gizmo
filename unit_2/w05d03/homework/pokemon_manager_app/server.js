const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

// INDEX

app.get('/', (req, res) => {
  res.render('index.ejs', {data: pokemon});
});


// SHOW

app.get('/:id', (req, res) => {
  res.render('show.edj', {data: pokemon[req.params.id]})
});

//Port

app.listen (3000, () => {
  console.log("Go Catch 'em All!'");
})
