# DEMONSTRATION UNIT 2 PROJECT

Here's a demo Unit2 type of app with the following requirements:

```
* Express, Mongoose, EJS
* MVC
* Two models
* Deployment
* Other stuff
```


[Live demo app on Heroku](https://movie-catalog-app.herokuapp.com/)

[Code on Github](https://github.com/singular000/movie_catalog_app)

This is a simple two-model app with

* Users
* Movies

It's your run-of-the-mill list app, but this type of thing is excellent practice to get the basics down. If you're stuck for ideas on a two-model app, pick a resource that interests you (such as Movies), and make that a model. Then add in Users as a second model.

Have a look at the code on github and notice:

### COMMITS

* Commit whenever something works! There should be multiple commits every day.

* Start committing from the beginning of the project. 

### README


* Update the readme whenever you make a significant change to your app. Start early and keep adding as you go.

* Include details such as what the app does, has a link to the live site, lists the in-progress parts of the app, features coming soon, and known bugs


### DEPLOYMENT

* Deploy **early** and **often**.

* Your app might work fine locally, but might be a complete cluster when deployed. Heroku will 'interpret' your app differently to what exists on your local machine.
	* Pathing might be off
	* CSS might be off
	* Any number of things can change 

* Work in parallel with your deployed app.

<br>

## USEFUL STUFF

The movies app has some of this stuff:

### EJS PARTIALS

Say you have multiple views and you have the exact same nav bar in each. Make your code **DRY** by using EJS partials. A partial is just a piece of reusable ejs code.

Use this syntax in your views:
 
```
<%- include ..path/to/my/partial.ejs %>
```

In the movies app, the partials are in a separate folder within `views`. They are just templates that get loaded in to view with the `<%- includes %>`

<br>

### MONGOOSE VIRTUALS

In the movies app the user has an array of movie objects. The movies are displayed alphabetically or chronologically. The array has been sorted at some point. The sorting is not as simple as `Array.sort()` because it's sorting objects, which takes a fair amount of code.

You might also want to perform some kind of operation on the objects within the array that belongs to the user. But where in the app should the operation take place? 

It could happen on the `view` level or the `controller` level, but there is saying in development that goes: **Fat Models, Skinny Controllers**.

You don't necessarily want bulky code in your views or controllers. You can put this code on the level of the **model** using **virtuals**.

The virtuals are defined in the `users.js` model file. The virtuals do the sorting.

They are referenced in the controller, and the sorted data is sent to the view.

<br>

### AJAX

Spruce up your two-model app by using ajax to query data that already exists on the web. This can take the place of a `new` form for a given resource.

Look in the `app.js` file to see a bunch of nested ajax working. 

(update) There are three ajax requests:

1. To the remote data (OMDB api). The data (JSON) is brought back to the browser. This request goes to the OMDB Search api and brings back an array of search results.
2. To the OMDB api again, this is time just to the single movie api in order to retrieve more detailed results for the selected movie.
3. To the app's own POST route for creating movies.

You can send AJAX requests to and from your own app. Not that the requests handle JSON data, so your route will want to `res.send(someJSON)`

<br>

### SESSIONS

Getting sessions to work is one thing, but sending error messages back to the views is another. Most relevant sections are in the user login route within `usersController.js`, and the signup route in `server.js`.

<br>

### AUTHENTICATION

#### Hashing a user's password on signup
Passwords shouldn't really be saved straight to the db. Someone could 'hack' the database and retrieve the passwords. Before you save a user's password, **hash** the password:

In your user model, after your schema is defined, you can add in Mongoose middleware using `.pre()`. What the following `.pre()` method does is perform an operation before each save of the user:

```
userSchema.pre('save', function(next) {
  if (!this.isModified('password')) { return next(); }
  var hashedPassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  this.password = hashedPassword;
  next();
});
```

---> If a password is added or changed, hash it using bcrypt, then change the password to the hashed version. (Then run the `next()` callback to move on with the save). 

The above function assumes your user's password field is called `password` and that bcrypt has been required. 

<br>

#### Checking if an entered password is the same as the hashed password on login

We can do this with Mongoose **methods** built in to your schema. They are like **virtuals** but you invoke them, and they can mess with things already in the db.

In your user model, after your schema has been defined, you can add in a Mongoose method using `.methods`. I have named this one `authenticate`. All it does is return true or false if an entered password matches the hashed password:

```
userSchema.methods.authenticate = function(password) {
  return bcrypt.compareSync(password, this.password);
}
```

You can invoke this method in your users controller during login:

```
if (foundUser.authenticate(req.body.password)) {
	// password from req.body matches the stored hashed password
	// let the user in to your app
} else {
	// oops! wrong password
	// don't let them in
}
```

<br>

## CUSTOM MIDDLEWARE

You can make your own middleware! It's just a function that you have run when a given base URI is hit.

In the movies app, I want to check if a user should be able to see a given page. The 'signup/login' route is not the only gatekeeper in this process. A user who is not logged in could just type a url into the bar and see a page that they shouldn't.

server.js
![](https://i.imgur.com/JBdvQLY.png)

Here I have some custom middleware called 'isLoggedIn' that I've added to the app.use for the /movies base URI.

If `req.session.loggedInUser` is set (it is set in the signup and login route), then the user can view the page.

If not, they are redirected to the signup/login page.

<br>

## DON'T DO THIS

The movies app does something bad. It confronts the user with a signup / login before they can see anything else within the app.

**No one will want to sign up to your app if they don't know what they're signing up for.**

Go to the live site and see how annoying it is.

Don't do it! Give the user some context first by letting them click around or see some of the features.




