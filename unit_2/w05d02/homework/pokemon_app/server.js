const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js')

app.get('/', (req, res) => {
  res.send("Welcome to the Pokemon App!")
});

app.get('/pokemon', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000, () => {
  console.log("Pokemon is running");
});
