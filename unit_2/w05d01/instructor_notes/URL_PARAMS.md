# URL and Query Parameters

## Lesson Objectives

1. Read URL parameters
1. Place routes in correct order

## Read URL parameters

Most of the time, we'll use segments in the path section of the URL to modify how our application works

```javascript
const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/:index', (req, res) => {
    res.send(fruits[req.params.index]);
});

app.listen(3000,() => {
    console.log('listening');
});
```

Now visit http://localhost:3000/fruits/0

## Place routes in correct order

- Express starts at the top of your server.js file and attempts to match the url being used by the browser with routes in the order in which they're defined
- URL params (e.g. :foo, :example, :index) can be anything, a number, or even a string
    - Occasionally, a less specific route with a URL param will catch something that is supposed to go to something more specific

```javascript
const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/:index', (req, res) => { //:index can be anything, even awesome
    res.send(fruits[req.params.index]);
});

app.get('/fruits/awesome', (req, res) => { //this will never be reached
    res.send("Fruits are awesome!");
});

app.listen(3000,() => {
    console.log('listening');
});
```

If this happens, reorder them so that more specific routes come before less specific routes (those with params in them)

```javascript
const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/awesome', (req, res) => {
    res.send("Fruits are awesome!");
});

app.get('/fruits/:index', (req, res) => {
    res.send(fruits[req.params.index]);
});

app.listen(3000,() => {
    console.log('listening');
});
```
