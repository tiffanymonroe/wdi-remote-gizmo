# CRUD App with Mongoose - Create and Read

## Lesson Objectives

1. Initialise a directory
1. Start express
1. Create New Route
1. Create Create Route
1. Connect Express to Mongo
1. Create Fruits Model
1. Have Create Route Create data in MongoDB
1. Create Index Route
1. Have Index Route Render All Fruits
1. Have Create Route redirect to Index After Fruit Creation
1. Create Show Route
1. Have Index Page Link to Show Route
1. Create show.ejs

## Initialise a directory

1. Create a directory for the app in `student_examples` and `cd` into it
1. `npm init`
1. `npm install express --save`
1. `touch server.js`
1. Edit package.json to have `"main": "server.js",`

## Start express

```javascript
var express = require('express');
var app = express();

app.listen(3000, function(){
    console.log('listening');
});
```

## Create New Route

```javascript
app.get('/fruits/new', function(req, res){
    res.send('new');
});
```

1. `mkdir views`
1. `npm install ejs --save`
1. `touch views/new.ejs`
1. Create the view

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>New Fruit page</h1>
        <form action="/fruits" method="POST">
            Name: <input type="text" name="name" /><br/>
            Color: <input type="text" name="color" /><br/>
            Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
            <input type="submit" name="" value="Create Fruit"/>
        </form>
    </body>
</html>
```

Render the view

```javascript
app.get('/fruits/new', function(req, res){
    res.render('new.ejs');
});
```

## Create Create Route

```javascript
app.post('/fruits/', function(req, res){
    res.send('received');
});
```

1. `npm install body-parser`
1. Use body parser in server.js:

```javascript
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
```

Check to see if req.body works:

```javascript
app.post('/fruits/', function(req, res){
    res.send(req.body);
});
```

Format data properly

```javascript
app.post('/fruits/', function(req, res){
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    res.send(req.body);
});
```

## Connect Express to Mongo

1. `npm install mongoose --save`
1. Inside server.js:

```javascript
var mongoose = require('mongoose');
var db = mongoose.connection;

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/basiccrud');
db.once('open', function() {
    console.log('connected to mongo');
});
```

## Create Fruits Model

1. `mkdir models`
1. `touch models/fruits.js`
1. Create the fruit schema

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fruitSchema = new Schema({
	name:  { type: String, required: true },
    color:  { type: String, required: true },
	readyToEat: Boolean
});

var Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
```

## Have Create Route Create data in MongoDB

Inside server.js:

```javascript
var Fruits = require('./models/fruits.js');
//... and then farther down the file
app.post('/fruits/', function(req, res){
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruits.create(req.body, function(){
        res.send('fruit created');
    });
});
```

## Create Index Route

```javascript
app.get('/fruits', function(req, res){
    res.send('index');
});
```

`touch views/index.ejs`

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits index page</h1>
    </body>
</html>
```

Render the ejs file

```javascript
app.get('/fruits', function(req, res){
    res.render('index.ejs');
});
```

## Have Index Route Render All Fruits

```javascript
app.get('/fruits', function(req, res){
    Fruits.find({}, function(error, allFruits){
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});
```

Update the ejs file:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits index page</h1>
        <ul>
            <% for(var i = 0; i < fruits.length; i++){ %>
                <li>
                    The <%=fruits[i].name; %> is  <%=fruits[i].color; %>.
                    <% if(fruits[i].readyToEat === true){ %>
                        It is ready to eat
                    <% } else { %>
                        It is not ready to eat
                    <% } %>
                </li>
            <% } %>
        </ul>
    </body>
</html>
```

Add a link to the create page:

```html
<nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav>
```

## Have Create Route redirect to Index After Fruit Creation

Inside the create route

```javascript
Fruits.create(req.body, function(){
    res.redirect('/fruits');
});
```

## Create Show Route

```javascript
app.get('/fruits/:id', function(req, res){
    Fruits.findById(req.params.id, function(err, fruit){
        res.send(fruit);
    });
});
```

## Have Index Page Link to Show Route

```html
<li>
    The <a href="/fruits/<%=fruits[i].id; %>"><%=fruits[i].name; %></a> is  <%=fruits[i].color; %>.
    <% if(fruits[i].readyToEat === true){ %>
        It is ready to eat
    <% } else { %>
        It is not ready to eat
    <% } %>
</li>
```

## Create show.ejs

1. `touch views/show.ejs`
1. Add HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits show page</h1>
        The <%=fruit.name; %> is  <%=fruit.color; %>.
        <% if(fruit.readyToEat === true){ %>
            It is ready to eat
        <% } else { %>
            It is not ready to eat
        <% } %>
        <nav>
            <a href="/fruits">Back to Fruits Index</a>
        </nav>
    </body>
</html>
```

Render the ejs

```javascript
app.get('/fruits/:id', function(req, res){
    Fruits.findById(req.params.id, function(err, foundFruit){
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});
```
