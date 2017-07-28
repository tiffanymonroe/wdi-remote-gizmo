//-----------DEPENDENCIES-----------
const bodyParser     = require ( 'body-parser' );
const express        = require ( 'express' );
const methodOverride = require ( 'method-override' );
const app            = express ();

//-----------DATABASE-----------
const pokemon        = require (  './models/pokemon.js' );

//-----------PORT-----------
const PORT           = 3000;

//-----------MIDDLEWARE-----------
app.use( bodyParser.urlencoded( { extended : false } ));
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );
app.use( methodOverride( '_method' ) );


//-----------See JSON here:-----------
app.get('/', ( req , res ) => {
  res.send(pokemon);
})

//-----------INDEX Route-----------
app.get( '/pokemon', ( req , res ) => {
  res.render( './pokemon/index.ejs', {
    pokemon : pokemon
  });
});

//-----------NEW Route-----------
app.get( '/pokemon/new',  ( req , res ) => {
  res.render('./pokemon/new.ejs', {
    pokemon : pokemon
  });
});

//-----------CREATE Route-----------
app.post( '/pokemon', ( req , res ) => {
  //create an object with the same data(keys) and data structure as other pokemon

  const createOne = {};
  createOne.id                 = req.body.id;
  createOne.name               = req.body.name ;
  createOne.img                = req.body.img ;
  createOne.type               = req.body.type;
  createOne.stats              = {};
  createOne.stats.hp           = req.body.hp ;
  createOne.stats.attack       = req.body.attack ;
  createOne.stats.spattack     = req.body.spattack ;
  createOne.stats.defense      = req.body.defense ;
  createOne.stats.spdefense    = req.body.spdefense ;
  createOne.stats.speed        = req.body.speed ;
  createOne.damages            = {};
  createOne.damages.normal     = req.body.normal ;
  createOne.damages.fire       = req.body.fire ;
  createOne.damages.water      = req.body.water ;
  createOne.damages.electric   = req.body.electric ;
  createOne.damages.grass      = req.body.grass ;
  createOne.damages.ice        = req.body.ice ;
  createOne.damages.fight      = req.body.fight ;
  createOne.damages.poison     = req.body.poison ;
  createOne.damages.ground     = req.body.ground ;
  createOne.damages.flying     = req.body.flying ;
  createOne.damages.psychic    = req.body.psychic ;
  createOne.damages.bug        = req.body.bug ;
  createOne.damages.rock       = req.body.rock ;
  createOne.damages.ghost      = req.body.ghost ;
  createOne.damages.dragon     = req.body.dragon ;
  createOne.damages.dark       = req.body.dark ;
  createOne.damages.steel      = req.body.steel ;

  //adjust the type from a string to an Array
  createOne.type = createOne.type.split(",");

  //push the above object into the pokemon array
  pokemon.push( createOne );

  //Redirect to the newly created pokemon
  res.redirect( '/pokemon/' + (pokemon.length-1));
});

//-----------SHOW Route-----------
app.get( '/pokemon/:index',  ( req, res ) => {

  res.render( './pokemon/show.ejs',{
    pokemon : pokemon[req.params.index],
    index: req.params.index
  });
});


//-----------EDIT Route-----------
app.get( '/pokemon/:index/edit',  ( req , res ) => {

  res.render('./pokemon/edit.ejs', {
    pokemon : pokemon[req.params.index],
    index: req.params.index
  });
});

//-----------UPDATE Route-----------
app.put( '/pokemon/:index', ( req , res ) => {

  const updateOne = {}

  //update specific values of Pokemon object
  updateOne.id                 = req.body.id;
  updateOne.name               = req.body.name;
  updateOne.img                = req.body.img;
  updateOne.type               = req.body.type;
  updateOne.stats              = {};
  updateOne.stats.hp           = req.body.hp ;
  updateOne.stats.attack       = req.body.attack ;
  updateOne.stats.spattack     = req.body.spattack ;
  updateOne.stats.defense      = req.body.defense ;
  updateOne.stats.spdefense    = req.body.spdefense ;
  updateOne.stats.speed        = req.body.speed ;
  updateOne.damages            = {};
  updateOne.damages.normal     = req.body.normal ;
  updateOne.damages.fire       = req.body.fire ;
  updateOne.damages.water      = req.body.water ;
  updateOne.damages.electric   = req.body.electric ;
  updateOne.damages.grass      = req.body.grass ;
  updateOne.damages.ice        = req.body.ice ;
  updateOne.damages.fight      = req.body.fight ;
  updateOne.damages.poison     = req.body.poison ;
  updateOne.damages.ground     = req.body.ground ;
  updateOne.damages.flying     = req.body.flying ;
  updateOne.damages.psychic    = req.body.psychic ;
  updateOne.damages.bug        = req.body.bug ;
  updateOne.damages.rock       = req.body.rock ;
  updateOne.damages.ghost      = req.body.ghost ;
  updateOne.damages.dragon     = req.body.dragon ;
  updateOne.damages.dark       = req.body.dark ;
  updateOne.damages.steel      = req.body.steel ;

  pokemon[req.params.index]=updateOne;

  res.redirect( '/pokemon/');
});

//-----------DESTROY Route-----------
app.delete ( '/pokemon/:index', ( req , res ) => {

  //remove the pokemon at that index position
  pokemon.splice( req.params.index, 1);
  res.redirect ( '/pokemon' );
});

//-----------Server-----------
app.listen( PORT, () => {
  console.log( 'listening on port ' + PORT);
});

//useful resources:

//iterating over objects using ejs:
//http://stackoverflow.com/questions/31764552/ejs-how-to-iterate-object
