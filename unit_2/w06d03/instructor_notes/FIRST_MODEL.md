# Two Model CRUD App - No relationship - First Model

## Lesson Objectives

1. Init Directory
1. Start express
1. Create Home page
1. Create Authors Index
1. Create Authors New Page
1. Set up Author Model
1. Create Authors Post Route
1. Show Authors on Index Page
1. Create Authors Show Page
1. Create Authors Delete Route
1. Create Authors Edit Page
1. Create Authors Put Route

## Init Directory

1. `mkdir student_examples/blog`
1. `cd student_examples/blog`
1. `npm init`
    - make entry point `server.js`
1. `npm install express --save`
1. `touch server.js`

## Start express

server.js:

```javascript
var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log('listening....');
});
```

## Create Home page

1. `npm install ejs --save`
1. `mkdir views`
1. `touch views/index.ejs`

views/index.ejs:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1>Welcome to the Blog</h1>
			<nav>
				<ul>
					<li>
						<a href="/authors">Authors</a>
					</li>
					<li>
						<a href="/articles">Articles</a>
					</li>
				</ul>
			</nav>
		</header>
	</body>
</html>
```

server.js:

```javascript
app.get('/', function(req, res){
	res.render('index.ejs');
});
```

## Create Authors Index

1. `mkdir views/authors`
1. `touch views/authors/index.ejs`

views/authors.ejs:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1>Authors</h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/authors/new">Create a new Author</a>
					</li>
				</ul>
			</nav>
		</header>
	</body>
</html>
```

1. `mkdir controllers`
1. `touch controllers/authors.js`

controllers/authors.js:

```javascript
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('authors/index.ejs');
});

module.exports = router;
```

Use the controller in server.js:

```javascript
var authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);
```

## Create Authors New Page

`touch views/authors/new.ejs`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1>Create an Author</h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/authors">Authors Index</a>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<form action="/authors" method="post">
				<input type="text" name="name" />
			</form>
		</main>
	</body>
</html>
```

create route in `controllers/authors.js`

```javascript
router.get('/new', function(req, res){
	res.render('authors/new.ejs');
});
```

## Connect to mongo

1. `npm install mongoose --save`
1. Connect in server.js

```javascript
var mongoose = require('mongoose');
//...
//...farther down the page
mongoose.connect('mongodb://localhost:27017/blog');

mongoose.connection.once('open', function(){
	console.log('connected to mongo');
});
```

## Set up Author Model

1. `mkdir models`
1. `touch models/authors.js`

```javascript
var mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
	name: String
});

var author = mongoose.model('Author', authorSchema);

module.exports = author;
```

## Create Authors Create Route

1. `npm install body-parser --save`
1. use body parser in server.js

```javascript
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
```

controllers/authors.js

```javascript
var Author = require('../models/authors.js');
//...
//...farther down the page
router.post('/', function(req, res){
	Author.create(req.body, function(err, createdAuthor){
		res.redirect('/authors');
	});
});
```

## Show Authors on Index Page

controllers/authors.js:

```javascript
router.get('/', function(req, res){
	Author.find({}, function(err, foundAuthors){
		res.render('authors/index.ejs', {
			authors: foundAuthors
		});
	})
});
```

views/authors/index.ejs:

```html
<main>
    <h2>List of Authors</h2>
    <ul>
        <% for(var i = 0; i < authors.length; i++){ %>
            <li>
                <a href="/authors/<%=authors[i]._id%>"><%=authors[i].name%></a>
            </li>
        <% } %>
    </ul>
</main>
```

## Create Authors Show Page

`touch views/authors/show.ejs`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1>Show Page for <%=author.name%></h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/authors">Author Index</a>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<section>
				<h2>Author Attributes:</h2>
				<ul>
					<li>Name: <%=author.name%></li>
				</ul>
			</section>
		</main>
	</body>
</html>
```

towards the bottom controllers/authors.js:

```javascript
//avoid this handling /new by placing it towards the bottom of the file
router.get('/:id', function(req, res){
	Author.findById(req.params.id, function(err, foundAuthor){
		res.render('authors/show.ejs', {
			author: foundAuthor
		});
	});
});
```

## Create Authors Delete Route

1. `npm install method-override --save`
1. use method-override in server.js:

```javascript
var methodOverride = require('method-override')

app.use(methodOverride('_method'));
```

controllers/authors.js:

```javascript
router.delete('/:id', function(req, res){
	Author.findByIdAndRemove(req.params.id, function(){
		res.redirect('/authors');
	});
});
```

views/authors/show.ejs

```html
<section>
    <form action="/authors/<%=author._id%>?_method=DELETE" method="post">
        <input type="submit" value="Delete Author"/>
    </form>
</section>
```

## Create Authors Edit Page

Create a link on views/authors/show.ejs:

```html
<section>
    <a href="/authors/<%=author._id%>/edit">Edit</a>
</section>
```

controllers/authors.js

```javascript
router.get('/:id/edit', function(req, res){
	Author.findById(req.params.id, function(err, foundAuthor){
		res.render('authors/edit.ejs', {
			author: foundAuthor
		});
	});
});
```

`touch views/authors/edit.ejs`

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<header>
			<h1>Edit <%=author.name%>'s Info</h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/authors">Authors Index</a>
					</li>
				</ul>
			</nav>
		</header>
		<main>
			<h2>Author Attributes:</h2>
			<form action="/authors/<%=author._id%>?_method=PUT" method="post">
				<input type="text" name="name" value="<%=author.name%>"/><br/>
				<input type="submit" value="Update Author"/>
			</form>
		</main>
	</body>
</html>
```

## Create Authors Put Route

controllers/authors.js:

```javascript
router.put('/:id', function(req, res){
	Author.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/authors');
	});
});
```
