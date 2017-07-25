const express = require('express');
const app = express();

// const superheroes = ['batman', 'superman', 'hulk'];

const superheroes = [
  { name: "superman", powers: ['flight', 'invulnerability', 'x-ray vision']}
  { name: "batman", powers: ['Batmobile', 'money', 'Alfred']}
  { name: "hulk", powers: ['green', 'strength']}
]

app.get('/superheroes', (req, res) => {
  res.send(superheroes);
})

app.get('/superheroes/:index', (req, res) => {
  res.send(superheroes[req.params.index]);
})

app.listen(3000, (req, res) => {
  console.log("Here to save the day...");
});
