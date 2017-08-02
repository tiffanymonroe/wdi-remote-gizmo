//Dependancies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

//Index Route
app.get('/', (req, res)=>{
  res.render('index.ejs')
})


app.listen(3000, ()=>{
  console.log("What's new? I'm listening.");
})
