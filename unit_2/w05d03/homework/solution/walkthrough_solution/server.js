//Dependencies
const express =  require('express');
const app = express();
const bodyParser = require('body-parser');

//Data
const pokemon = require('./data/pokemon.js');

//Listener
const port = 3000;

app.listen(port, () => {
  console.log("connected to server at port " + port);
})

//Middleware

//To reference static files in the public folder
app.use(express.static('public'));

//To parse information when we create new items
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// I always do a test route to display all of my data before I parse it.
app.get('/data', (req, res) => {
  res.send(pokemon);
})

// ----------- Index Route -----------
app.get('/pokemon', (req, res) => {
  res.render('pokemon/index.ejs', {pokemon: pokemon});
})

//----------- New Route -----------
app.get('/pokemon/new', (req, res) => {
  res.render('pokemon/new.ejs');
})

// ----------- Create Route -----------
app.post('/pokemon', (req, res) => {

//1. Getting all user input & log it.
  const newPokemon = req.body;
  console.log(newPokemon);

  const formatType = (typeAsAString) => {
    const typeAsArray = typeAsAString.split(",");
    return typeAsArray
  }

  const formatDamages = (damagesAsAString) => {
    formattedDamagesObject = {};

    console.log(damagesAsAString)
    const damagesAsArray = damagesAsAString.split(",");
    console.log(damagesAsArray);

    const damagesAsArraySplitByColon = [];
    for (const damage in damagesAsArray) {
       damagesAsArraySplitByColon.push(damagesAsArray[damage].split(":"));
       formattedDamagesObject[damagesAsArraySplitByColon[damage][0]] = damagesAsArraySplitByColon[damage][1]
    }
    console.log("----------")
    console.log(damagesAsArraySplitByColon);
    console.log("++++++++++++++")
    console.log(formattedDamagesObject);
    return formattedDamagesObject;
  }

  newPokemon.type = formatType(newPokemon.type);
  newPokemon.damages = formatDamages(newPokemon.damages);

  pokemon.push(newPokemon);

  res.redirect('/pokemon/' + (pokemon.length-1));

});


//----------- Show Route -----------
app.get('/pokemon/:id', (req, res) => {
  res.render('pokemon/show.ejs', {poke: pokemon[req.params.id]});
})
