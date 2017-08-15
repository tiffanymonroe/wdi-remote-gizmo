//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todosController = require('./controllers/todos.js');
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.json()); //always put bodyParser first!!!//
app.use(express.static('public'));
app.use('/todos', todosController);


//Connections
mongoose.connect('mongodb://localhost:27017/meancrud');
mongoose.connection.once('open', ()=>{
  console.log('connected to mongoose');
})
app.listen(3000, ()=>{
  console.log("I'm listening.");
})
