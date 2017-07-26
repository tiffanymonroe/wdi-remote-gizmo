const express = require('express');
const app = express();
const fruits = require('./models/fruits.js');
const bodyParser = require('body-parser');

//make req.body available to all routes
app.use(bodyParser.urlencoded({extended:false}));

//set a static files dir to public dir
app.use(express.static('public'));

app.get('/fruits', (req, res)=>{
    res.render('index.ejs', {
        allFruits: fruits
    });
});

app.post('/products', (req, res)=>{
    console.log('create route accessed');
    console.log(req.body);
    res.send(req.body);
});

app.post('/fruits', (req, res)=>{
    //data manipulation
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits'); //redirect
});

//new route
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs');
});



//show route
app.get('/fruits/:index', (req, res)=>{
    // res.send(fruits[parseInt(req.params.index)]) // -- also works
    res.render('show.ejs', {
        fruit: fruits[req.params.index]
    });
});

app.listen(3000, ()=>{
    console.log('I am listening');
});
