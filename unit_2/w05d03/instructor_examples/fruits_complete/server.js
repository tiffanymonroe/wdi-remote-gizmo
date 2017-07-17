const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fruits = require('./models/fruits.js')

// app.use((req, res, next)=>{
//     console.log("run this every time");
//     next();
// });

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'))

app.get('/fruits/', (req, res)=>{
    res.render('index.ejs', {
        fruits: fruits
    });
});

app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

app.post('/fruits', (req, res)=>{
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

app.listen(3000,()=>{
    console.log('listening');
});
