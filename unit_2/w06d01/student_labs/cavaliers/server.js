//dependencies
const express = require('express');
const app = express();

//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//Connect to Mongo

const mongoose = require('mongoose');
const Pup = require('./models/cavaliers.js');



//New Route

app.get('/cavs/new', (req, res) => {
  res.render('new.ejs');
});



//Index Route

app.get('/cavs', (req, res) => {
  // Pup.find({}, (error, allPups) =>{
    res.render('index.ejs'
    // , {
    //   cavs: allPups
    // }
  );
  });
});

//Create Route

app.post('/cavs/', (req, res) => {
  if(req.body.altered === 'on'){
    req.body.altered = true;
  } else {
    req.body.altered = false;
  }
  Pup.create(req.body, (error, createdPup) =>{
    res.redirect('/cavs');
  });
});

//Listener
app.listen(3000, () => {
  console.log("Cavs are the best puppers!");


});
