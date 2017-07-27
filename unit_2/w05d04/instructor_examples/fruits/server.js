const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const fruits         = require('./models/fruits.js');

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

// an edit route for an edit.ejs page
app.get('/fruits/:index/edit', (req, res) => {

  res.render('edit.ejs', {
    fruit: fruits[req.params.index],
    index: req.params.index
  })

})

app.put('/fruits/:index', (req, res) => {

  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false
  }

  fruits[req.params.index] = req.body;

  res.redirect('/fruits');

})



// create our delete method

app.delete('/fruits/:index', (req, res) => {
  // take the item out of the fruits array in our model
  fruits.splice(req.params.index, 1);
  res.redirect('/fruits')
})





app.listen(3000,()=>{
    console.log('listening');
});
