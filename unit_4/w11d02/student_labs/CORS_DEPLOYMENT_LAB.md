![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---

Title: Rails API CORS lab <br>
Duration: 45 mins<br>
Creator: Thom Page <br>

---

# &#x1F685; &#x1F34E; &#x1F52C; RAILS API CORS LAB

* Limit the types of requests to the API
* Deploy the API

Use the `noticeboard_app` from today. If you need a working version, ask.


### Make sure POST requests are working from the Frontend

You should have two servers running, a frontend and a backend. Make sure you can successfully send POST requests from your frontend to your backend and have the result show up on the frontend again.

### Block POST requests on the server

Let's set our CORS such that our frontend app can **read** data, but cannot **create** data. Let's block any attempts to alter data on the database as if we were running a public API.

Rails app: `config/initializers/corb.rb`

Remove all methods except `:get`, `:options`, and `:head` for the `localhost:3001` origin (or whichever port your frontend is running on)

![](https://i.imgur.com/ZCoD1IP.png)


* Turn off the rails server
* Turn it back on `rails s`

### Make POST request to Rails server

Make a request to create data.

The request **should still work**. If it does, that's because your browser 'remembers' which origins and methods have been whitelisted. Typically, servers keep their access protocols in place and try not to change them.

**Clear your browsing data from the beginning of time**

If you cleared your browsing data, the cors.rb was saved, the rails server was stopped and then restarted, you should get this message:

![](https://i.imgur.com/6vOiqqd.png)

But, you'll notice that your frontend app can still **read** data.

Congrats! You made a read-only API.

<br>
<hr>

# &#x26F4; DEPLOY YOUR API &#x1F6F0; &#x1F4E1;

## Set a Root

In `noticeboard_app_api`

Make a controller with a method that you can use as the root of your project:

`rails generate controller welcome`

This will make `app/controllers/welcome_controller.rb`

![](https://i.imgur.com/obbUkh8.png)

If you don't set a root, Heroku will get confused. Let's make it so our app will root to the index method of the welcome controller:

In `config/routes.rb`

```
    root 'welcome#index'
```

![](https://i.imgur.com/bg7F7rz.png)

In the welcome controller file, let's just send some stuff from the index method:

```
  def index
    render json: { status: 200, message: "Noticeboard API" }
  end
```

![](https://i.imgur.com/14nBStv.png)


**Open your Rails API in the browser to check that the root works**

<br>

## Set up Git / Github

**Please be precise**.

**COPY** The `noticeboard_app` folder from the class repo on to your desktop. Or copy it to anywhere outside of the class repo. Do not _cut_ and paste. Do not copy just the rails api. You want to **copy the whole thing**. Cheers &#x1F44D; &#x1F44D; &#x1F44D; &#x1F37B;

**GIT INIT** the `noticeboard_app_api` folder, which is your Rails server. Please do not `git init` the top level `noticeboard_app` folder. Please don't `git init` the Express folder. You want to **git init** the Rails folder only. Cheers &#x1F44D; &#x1F44D; &#x1F44D; &#x1F37B;

**Make a repo on Github** and just called it `noticeboard_app_api`. **Do not** initialize it with a readme. Copy the SSH key address. Cheers &#x1F44D; &#x1F44D; &#x1F44D; &#x1F37B;

**Add the remote to your Rails api folder.** In your `noticeboard_app_api` folder, the one on your Desktop **not** the one in your class repo, write `git remote add origin <shh_key_address>`, pasting in the address of the repo. Check that the remote exists afterwards with `git remote -v`

![](https://i.imgur.com/19zkAjS.png)

**Add, commit, push to origin master**

Make sure the Rails API was pushed to github in its own repo. Cheers &#x1F44D; &#x1F44D; &#x1F44D; &#x1F37B;

<br>

## Set up Heroku and Push

In the directory of your own desktop copy of the Rails noticeboard api, create and deploy a heroku app with the following commands:

* `heroku create <name_of_app>`

* `git push heroku master`

* `heroku run rails db:migrate`

* `heroku run rails db:seed`

If it works, notice how easy it was. No MONGODB_URI or any of that jazz.

Then,

* `heroku open`

![](https://i.imgur.com/h83oezN.png)

Works! Go to `/notices` to admire your API.


<br>

## &#x1F440; CHECK YOUR FRONT-END &#x1F62F;

In your frontend app Angular controller (this is the frontend app on your desktop, not the one in the class repo), add a model for the URL that your $http requests will go to. Set the URL to your hosted Heroku API:

`this.URL = '<my_heroku_rails_api>/notices'`

![](https://i.imgur.com/etIfZFh.png)

Change your `$http` requests to send and receive to/from that address:

GET request to Notice index

![](https://i.imgur.com/fJQQ2z0.png)

POST request to Notice create

![](https://i.imgur.com/z3YA5XO.png)

This is just a handy thing to do if you want to swap out the URL for all of your `$http` requests in the future. If you want all of your requests (there could be ones for show, put, delete, etc) to go back to localhost, you can just change the value of `this.URL`.

### GET

Your frontend app should be able to read from the Hosted API. But it should not be able to make a POST request.

<br>

## &#x1F527; ALTER YOUR BACK-END &#x1F62F;

Change your CORS policy to accept post, put, delete, etc.

`config/initializers/cors.rb`

![](https://i.imgur.com/GPMlitk.png)

**add, commit, push to github**

Then push the changed server to Heroku: `pit push heroku master`

Create a new Notice from your desktop frontend app. It should work.

<br>
## &#x1F527; ALTER YOUR BACK-END II &#x1F526;

Make it so your frontend app **cannot** access your hosted API in any way.

Change your origins only to accept `example.com`.

`config/initializers/cors.rb`

![](https://i.imgur.com/qVk94LC.png)

**add, commit, push to github**

Then push the changed server to Heroku: `git push heroku master`

**Clear the cache on your browser. Quit the browser. Open it back up**

Open your frontend app in the browser. You should have an `Access-Control-Allow-Origin` error.

![](https://i.imgur.com/k4vwyOu.png)

<br>

## &#x1F527; ALTER YOUR BACK-END III &#x1F3F9;

Make it so that _anyone_ can access your API.

Change the origin to `*`


`config/initializers/cors.rb`

![](https://i.imgur.com/bfMYXLx.png)

**add, commit, push to github**

Then push the changed server to Heroku: `git push heroku master`

**Clear the cache on your browser. Quit the browser. Open it back up**

Open your frontend app in the browser. It should work.

<br>

**Congrats! Now you can experiment more with CORS!**

## EXTRA

How about allowing only your localhost to alter the db, but anyone else can read the api?

![](https://i.imgur.com/7Pbqeaq.png)

How about **hosting your frontend** and giving your API access to that too?

![](https://i.imgur.com/e6OBL7q.png)

<br>
<hr>end<hr>
