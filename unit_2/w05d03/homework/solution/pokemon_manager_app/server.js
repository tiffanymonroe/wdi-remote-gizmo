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

//We can run the user input of `type`, that is currently a string, through a function to turn it into an array so that it's treated the same as the other Pokemon `type` data.
  const getTypeArray = (typeString) => {
    let typeArray = [];
    typeArray = typeString.split(",");
    console.log("This is type: " + typeArray);
    return typeArray;
  }

//We can run the user input of `damages`, that is currently a string, through a function to turn it into an object so that it's treated the same as the other Pokemon `damage` data.
  const getDamagesObject = (damagesStr) => {
    // Split the damages from a string to an array. Perform reduce on the array.
    console.log(damagesStr);
    return damagesStr.split(',').reduce((obj, damage) => {
      // Take the string in the array and split it by the :
      const currDamage = damage.split(':');
      // Turn it into an object by declaring the key and value from each of the new arrays
      obj[currDamage[0]] = currDamage[1];
      return obj;
    }, {});
  };

//Getting all user input.
  const createdPokemon = req.body;

//Manipulating the `type` to an array by passing it into the `getTypeArray`.
  createdPokemon.type = getTypeArray(createdPokemon.type);

//Manipulating the `damages` to an object by passing it through `getDamagesObject`.
  createdPokemon.damages = getDamagesObject(createdPokemon.damages);

//Pushing the pokemon that was created, with the modified type and damage, into our Pokemon data.
  pokemon.push(createdPokemon);

//Redirecting back to the last Pokemon in our data (which is the most recent one created).
  // res.redirect(`/pokemon/${pokemon.length-1}`);
  // OR
  res.redirect(`/pokemon/` + (pokemon.length-1));

});


//----------- Show Route -----------
app.get('/pokemon/:id', (req, res) => {
  res.render('pokemon/show.ejs', {poke: pokemon[req.params.id]});
})
