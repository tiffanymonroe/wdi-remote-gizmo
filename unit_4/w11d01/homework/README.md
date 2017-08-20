![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: Rails-Angular Dating App<br>
Type: Homework<br>
Duration: 5-6 hours<br>
Creator: Thom Page<br>
Topics: Rails API, CORS, Angular, Flexbox<br>
<hr>

# RAILS-ANGULAR DATING APP

![](https://i.imgur.com/VPr1n9Q.png)

Let's get Rails and Angular together on a date!

Let's hope they don't say yuck! Let's hope they can have a good time together! &#x1F37F;

* **Make a dating app using Rails and Angular that matches some characters for a get-to-know-you appointment**

# DATING APP - FRONTEND EXAMPLE

![landing](http://i.imgur.com/a0luMDh.png)

![match](http://i.imgur.com/KkKfBuU.png)

Above is a potential frontend for the Dating App. The layout has a header, a column on the left, a column on the right, a middle column with the main content, and a footer. ie. The "[Holy Grail](https://en.wikipedia.org/wiki/Holy_Grail_(web_design))" layout.

Here is a [Quick video of the expected Dating App functionality](https://youtu.be/jLCder5O6Ls)

## The App
Note that step-by-step directions are below. Refer to the *Start Here* section to begin.

### Required APP FUNCTIONALITY (Commits 1 - 8)

* Three random daters appear in each of the left and right columns.
* Add new daters with the form in the footer.

### HUNGRY-FOR-MORE APP FUNCTIONALITY (Commits 9 - 14)

* Mouse over on one side: user appears in the Match Box
* Mouse over the other side: user appears in the Match Box, and now that there are two users in the Match Box, the Match button appears.
* Click the match button: the daters come together and are randomly given either lovehearts or a failure message.
* Edit existing daters by clicking on them
* Expert styling
* Add animation to the Match process


<br>
<hr>

# &#x1F4EF; START HERE


## &#x1F685; Make Rails Server

* Make a directory `dating_app`

* Open up the directory in atom

* In the `dating_app` directory in Terminal, make a new rails app `dating_app_api` with the `--api` flag and postgresql as the db, and go into it

* Create the db

Our model will be `user`, in the sense that we can match the (pretend) users of the app together.

A user will have:

* name
* gender
* age (integer)
* img

* Scaffold the app, and specify the integer datatype for `age`:

```
rails generate scaffold user name gender age:integer img
```

![](https://i.imgur.com/SlXMb0y.png)

* Check the migration file has the correct fields for the upcoming migration:

![](https://i.imgur.com/M2OYF4S.png)

* Migrate the migrations

* Check the `schema.rb`

![](https://i.imgur.com/ebC3YhF.png)

* Seed the db with the seed data below

In `db/seeds.rb`

```
User.create([
		{ name: 'Ryan Gosling', age: 35, gender: 'm', img: 'http://coolspotters.com/files/photos/591533/ryan-gosling-large.jpg?1357449177'},
		{ name: 'Hypatia of Alexandria', age: 1700, gender: 'f', img: 'http://static1.squarespace.com/static/53e031f1e4b088c3aac80e47/t/5636ebf1e4b0683b6c56cb43/1446440030277/hypatia.jpg'},
		{ name: "Hogan", age: 40, gender: 'm', img: 'http://myfivebest.com/wp-content/uploads/2010/10/crime_crane.jpg'},
		{ name: 'Lumpy Space Princess', age: 29, gender: 'f', img: 'http://i0.wp.com/www.drawcentral.com/wp-content/uploads/2013/03/Lumpy-Space-Princess.jpg?resize=150%2C150'},
		{ name: 'Idris Elba', age: 43, gender: 'm', img: 'http://www.ramascreen.com/wp-content/uploads/2015/01/Idris-Elba-Luther-150x150.jpg'},
		{ name: 'The Trash Heap of Fraggle Rock', age: 1000, gender: 'f', img: 'http://www.toughpigs.com/wp-content/uploads/2009/12/trasheap-150x150.jpg'},
		{ name: 'Homeless guy', age: 60, gender: 'm', img: 'https://s-media-cache-ak0.pinimg.com/236x/03/d1/53/03d153c14b49a88cab97d58a5bedb6e8.jpg'},
		{ name: 'Raisin', age: 20, gender: 'f', img: 'http://cdn.lifeinthefastlane.com/wp-content/uploads/2010/09/raisin.jpg'},
		{ name: 'Jim', age: 49, gender: 'm', img: 'http://www.argylejournal.com/wp-content/uploads/2012/10/Jim-Ellinghausen-e1349993531939-150x150.jpg'},
		{ name: 'Muttley', age: 2, gender: 'm', img: 'http://gifrific.com/wp-content/uploads/2012/08/Cartoon-Character-Mutley-Laughing-150x150.gif'},
		{ name: 'Slimer', age: 90, gender: 'f', img: 'http://orig13.deviantart.net/ef48/f/2014/309/1/5/slimer_by_bbjeg-d85exys.png'},
		{ name: 'Mist', age: 3400000, gender: 'f', img: 'http://www.kidthesaurus.com/wp-content/uploads/2015/07/mist-150x150.jpg'},
		{ name: 'Ching Shih', age: 25, gender: 'f', img: 'http://treehouseletter.com/wp-content/uploads/2015/04/Ching-Shih-150x150.jpg'},
		{ name: 'Galadriel', age: 7045, gender: 'f', img: 'http://nerdbastards.com/wp-content/uploads/2015/12/Galadriel-and-Phial-150x150.jpg'},
		{ name: 'Skeletor', age: 19, gender: 'm', img: 'http://www.shwiggie.com/media/images/skeletor-smirk.jpg'},
		{ name: 'Sauron', age: 7045, gender: 'm', img: 'http://ia.media-imdb.com/images/M/MV5BMTc0Njk5NDQwNl5BMl5BanBnXkFtZTYwNTU3NTky._V1_SX150_CR0,0,150,150_.jpg'}
	])
```

> Note: all images are 150 x 150

* Run the seed

* Test that everything works

* To test your server you can:
	- Run it and open `localhost:3000/users` in in the browser
	- Open rails console and do a bunch of queries on the data
	- Use **Postman** or **cURL** to make POST, PUT, or DELETE requests.
	- Feel free to do as much damage as you like with **Postman** or **cURL**: you can always set your seed back to the default by running `rails db:reset`. This command will drop your databases, run your migrations again, and reseed the database.

### &#x1F389; RAILS SERVER DONE!

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 1: Made Rails server".
<hr>

<br><br>


## &#x1F684; Make Express Server

**Nothing new here!**

Keep your Rails server running and open a new tab in Terminal.

In the `dating_app` top-level directory, make a directory `dating_app_frontend` _alongside_ the Rails directory.

**Go into `dating_app_frontend`**

* Make an Express server to run your static frontend files.

Inside `dating_app_frontend`, initialize a new Express server. `npm init`. Make a `server.js` and do all that jazz.

**The only package you will need is `express`**

* Set up your express boilerplate.

* Make it so that your Express server will serve up an `index.html`, `app.js`, and `style.css` from the `public` folder.

Remember:

* `app.use(express.static('public'));`
* set your listener on a port other than 3000

Boilerplate:

![](https://i.imgur.com/gh5u4xQ.png)

Directory structure:

![](https://i.imgur.com/iUx890L.png)

App is running:

![](https://i.imgur.com/eWc4tET.png)

* Testing: Get a javascript console.log showing up from your `app.js` in your developer tools when you run the node server (remember, you're not running it on 3000)

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 2: Made Express server".
<hr>

<br><br>

## &#x1F4D0; Angular - Module and Controller

**Get Angular ready to go**

* `<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>`
* Set up the Angular `module` for `ng-app` called `dating_app`

![](https://i.imgur.com/GYcTzVF.png)
![](https://i.imgur.com/59SKaID.png)

* Set up an Angular `controller`

![](https://i.imgur.com/umB0SAK.png)
![](https://i.imgur.com/9bwZsP4.png)

* Test that your Angular controller will display some kinda data to your page `{{ ctrl.whatevs }}`

* Make an `$http` request to the `/users` index route of the Rails server - THIS REQUEST SHOULD FAIL DUE TO THE SINGLE-ORIGIN POLICY - This is good, we'll configure CORS next

Single-origin policy error:

![](https://i.imgur.com/2QInvxS.png)

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 3: Angular module and controller".
<hr>

<br><br>

## &#x1F34E; Configure CORS

(7 mins)

In your Rails project, open up `config/initializers/cors.rb`

![](https://i.imgur.com/0KP1OFR.png)

Uncomment the code, and let's just make it so your localhost can access your Rails app.

![](https://i.imgur.com/t8IqiGy.png)

**RESTART your Rails app: it should NOT work**

It's broken, isn't it? That's because we didn't uncomment the `rack-cors` gem

In the Gemfile, uncomment the gem:

![](https://i.imgur.com/lKHkcGg.png)

In Terminal, run `bundle`.

Re-run your Rails server, refresh your Express page and make the AJAX request.

![](https://i.imgur.com/KzKtY7h.png)

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 4: Configured CORS".
<hr>

<br><br>

## &#x1F3CB; Flexbox Layout

(10 mins)

* Refer to the class notes from today for how to make a Flexbox layout with header, footer, columns, main content, etc. Or, use this [tutorial](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/), but for crying out loud, don't use the word `HolyGrail` in your class names. In fact, you can set the css just on the elements: `body`, `nav`, `aside`, etc.

![](https://i.imgur.com/53rO9fz.png)

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 5: Flexbox Layout".
<hr>

<br><br>

## &#x1F4D0; Angular - Display Users

* Make it so that 3 users are displayed on each side of the Match Box. Suggestions below:

* Make it so your Rails Index route serves up **only six random** daters. So then your Angular AJAX request only ever brings back six randos.

You can use `.sample` with an argument of 6 on your index route to get a random sample:

`dating_app_api/app/controllers/uers_controller.rb`:

![](https://i.imgur.com/3rqX8PB.png)

![](https://i.imgur.com/IrnP28m.png)

Figure out how to use Javascript to split this data up so that three of these are `ng-repeat`ed on the left, and three are `ng-repeat`ed on the right. Remember, they have already been 'shuffled' so to speak by the Rails controller.

![](https://i.imgur.com/pnRuaOG.png)

When you refresh the page, a **new random batch** should populate on the page:

![](https://i.imgur.com/7QiJZAL.png)

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 6: Displayed users with Angular".
<hr>

<br><br>

## &#x1F4D0; Angular - Add A User

Put a form in the footer for adding a new user/dater. A dater has a `name`, `age`, `gender`, and `img`.

The form should `ng-submit` to a function that will process the form data. So, you will want your input each to bind to an `ng-model` of that form data.

Example:

![](https://i.imgur.com/w8zOL2M.png)

Form:

![](https://i.imgur.com/qudjQaA.png)


Write the function that will process the form upon submit.

The function should make an AJAX request to create a dater and console.log the result.

* Find a 150x150 image on the web of someone or something that wants to date. Enter the someone or something into the 'Add a Dater' form and add them to the list. If they don't show up on the sidebars, keep refreshing the page.

> All images should be 150 x 150, such as these Vitamin Chews: https://images-na.ssl-images-amazon.com/images/I/51GrSoP5g2L.SS150.jpg

* Clear the form by clearing the object you used for your formdata.

Console.log the created item, and clear the form:

![](https://i.imgur.com/gPgmBEp.png)

Keep refreshing the page to see your new dater randomly appear:

![](https://i.imgur.com/aOB2uay.png)

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 7: Added a user with Angular".
<hr>

<br><br>

## &#x1F575; Investigation

Read about how Angular data-binding works:
[Angular data binding and the digest loop](http://angular-tips.com/blog/2013/08/watch-how-the-apply-runs-a-digest/)

Read up to the first **Try It!** section, then read the **Conclusion**. Do some research of your own into how Angular's **digest loop** works and what it does.

* Write inside your `app.js` a brief paragraph (commented out, of course) that describes the Angular digest loop and why it's useful.

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 8: described the digest loop".
<hr>

<br><br>

# &#x1F354; HUNGRY FOR MORE?

## FINISH THE APP

<br>

## &#x1F4D0; Angular - Hover

Use `ng-hover` on the user's sidebar images to make an enlarged version of the image appear in the central column.

Using `ng-if`, make it so that when an image from the left _and_ and an image from the right are in the central column, a "MATCH" button appears.

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 9: Added hover".
<hr>

<br><br>

## &#x1F4D0; Angular - Match

Using `ng-click`, when the match button is clicked, make it so that the button disappears and is replaced either with a successful or unsuccessful match message.

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 10: Added match".
<hr>

<br><br>

## &#x1F4D0; Angular - Repopulate The Page

Using `ng-click` on the page header, when the title of the app is clicked, a new batch of random users will take the place of the old ones. (You can re-use the original $http request).

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 11: Repopulate the page".
<hr>

<br><br>

## &#x1F4D0; Angular - Update A User

Make it so that if you _click_ on a user's image (as opposed to hover over it), an edit form will appear in the central column.

The edit form should make a PUT request to the Rails server and **update** the user.

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 12: Added update user".
<hr>


<br><br>

## &#x1F64C; Why Not?: EXPERT STYLING

* Make it look special

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 13: I styled it."
<hr>

<br><br>

## &#x1F914; Advanced: NG-CLASS AND CSS3 ANIMATIONS

Using `ng-class`, make it so that when the 'Click to Match' button is pressed:

* The two central images translate into each other during a 3 second interval and overlay, and the opacity of each will halve.
	* Remember to set the CSS transition properties on the elements.
	* Use ng-class to give the images a class that will animate them, only if a variable bound to the controller is true. If the variable is false, the images will not have that class.
* The click to match button disappears. Hint: use `ng-if` (you can take left image and right image out of the match function).
* A delayed message will appear saying whether or not the match is successful (the relative success can be random). Hint: Use animation keyframes and the css `visible` property to delay the display of the message for 3 seconds.

Here is the full demonstration: https://youtu.be/jLCder5O6Ls

---

<hr>
**&#x1F534; Commit your work** <br>
The commit message should read: <br>
"Commit 14: Click to Match button sets off animation".
<hr>

<br><br>
