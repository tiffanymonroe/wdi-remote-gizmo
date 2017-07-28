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

//-------New Route-------
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});

//--------Create Route-------
//from Homework solutions

app.post('pokemon', (req, res) => {
  const newPokemon = req.body;
  console.log(newPokemon);

const formatType = (type) => {
  const typeArray = type.split(",");
  return typeArray
}

const formatDamages = (damages) => {
  const damageObject = {};
  console.log(damageObject);

  const damageArray = damages.split(",");
  console.log(damageArray);

  const finalDamages = [];
  for (const damage in damageArray){
    finalDamages.push(damageArray[damage].split(":"));
    damageObject[finalDamages[damage][0]] = finalDamages[damage][1]
  }
  return damageObject;
}

newPokemon.type = formatType(newPokemon.type);
newPokemon.damages = formatDamages(newPokemon.damages);

pokemon.push(newPokemon);
res.redirect('/pokemon/' + (pokemon.length-1));

});

//-------Show Route-------
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    poke: pokemon[req.params.id]
  });
});


//-------Edit Route -------
app.get('/pokemon/:id/edit', (req, res) => {
  res.render('edit.ejs', ()=> {
    poke: pokemon[req.params.id] //,
    // id req.params.id
  });
});

app.put('pokemon/:id', (req, res) => {
  pokemon[req.params.id] = req.body;
  res.redirect('/pokemon');
});
