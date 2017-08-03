![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: EJS Partials and Code Wars <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
Course: WDIR-Gizmo <br>
Competencies: EJS Forms, Code Wars <br>
Prerequisites: EJS , Node, Express, MongoDB<br>

---

## EJS Partials

## Intro
EJS allows you to create reusable elements that can go on multiple pages and will allow you to streamline your ejs page creation and updates.

### Options
Some of you have already figured out how to use partials! Awesome! Let's get you on code wars! Go ahead and sign up (you can use your github sign up) and get started. www.codewars.com - this will get you practicing your JS and introduce you to TDD (Test Driven Development). TDD is a method (often associated with Agile Methodologies) where programmers write tests for their code first and then build code that first fails the tests and then passes it. 

#### First challenge

[Even or Odd](https://www.codewars.com/kata/even-or-odd)

<br>
Choose Train 

![code wars challenge](https://i.imgur.com/xvEIbgA.png)

<br>

Tips: Kata Trainer:

![Only appers sometimes](https://i.imgur.com/DvK91d1.png)
![Second part](https://i.imgur.com/sdhozZq.png)

**Note:** Code Golf is a recreational type of comeptitive coding to write the shortest code possible. It is not meant for to be used in professional environments. 

<br>
Write your code in the `Solution` section
<br>

![main kata screen](https://i.imgur.com/OXMcPG4.png)

When you are ready click `Attempt` - this will run the 4 tests listed in `Sample Tests` - if you pass all the tests you win and you get to check out other people's solutions!

Note: That `Sample Tests` section uses tests, as in the kind for Test Driven Development (TDD). At first if you run it all tests will fail, as you build your code all the tests will pass. We'll likely do a morning exercise specific to TDD later in the course.

TDD/BDD starts with writing tests (already done for you) and then failing them all. 

![failed code wars tests](https://i.imgur.com/cvvehB4.png)

Coders read through the errors and resolve them until there are no errors left. 

This was my next step:

![solved even](https://i.imgur.com/jjWPzw6.png)

And the challenge is completed when all the tests pass!

![All tests passed](https://i.imgur.com/8UgMeDZ.png)

You'll see a green 'Submit Final' button. This allows you to clean up your code before submitting to the community

#### Recommended challenges
- [Bob's Short Forms](https://www.codewars.com/kata/bobs-short-forms)
- [Coin Combination](https://www.codewars.com/kata/calculator-coin-combination)
- [Sudoku checker](https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript)



### EJS Partials

#### Set Up

We'll go back to Mongoose Store.
-  `cd` into the directory `ejs-partials-mognoose-store` that is in the morning exercise folder for today
- `npm install`
- open two more Terminal tabs (one for `mongod` and one for `nodemon`
- start `mongod` in a new terminal window
- start `nodemon`
- `atom .` in the last tab
- go to `http://localhost:3000/products` in the browser - You should see an empty mongo store!
- organize your windows so you can easily go between the browser, terminal and atom
- go to `http://localhost:3000/products/seed/newproducts/viaseedfile` you should see JSON of the seed data
- go back to `http://localhost:3000/products` (may need to reload page to see data/products)
- now the mongoose store should have products!


**Note**: if you made a mistake, repopulated your db twice or just want to get my mongoose store out of your mongodb got here `http://localhost:3000/products/dropdatabase/cannotundo/areyoursure/reallysure/okthen`

#### First Partial 

EJS partials let you create reusable EJS that you only have to edit in one place and it will update across all your pages where the partial is included

- in the views folder: `mkdir partials`
- then in the partials folder: `touch head.ejs`

Right now, only the `new` route has the CSS linked. Let's cut that code out of the head and paste it into our `head.ejs` file (don't forget to save all the files!) 
```
    <meta charset="utf-8">
    <title>Mongoose Store</title>
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/skeleton.css">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/$.png">
 ```

- Save and reload the new page 
- Goodbye CSS!
- Let's add it back in as a partial

```
  <head>
    <% include ../partials/head.ejs %>
  </head>
```
- don't forget to save and reload the page
- cool! Now let's copy paste that code onto the other three ejs pages: `edit.ejs`, `index.ejs`, and `show.ejs`
- navigate to the index, show, edit and new routes and see that our css has returned Hooray!


#### Header partial 
- Right now only our index page has a nav bar, let's follow the above steps and create a partial for the header
- `touch nav.ejs` inside the `partials` folder
- cut (out of `index.ejs`)
```
      <div class="row nav">
        <a href="/products"><h1 id="store" class="six columns">The Mongoose Store</h1></a>
        <span class="three columns">&nbsp;</span>
        <a href="/products/new"><button type="button" name="button" class="new-product three columns">New Product</button></a>
        <span class="one column">&nbsp;</span>
      </div>
```

- paste it into `nav.ejs`
- in your 4 ejs files:
 ```
 <% include ../partials/nav.ejs %>
 
```
- be sure to save save save all your files

#### Footer partial 
- `touch footer.ejs` inside the `partials folder`
- add
```
    <footer>
        all rights reversed
    </footer>
```
- now add the partials to the four ejs files using the same pattern we've used in our previous two partials
- don't forget to save


#### Editing a partial
Whoops! Our footer says `all rights reversed` it should say `all rights reserved`
Let's update our `footer.ejs` file
- click around the mongoose store, did the footer change on all your pages now? 
- If so sweet! If not, let's troubleshoot
