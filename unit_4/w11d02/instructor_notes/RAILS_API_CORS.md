![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

<hr>
Title: Rails API<br>
Type: Lesson<br>
Duration: 2 hrs<br>
Creator: Thom Page<br>
Topics: Rails API, Angular, CORS<br>
<hr>

# RAILS API

### Lesson Objectives
_After this lesson, students will be able to:_

- Set up a basic Rails API server using scaffold
- Set up another server to consume that API using Angular
- Configure CORS to allow Cross Origin Resource Sharing

<hr>

## Why make a Rails API?

![](https://i.imgur.com/zm4EeFX.png)

(10 mins max)

What we are doing with Rails is making an API.

[API on Wikipedia](https://en.wikipedia.org/wiki/Application_programming_interface)

We are providing a _service_ that either ourselves or others will be able to access. Our service happens to be **data, in JSON format**.

Rails APIs are used as backends for mobile apps as well as desktop apps.

There are many other services like this, such as [OMDb API](https://www.omdbapi.com/). They are running a server just like ours that queries a database, finds the requested data, and serves it up in JSON format.

Frontend developers can then take the data from OMDb and format it _however they like_ on their own pages, for whatever devices they want. The backend developers do their thing, the frontend developers od theirs, and no one has to adjust or change for anyone.

Let's say we are the frontend developers. How do we use a JSON API service? We take the data using HTTP requests to that service using whatever frontend library or framework that we desire: jQuery, Angular, React, Vue, or Swift (for mobile) just to name a few. We can use their data in **multiple different apps** running at once for **multiple different devices**. An app for desktop using Angular, for example, and an app for mobile using Swift, running at the same time using the same backend service.

This is how a lot of modern web applications work. It is a common pattern.

This is called **consuming an API**.

* This is what you did for your Unit 3 project.

You: Used Node / Express, and Mongoose to create an API that serves JSON data.

You: Then used Angular to make HTTP requests **to your own API** and use the data as you saw fit.

Anyone could have consumed your API, but you **consumed it yourself** through your public folder.

You could, if you wanted to, make your API publicly available.

Some other dev could come along and make a completely fresh frontend to consume your API. They could decide not to use Angular, and instead use some other framework like React. They could make it so that their webpage is completely indistinguishable from yours.

That's the beauty of the API. The data is its own thing. There is a complete _separation of concerns_ between the data and the display because they are running on separate servers. You swap out any old display and you do not need to change a single thing on the backend.

## Rails server is API only

Instead of having a public folder or any frontend stuff associated with our Rails server, we will leave our Rails server untouched by any frontend code. It will _just_ serve JSON.

We will then create another server to **consume the API**, as if we were some other developer or interloper.

**What we will be doing**

* We will review the steps for creating a Rails API for our backend, and serve an **index** endpoint

* We will create a new server _separate_ from our Rails server for our frontend -- it will only serve static files.

* We will use our frontend server to consume the API coming from the backend server.


<br>
<hr>

11:15

# TWO SERVERS

**Let's start a project that will use two apps**

Server One: provides the API

Server Two: consumes the API


## Setup

In `student_examples` for today, make a directory `noticeboard_app`. Do not put the `_api` there! We will do that for our Rails server later. This is just a directory.

* `mkdir noticeboard_app`
* `cd noticeboard_app`

Inside this directory we will put our two servers. We are only putting them together in here for convenience so that we can open them in our text editor easily.

11:20

## Make Directories

Inside `noticeboard_app` make the rails server:

* `Rails new noticeboard_app_api --api -d postgresql`

![](https://i.imgur.com/CUsW0By.png)

Do not go into the directory yet.

Make another directory on the same level as the rails directory called `noticeboard_app_frontend`. This will **not** be a Rails project. Just make the directory.

* `mkdir noticeboard_app_frontend`

Tree structure: The `noticeboard_app` directory contains both the `api` and `frontend` directories.


![](https://i.imgur.com/3rGxbEe.png)

* Open up the entire `noticeboard_app` directory in atom. You should see both `noticeboard_app_api` and `noticeboard_app_frontend` in there.

11:25

# &#x1F6E0; SCAFFOLD THE RAILS API

Let's see how fast we can make our Rails API. (Aim: 15 minutes with explanations)

This morning we will use the `scaffold` command to generate boilerplate code for a given resource. Our app will be a noticeboard, and the resource will be notices.

* First, go into the Rails directory on the command line.

* Then, create the database. `rails db:create`

* Scaffold the resource: `rails g scaffold notice title author content`

This will generate all the folder, files, and code needed for a model called `Notice` that has columns for `title`, `author`, and `content` all of datatype string (the default).

![](https://i.imgur.com/Ctfxp4F.png)

* Take a look at the controller file: `notices_controller.rb`. It has provided most the of the stuff we have already seen, plus some new stuff. All of the relevant routes are there. Let's leave it like that for now.

* There is a new helper method `set_notice` invoked with a `before_action` method. All it does is find a notice according to its id before specific routes are hit.

* Look in `config/routes`. Scaffold has set our resources for us.

* Look in `models/notice.rb`. The model has been set up for us.

* Take a look at the migration file. Title, author, and content columns (strings) are ready to go.

11:35

## MIGRATE

Scaffolding does not interact with the database (for good reason).

* Run the migration: `rails db:migrate`

11:36

## SEED

Inside the Gemfile include Faker

* `gem 'faker'`

![](https://i.imgur.com/7wpsKcb.png)

Install the gem with `bundle` (shorthand for `bundle install`. `install` is the default option for the `bundle` command).

In `seeds.rb` use Faker to fill out the fields:

```ruby
100.times do
  Notice.create(
    title: Faker::TwinPeaks.quote,
    author: Faker::StarWars.character,
    content: Faker::Lorem.paragraph,
  )
end
```

![](https://i.imgur.com/fPADuLj.png)

* Seed with `rails db:seed`

* Run the server with `rails s`

* Check out your API at `localhost:3000/notices`


**DONE**

11:45

# FRONTEND APP

## &#x1F684; BOILERPLATE EXPRESS PROJECT

* Keep your Rails server running.

* On the command line: (If you have to, open a new tab). Exit the Rails directory into the parent `noticeboard_app`

* We are going to make a **Node/Express** server to run our frontend. Let's again see if we can get it set up in 15 minutes!

* Inside `noticeboard_app_frontend`, initialize a node server. `npm init`

* Entry point `server.js` as usual. `touch server.js`

* `npm install express --save` as usual

* Add express boilerplate:

```javascript
var express = require('express');
var app     = express();
```

![](https://i.imgur.com/cTDJ253.png)

* Set the port to something other than 3000 (Rails is running on 3000 for now).

* Port 3001:

```javascript
var express = require('express');
var app     = express();
var port    = 3001;

app.listen(3001, function() {
  console.log("Noticeboard Frontend running on port: ", port);
});
```

![](https://i.imgur.com/BaVxRSW.png)


> We do not need any routes on our frontend app for now. All we want to do is use the server's static assets.

* Add middleware config `app.use(express.static('public'));`

![](https://i.imgur.com/2BUv3US.png)

* Make `public` folder, make `index.html`, `app.js`, and `style.css`. Fill out `index.html` boilerplate.

![](https://i.imgur.com/TiVGI6q.png)

* Add your script:

```html
<script type="text/javascript" src="/app.js"></script>
```

* Add a console.log to the script

* Run the server `nodemon`

* Go to `localhost:3001` in the browser to check your console log appears

**We're Ready To Go!**

<br>
<hr>
12:00 break until 12:10

## ANGULAR

Remember, we could use any frontend library or framework. (At least, one that can make AJAX requests).

For now let's stick with Angular. Let's just start by making a regular-old AJAX request. We will make the request to our running Rails server.

### Boilerplate Angular Setup

Add Angular 1.5 to index.html:

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
```

![](https://i.imgur.com/ymfD8Tw.png)

##### &#x1F449; MODULE
* Set ng-app in index.html: `<html ng-app="noticeboard">`
* Set module in app.js: `var app = angular.module('noticeboard', []);`

##### &#x1F449; CONTROLLER
* Set ng-controller in index.html: `<body ng-controller="mainController as ctrl">`
* Set app.controller in app.js _with_ the `$http` module: `app.controller('mainController', ['$http', function($http) { }]);`
* Add test message to controller: `this.message = "controller works"`

![](https://i.imgur.com/hV0AYq6.png)

* Add bound message to index.html `{{ ctrl.message }}`

![](https://i.imgur.com/Vykfrvh.png)

* Check in browser:

![](https://i.imgur.com/eggPK0T.png)

12:25

### Angular AJAX Request

Let's make the AJAX request to our Rails server.

Two things to keep in mind:

1. Make sure your Rails server is running.
2. This AJAX request **should not** work. This is due to CORS, a basic security feature. We will talk about CORS specifically later.

Make a request to the Rails server and console log the response:

```javascript
  $http({
    method: 'GET',
    url: 'http://localhost:3000/notices',
  }).then(function(response) {
    console.log(response);
  });
```

![](https://i.imgur.com/aDckYfg.png)

If you get this:

![](https://i.imgur.com/l8VZfgv.png)

It means your Rails server is not running.

If you get a response like this, then you have the expected CORS issue:

```
No 'Access-Control-Allow-Origin' header is present on the request resource.
```

![](https://i.imgur.com/jowW1st.png)

> Otherwise, you should see your API data showing up in your browser console. This might happen if somehow your browser is ignoring the `same-origin policy` OR has `localhost:3000` cached already.
>
> Try emptying your cache and see what happens.

<br>

12:30

# &#x1F34E; CORS

You should have received this error message when getting your `localhost:3001` server to query your `localhost:3000` server:

![](https://i.imgur.com/jowW1st.png)

What's going on, here?

## same-origin policy

Browsers implement a security feature called **same-origin policy**. The idea is that Javascript requests to a server are rejected if they come from a different origin. AJAX requests can't make requests to other servers than the one they're coming from. **For security reasons, Ajax requests must have the same origin as the server to which they are making requests.**

> An origin is the combination of port, protocol and host.

In Unit3, your Angular was in the public folder of your Express app and therefore had the same origin, so no worries.

To allow the browser to make a request to a different origin, we have to tell the server to accept cross-origin requests.

## Cross-Origin Resource Sharing

> Cross-Origin Resource Sharing (CORS) is a technique for relaxing the same-origin policy, allowing Javascript on a web page to consume a REST API served from a different origin.
>
> [Understanding CORS](https://spring.io/understanding/CORS)

Any production API has to deal with the **same-origin policy** and enable CORS if a frontend server is to consume that API.

You might run into CORS issues when you try to consume a third-party API. Many projects have floundered because of third-party API CORS issues.

> Side note: If you run into CORS issues querying a third-party API in Express, look into the `request` module. `npm install request --save`

So even if your Rails data showed up in your frontend app, you are likely at some point with your deployments to run into a CORS issue. It's a standard internet security feature that everyone runs into with APIs.

<br>
<hr>

12:40

# &#x1F527; CONFIGURE RAILS FOR CORS

Let's tell Rails to send through that `Access-Control-Allow-Origin` header that our browser is freakin' out about.

* Uncomment the rack-cors gem in the Gemfile `gem 'rack-cors'` around line 28.

`Gemfile`

![](https://i.imgur.com/8WNSCuB.png)

[More on the rack-cors Gem](https://github.com/cyu/rack-cors)

* Run `bundle` on the command line to install the Gemfile gems

![](https://i.imgur.com/NgpDIoY.png)

In the file `config/initializers/cors.rb`

* Uncomment the code in `cors.rb` that begins with

`Rails.application.config.middleware.insert_before 0, Rack::Cors`

![](https://i.imgur.com/Fq9Fr6U.png)

The address after origins is a _whitelist_ of domains where requests are allowed to originate. We can add as many as we like.

Change origins to the address where your frontend requests will be coming from. In our case let's whitelist `localhost:3001`

![](https://i.imgur.com/ghxY51s.png)

We could whitelist

* the local version of the frontend end app
* a hosted version of your frontend app
* an 'admin' version of the frontend app that makes alterations to the db and block other apps from doing so
* everything at once using `*`.

For now let's keep all of the methods (:get, :post, :put, etc.). In future, we might want to block apps from being able to alter the database in any way. In that case we would omit :post, :put, etc.


**IMPORTANT: RESTART THE SERVER**

The changes will not apply if the server does not restart


12:50

## MAKE AJAX REQUEST

In your frontend app, make the request to the backend app.

> In Chrome and other browsers, the origin will be 'remembered' even if you change the CORS settings in the backend app. To reset, empty the browser's cache.

The request should work:

![](https://i.imgur.com/Xw7hghT.png)

If it does not, you might have to start your browser with **same-origin policy** disabled:

`open -a Google\ Chrome --args --disable-web-security --user-data-dir`


<br>
<hr>
1:00 - lab

<br>
<hr>
License
<hr>
