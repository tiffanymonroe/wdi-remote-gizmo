# Heroku Deployment

## Lesson Objectives

1. Get started with Heroku
1. Create app on heroku
1. Attach mongolab addon
1. Update code for heroku & mongolab
1. Push git to heroku

## Get started with Heroku

- [Sign up for Heroku](https://signup.heroku.com/)
	- You may need a CC at some point although you will not be charged
- [Install Heroku CLI Tools](https://toolbelt.heroku.com/)
	- Verify by typing `heroku login` anywhere in your terminal
	- Follow prompts to sync up your heroku credentials, DO NOT HEROKU CREATE yet.

## Create an app on heroku

- Once you have Heroku CLI, you can access terminal commands to heroku.
- Let's start by creating an app on heroku. Don't rush this if you want to customize a name.
	- `heroku create [unique name]` from your project's root directory where you first initialized git.
	This will check heroku to see if the app name exists, if so you'll get an error message and have to try again.
	- If you don't specify a name, heroku will generate a unique name for you. There names are pretty cool and somewhat thematic so feel free to do either.
	- You can also do this step off their website if you want but since you'll be working in terminal anyway, might as well just do it through terminal.
	- Notice that if you successfully created a heroku app, you can see that the heroku remote was automatically added to your project's repo. Confirm this by typing `git remote`, you should see `origin` as well as `heroku`.

## Attach mongolab addon

Now that you've partitioned an app on heroku's side, you need to attach a free addon called mongolab. Mongolab provides you with heroku's version of mongodb. Up until now, we've just been using express on local connecting to our local mongodb. Now we need to connect our heroku app onto heroku's version of mongodb.
- Go to heroku and login, then hit personal apps (https://dashboard.heroku.com/apps), click on your new app, then click on the resources tab.
	- Search for MongoLab and add the free version `Sandbox`.

## Update code for heroku & mongolab

Almost done, now all we need to do is make sure we set up our package.json file as well as ensure our code is abstracted to use heroku's services as well as our dev local.

- Edit your package.json file so that the "main" property is set to the name of your main application's entry point js file (probably `server.js`).

We also need to make sure we're ignoring the `node_modules` directory.  If you haven't already, make sure you have a .gitignore file that has in it "node_modules"

We also need to update any instance of code where you're connecting to mongo/mongoose via (mongodb://localhost/databaseName). This can vary based on if where/how often your mongoose has to connect to the DB. For my apps, the following suffices...
- In my `server.js`
	`var mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';`

	`mongoose.connect(mongoUri);`

Last thing, ensure your port is also abstracted to use process.env.PORT or 3000;
`port = process.env.PORT || 3000;`

```
app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
```

## Push Git

- First update your remote repo so you're code is up to date.
	- `git add -A`
	- `git commit -m "updating package.json and updating code for heroku"`
	- `git push origin master`
- Now also push to heroku
	- `git push heroku master`

Wait 1 minute then type `heroku open`. You should have your deployed app open up in your browser.

- If thing's don't work out, relax and try to find out the error.
- `heroku logs`
