var express = require('express');
var app = express();
var fruits = require('./models/fruits.js');

app.get('/fruits', function(req, res){
    res.render('index.ejs', {
        allFruits: fruits
    });
});

app.get('/fruits/:index', function(req, res){
    // res.send(fruits[parseInt(req.params.index)]) // -- also works
    res.render('show.ejs', {
        fruit: fruits[req.params.index]
    });
});

app.listen(3000, function(){
    console.log('I am listening');
});
