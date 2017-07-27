const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fruits = require('./models/fruits.js')
const methodOverride = require('method-override')

// app.use((req, res, next)=>{
//     console.log("run this every time");
//     next();
// });

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));


app.get('/fruits/', (req, res)=>{
    res.render('index.ejs', {
        fruits: fruits
    });
});

app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});



app.put('fruits/:index', (req, res) => {
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
    fruits[req.params.index] = req.body;
    res.redirect('/fruits');
});

app.get('fruits/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    fruits: fruits[req.params.index],
    index: req.params.index
  });
});

app.post('/fruits', (req, res)=>{
    console.log(req.body)
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

app.get('/fruits/:index', (req, res)=>{
    res.render('show.ejs', {
        fruit: fruits[req.params.index]
    });
});



// create DELETE route
app.delete('/fruits/:index', (req, res) => {
    fruits.splice(req.params.index, 1); //remove the item from the array
    res.redirect('/fruits'); //redirects back to the index route
});

app.listen(3000,()=>{
    console.log('listening');
});
