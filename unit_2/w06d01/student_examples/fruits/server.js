const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');


//middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//new route

app.get('/fruits/new', (req, res) =>{
  res.render('new.ejs');
});

//index route
app.get('/fruits', (req, res)=>{
  Fruit.find({}, (error, allFruits)=>{
    res.render('index.ejs', {
      fruits: allFruits
    });
  });
});

//create route

app.post('/fruits/', (req, res) => {
    if(req.body.readyToEat === 'on'){
          req.body.readyToEat = true;
      } else {req.body.readyToEat = false;
    }
  //create route in mongodb
  Fruit.create(
    req.body,
    //req.body
    (error, createdFruit) => {
      res.send(createdFruit)
    }
  )
});

//show route

app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('show.ejs', {
      fruit: foundFruit
    });
  });
});

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/basiccrud');

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});


//listener
app.listen(3000, () => {
  console.log("Up and running, kids!");
});
