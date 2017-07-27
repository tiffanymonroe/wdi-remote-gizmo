![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Pokemon Manager <br>
Type: Homework<br>
Duration: 4:00 <br>
Creator: Original source: Pokedex: Thom Page WDIr-Panthalassa <br>
Adapted by: Kristyn Bryan<br>
Course: WDIR-Gizmo <br>

---


# Manage Your Pokemon Collection & Create New Pokemon!

![](https://i.ytimg.com/vi/5pDthGSHo58/maxresdefault.jpg)

# Setup


# The App

  1. Display an index page with the images of all the Pokémon

  2. Have separate show pages for each Pokémon and display at least 4 pieces of data (you choose!)

  3. Have the ability to [add a new Pokémon](http://www.mypokecard.com/en/Gallery/my/galery/dKKtFcBr99ot.jpg) (they should be able to add data for the 4 pieces that you decide on)(Note: Some of this data that is in the original Pokemon data is in objects, arrays, or just a single string - be aware of this when you are creating a new Pokemon. You may need to make adjustments to your data on your server before you push it into the Pokemon array).

  4. You choose how you want to lay out your pages, what kind of design flow your app will have, where you put your input form, etc, and what parts of the Pokémon data your pages will display.

# Data
1. You are have been provided a `pokemon.js` file that has all the raw data for 31 Pokémon. This is located inside `homework/pokemon_manager_app/data/pokemon.js`.

# Routes

The app should use RESTful Routes:

- Index
  - GET `/pokemon`
- Show
  - GET `/pokemon/:id`
- New
  - GET `/pokemon/new`
- Create
  - POST `/pokemon`

# MVC

*M*odels, *V*iews, *C*ontroller

- Ideally, your app should follow the MVC format, but we'll do an abbreviated version of that tonight.

- You should have one file for your server in your main app directory.

- You should have one file for your data in your main app directory (we provided this for you: `pokemon.js`)

- You should have a  *views* folder that will contain the `ejs` files for your views.


## Starter Code

```
// server.js

const express    = require('express'),
    app	       = express(),
    Pokemon    = require('/pokemon.js');

// INDEX
app.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
});

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});
```

## Pokemon Data

The `pokemon.js` file is large and there is a lot of data to parse through. You need not display all of it on your pages. On your index page, you can just render the images.

Here are some suggestions for what you could display on your Pokémon's show page:

- The pokemon's name
- The image of the pokemon
- An unordered list of the Pokemon's types (eg. water, poison, etc).
- The pokemon's stats for HP, ATTACK, and DEFENSE.

# Commits

- The order of your commits this time does not matter, but the app is complete when you've done six of these seven commits.

- When you have completed a section, make one of the following commits:

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
"The app uses RESTful routing".
<hr>

<hr>
** Commit your work.** <br>
"The app uses the MVC pattern based on the instructions".
<hr>

<hr>
** Commit your work.** <br>
"Completed XYZ in the Hungry for More section"
<hr>

</details>


## Need a help on getting started?

- In the root of the project, `npm init`. This will give you a `package.json`

- `npm install --save express ejs body-parser` (YEP! You can install them all at once)

- in `server.js` set up your server according to the prompts

- Require your data.

- Require your dependencies.

- Write your middleware.

- Your `server.js` will have two routes, one for displaying an index of all the pokemon, and one for showing a single pokemon according to the user's input.

- Make the views.



# Want some inspiration?

## Index Page
![](https://i.imgur.com/HSyJJPS.png)

## Show Page
![](https://i.imgur.com/qdG6Lzs.png)

## New Page
![](https://i.imgur.com/j7B2JOU.png)

# Hungry for more?

1. Allow users to add a picture of the Pokemon that they create.

2. Once a user creates a new Pokemon, they should be redirected to the show page for their Pokemon.

3. Add some styling to your pages with CSS.
