//GOTCHA!!! Don't forget to `npm install` if you want to run this code

//Dependencies
const express     = require ( 'express' );
const app         = express();
const pokemon   = require ( './models/pokemon.js' );

//Port
const port        = 3000;

// welcome page
app.get ( '/' , ( req  , res ) => {
  res.send('Welcome to the Pokemon App!');
});

//Restful route 1/7 INDEX
app.get ( '/pokemon' , ( req , res ) => {
  res.render('index.ejs' , {
    pokemon : pokemon
  });
});

//Restful route 2/7 SHOW
app.get ( '/pokemon/:id' , ( req , res ) => {
  res.render ( 'show.ejs' , { pokemon : pokemon[ req.params.id ] });
});

//server listen
app.listen ( port, ()=> {
  console.log('listening to port' , port);
} );
