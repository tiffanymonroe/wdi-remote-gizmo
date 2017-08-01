const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});

app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (error, foundFruit)=>{
        res.render('show.ejs', {
            fruit: foundFruit
        });
    });
});

app.post('/fruits', (req, res)=> {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(
        req.body,
        (error, createdFruit)=>{
            res.redirect('/fruits');
        }
    )
});

mongoose.connect('mongodb://localhost:27017/basiccrud');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.listen(3000, ()=>{
    console.log('I am listening');
});
