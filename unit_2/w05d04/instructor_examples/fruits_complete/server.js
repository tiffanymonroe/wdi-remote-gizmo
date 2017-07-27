const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const fruits = require('./models/fruits.js')

// app.use((req, res, next)=>{
//     console.log("run this every time");
//     next();
// });

app.use(methodOverride('_method'));
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

app.get('/fruits/:index/edit', function(req, res){
  res.render(
    'edit.ejs', //render views/edit.ejs
    { //pass in an object that contains
      fruit: fruits[req.params.index], //the fruit object
      index: req.params.index //... and its index in the array
    }
  );
});

app.put('/fruits/:index', (req, res) => { //:index is the index of our fruits array that we want to change
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
  fruits[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
  res.redirect('/fruits'); //redirect to the index page
});







app.delete('/fruits/:index', (req, res) => {
  fruits.splice(req.params.index, 1);
  res.redirect('/fruits');
})


app.listen(3000,()=>{
    console.log('listening');
});
