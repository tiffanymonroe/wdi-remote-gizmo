![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Pokedex <br>
Type: Homework<br>
Duration: 4 + hours <br>
Creator: Thom Page WDIr-Panthalassa <br>
Adapted by: Kristyn Bryan<br>
Course: WDIR-Gizmo<br>

---


# Make a POKEDEX

![](http://2.bp.blogspot.com/_-wYnCaxCjpQ/TLzx5cAvEGI/AAAAAAAACfw/_RCnrFIP7LM/s1600/poke2.jpg)


## App: Full CRUD and REST

Your mission is to make a Pokémon character manager (a Pokédex).

All you are given is a `pokemon.js` file that has all the raw data for 151 Pokémon (it's over 50,000 lines of code). You can render this as JSON in your browser. If you decide to check it out in your text editor, don't click on or open this file unless you are prepared to wait a minute or so for it to load. It is a huge file.

**It is up to you how you build your app**, in what order you want to do things, what kind of design flow your app will have, where you put your delete button, etc, and what parts of the Pokémon data your pages will display.

There are a few requirements to keep in mind:

## MVP

The app will:

  - display a bunch of Pokémon images on the index
  - have separate show pages for each Pokémon
  - have the ability to add a new Pokémon
  - have the ability to edit existing Pokémon
  - have the ability to delete Pokémon

# Setup for Tonight

  Ideally, your app should follow the MVC format of *models*, *views*, and *controllers*.

  You will want a folder each for Models, Views, and Controllers.

## Routes

The app will use RESTful Routes:

- Index
  - GET `/pokemon`
<br>
- Show
  - GET `/pokemon/:id`
<br>
- New
  - GET `/pokemon/new`
<br>
- Edit
  - GET `/pokemon/:id/edit`
<br>
- Create
  - POST `/pokemon`
<br>
- Update
  - PUT `/pokemon/:id`
  <br>
- Destroy
  - DELETE `/pokemon/:id`


## Starter Code

```
// server.js

var express    = require('express'),
    app        = express(),
    Pokemon    = require('../models/pokemon.js');

// INDEX
app.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
});

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});

```

## Data

### Notes on the Pokémon data and what to display

The `pokemon.js` file is massive and there is a ton of data to parse through. You need not display all of it on your pages. On your index page, you can just render the images.

Here are suggestions for what to display on your Pokémon's show page:

- The pokemon's name
- The image of the pokemon
- An unordered list of the Pokemon's types (eg. water, poison, etc).
- The pokemon's stats for HP, ATTACK, and DEFENSE.


## Notes on testing

Sometimes you don't want to have to build out a view or a form in order to test if a POST, PUT, or DELETE route is working. Use Postman or cURL on these routes and console.log a message and/or req.body to see if the route is working, and worry about the view later.


# Commits

The order of your commits this time does not matter, but refer back to the MVP to make sure that you're meeting all of the requirements. Make your commits as you complete the work.

Examples:
<hr>
** Commit your work.** <br>
"Server is working and displays a plain index page"
<hr>


<hr>
** Commit your work.** <br>
"Displays a bunch of Pokémon images on the index".
<hr>

<hr>
** Commit your work.** <br>
"Has separate show pages for each Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to add a new Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to edit existing Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to delete Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"The app uses RESTful routing, all seven RESTful routes".
<hr>

<hr>
** Commit your work.** <br>
"The app uses the MVC pattern established with views and models".
<hr>

<hr>
** Commit your work.** <br>
"View templates are complete".
<hr>

<hr>
** Commit your work.** <br>
"Static assets included - CSS".
<hr>

<hr>
** Commit your work.** <br>
"Static assets included - jQuery".
<hr>


# Hungry for More?

## Style your App!

- Use static assets

- Make your app look and act nicely with static assets (set up a public folder and add some css, js)-- try using jQuery.

## Need some style inspiration?
These are screenshots from what other students have done to their Pokedex:

![](https://i.imgur.com/KuMLqH3.png)

<hr>

![](https://i.imgur.com/liFVa27.png)

<hr>

![](https://i.imgur.com/zvMKkKG.png)

## Investigation

If you get everything done, make a copy of your pokedex homework. Look into using the mongodb node package with express within your copy:
https://www.npmjs.com/package/mongodb

Try to connect your app to a mongo db. Investigate how you can do Read operations, and then how to do Create operations inside the controller in your app. You might want to seed your Mongo db with select Pokémon data.

Note that this is advanced, and is not how we will be doing Mongo queries inside our app in the future. Instead, we will be using a node package called Mongoose which uses different commands.

Nevertheless, it is worth your time to investigate how to get mongo connected to your app, and how to make raw mongo queries within it, even if you get absolutely nowhere with it.
