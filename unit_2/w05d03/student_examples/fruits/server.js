const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

// app.use((req, res, next) => {
//   console.log("I run for all routes");
//   next();  //goes to the next route, otherwise it will stop
// });

app.get('/fruits', (req, res)=>{
    res.render('index.ejs', {
        allFruits: fruits
    });
});

app.post('/fruits', (req, res)=>{
  res.send(req.body);
});



app.post('/fruits', (req, res) => {
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits');
  // res.send('I gots the fruit!')
});

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
});

app.get('/fruits/:index', (req, res)=>{
    // res.send(fruits[parseInt(req.params.index)]) // -- also works
    res.render('show.ejs', {
        fruit: fruits[req.params.index]
    });
});

app.listen(3000, ()=>{
    console.log('I am listening');
});
