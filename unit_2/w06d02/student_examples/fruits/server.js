const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Fruit = require('./models/fruits.js');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, ()=>{
        res.redirect('/fruits');
    });
});

app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});

app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});

mongoose.connect('mongodb://localhost:27017/basiccrud');
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(3000, ()=>{
    console.log('listening');
});
