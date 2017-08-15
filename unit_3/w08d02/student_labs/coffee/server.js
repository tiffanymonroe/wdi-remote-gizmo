//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const coffeeController = require('./controllers/coffee.js');
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.json());
app.use('/coffee', coffeeController);

//Connections
mongoose.connect('mongodb://localhost:27017/coffee');
mongoose.connection.once('open', ()=>{
  console.log('connected to mongoose');
})

app.listen(3000, ()=>{
  console.log("Hello, coffee. <3");
})
