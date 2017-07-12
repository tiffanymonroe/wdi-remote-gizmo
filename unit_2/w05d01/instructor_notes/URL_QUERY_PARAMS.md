# URL and Query Parameters

## Lesson Objectives

1. Read Query Parameters
1. Read URL parameters
1. Place routes in correct order

## Read Query Parameters

You can pass parameters into your application from the browser via query parameters:

http://localhost:3000/?username=matt&password=foo

We can read this from within our route handler callback:

```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send(req.query);
});

app.listen(3000,function(){
    console.log('listening');
});
```

## Read URL parameters

- Query params isn't too common with web applications these days
- Most of the time, we'll use segments in the path section of the URL to get data

```javascript
var express = require('express');
var app = express();

var fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/:index', function(req, res){
    res.send(fruits[req.params.index]);
});

app.listen(3000,function(){
    console.log('listening');
});
```

Now visit http://localhost:3000/fruits/0

## Place routes in correct order

- Express starts at the top of your server.js file and attempts to match the url being used by the browser with routes in the order in which they're defined
- URL params (e.g. :foo, :example, :index) can be anything, a number, or even a string
    - Occasionally, a less specific route with a URL param will catch something that is supposed to go to something more specific

```javascript
var express = require('express');
var app = express();

var fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/:index', function(req, res){ //:index can be anything, even awesome
    res.send(fruits[req.params.index]);
});

app.get('/fruits/awesome', function(req, res){ //this will never be reached
    res.send("Fruits are awesome!");
});

app.listen(3000,function(){
    console.log('listening');
});
```

If this happens, reorder them so that more specific routes come before less specific routes (those with params in them)

```javascript
var express = require('express');
var app = express();

var fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/awesome', function(req, res){
    res.send("Fruits are awesome!");
});

app.get('/fruits/:index', function(req, res){
    res.send(fruits[req.params.index]);
});

app.listen(3000,function(){
    console.log('listening');
});
```
