# Express Router

## Lesson Objectives

1. Explain What Express.Router does for us
1. Create External Controller File for Routes
1. Move Server.js Routes to External Controller File
1. Require Mongoose in Controller File
1. Use Controller File in Server.js
1. Remove References to Base of Controller's URLs

## Explain What Express.Router does for us

- Our server.js file is getting rather bloated
- express.Router will let us put our routes in a separate file

## Create External Controller File for Routes

1. `mkdir controllers`
1. `touch controllers/fruits.js`
1. Edit controllers/fruits.js

```javascript
var express = require('express');
var router = express.Router();

module.exports = router;
```

## Move Server.js Routes to External Controller File

rename `app` to `router`

```javascript
var express = require('express');
var router = express.Router();

router.get('/fruits/new', function(req, res){
    res.render('new.ejs');
});

router.post('/fruits/', function(req, res){
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruits.create(req.body, function(){
        res.redirect('/fruits');
    });
});

router.get('/fruits', function(req, res){
    Fruits.find({}, function(error, allFruits){
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});

router.get('/fruits/:id', function(req, res){
    Fruits.findById(req.params.id, function(err, foundFruit){
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});

router.delete('/fruits/:id', function(req, res){
    Fruits.findByIdAndRemove(req.params.id, function(err, data){
        res.redirect('/fruits')
    });
});

router.get('/fruits/:id/edit', function(req, res){
    Fruits.findById(req.params.id, function(err, foundFruit){ //find the fruit
        res.render(
    		'edit.ejs',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	);
    });
});

router.put('/fruits/:id', function(req, res){
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    //{new: true} tells mongoose to send the updated model into the callback
    Fruits.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedModel){
        res.redirect('/fruits');
    });
});

module.exports = router;
```

## Require Fruits Model in Controller File

```javascript
var express = require('express');
var router = express.Router();
var Fruits = require('../models/fruits.js')
//...
```

The `Fruits` model is no longer needed in `server.js`.  Remove it:

```javascript
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connection;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
```

## Use Controller File in Server.js

```javascript
var fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);
```

## Remove References to Base of Controller's URLs

Since we've specified that the controller works with all urls starting with /fruits, we can remove this from the controller file:

```javascript
var express = require('express');
var router = express.Router();

router.get('/new', function(req, res){
    res.render('new.ejs');
});

router.post('/', function(req, res){
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruits.create(req.body, function(){
        res.redirect('/fruits');
    });
});

router.get('/', function(req, res){
    Fruits.find({}, function(error, allFruits){
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});

router.get('/:id', function(req, res){
    Fruits.findById(req.params.id, function(err, foundFruit){
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});

router.delete('/:id', function(req, res){
    Fruits.findByIdAndRemove(req.params.id, function(err, data){
        res.redirect('/fruits')
    });
});

router.get('/:id/edit', function(req, res){
    Fruits.findById(req.params.id, function(err, foundFruit){ //find the fruit
        res.render(
    		'edit.ejs',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	);
    });
});

router.put('/:id', function(req, res){
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    //{new: true} tells mongoose to send the updated model into the callback
    Fruits.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedModel){
        res.redirect('/fruits');
    });
});

module.exports = router;
```
