# Intro to Express

## Lesson Objectives

1. Describe what a web server is
1. Install Node packages
1. Set up a basic Express server
1. Set up a basic GET route
1. Use nodemon to restart your sever when your code changes
1. Save a record of what packages your application uses

## Describe what a web server is

A server is just a computer that is always on and connected to the internet.  Other computers can try to connect to it to retrieve information

![Request Response Cycle](https://cdn.zapier.com/storage/photos/9ec65c79de8ae54080c1b417540469a6.png)

A web server is just a server that sends dynamic HTML pages, meaning that the HTML is pretty much the same for every page, but is altered slightly depending on the data that is requested.  Think of amazon.com where one book's page looks pretty similar to another book's page, just with different text.

In this unit, we'll be writing web applications that a computer will run that will allow the computer to respond to other computers that try to connect to it.  We'll write this code in JavaScript using Node.js, which allows us to write computer applications using JavaScript.

## Install Node packages

- People will write code and make it available online for others to use
- You use these published chunks of code to build applications faster

These chunks of code fall into one of two categories

- Libraries
    - A collection of functions, objects, and even other libraries that you call
    - It has no idea what you're going to build
- Frameworks
    - Is essentially just a library
    - Is also a pre-conceived skeleton for an application
    - It knows what you're going to build and is somewhat opinionated about how you should do it

- The libraries and frameworks that people write for Node are called "packages" and are published on [npmjs.com](https://www.npmjs.com/)
- NPM (Node Package Manager) is a command line tool that we'll use to install node packages
    - in old days we used to have to find the code's website online, then download the code

To install (download) a package, first you must know its name (each name is unique in npm).  Then run:

```
npm install package-name
```

let's install the library `express`:

```
npm install express
```

Express.js is a framework that makes it easier to build web-applications

## Set up a basic Express server

Now that the library has been installed (downloaded), we can use it in our code, by using the `require()` function

```javascript
const express = require('express');
```

- The `require()` function takes whatever code was written for the specified library and returns it
    - We'll typically store the return value of `require()` in a variable of the same name
        - Think of the variable as the library itself
- By reading [the documentation](https://www.npmjs.com/package/express), we can figure out how to use what is returned by  `require('express')`

1. Install it: `npm install express`
1. Create a file called server.js
1. Inside server.js, write the following

    ```javascript
    const express = require('express'); //from documentation: express is function
    const app = express();//app is an object

    app.listen(3000, ()=>{
        console.log("I am listening");
    });
    ```

1. Start the app by executing `node server.js` in the command line
1. Visit http://localhost:3000/ in your browser.  You've successfully created a basic web server!  This will serve dynamic pages to web browsers.

## Set up a basic GET route

Now we'll create a basic GET route so that visitors to (clients of) our web-server can retrieve some information from it

```javascript
const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/somedata', (request, response) => {
    response.send('here is your information');
});

app.listen(3000, () => {
    console.log("I am listening");
});
```

- The function passed as a second parameter to `app.get()` is executed each time a user (client) goes to http://localhost:3000/somedata
- The function (callback) takes two parameters
    - `request`
        - object containing information about the request made (browser, ip, query params, etc)
    - `response`
        - object containing methods for sending information back to the user (client)

## Use nodemon to restart your sever when your code changes

An NPM package called `nodemon` allows us to run code just like `node`, but it will restart the application whenever code in the application's directory is changed.

1. Install it `npm install nodemon -g`
    - the `-g` tells npm to make the package available for use in the terminal in any directory (globally)
1. Now we can call `nodemon server.js`, and the server will restart whenever the app's code changes

## Save a record of what packages your application uses

- In general, we don't want to store our package code in our repositories, because it increases the size of the repo unnecessarily
- We can install our packages like normal but keep track of what packages were installed in a `package.json` file.
    - Then when other users download our code
        1. They simply call `npm install`
        1. NPM will then look in the package.json file to see what packages need to be installed and install them without requiring the user to type `npm install some-package` for each package the app depends on (dependency)

1. In the terminal, type: `npm init`
1. Keep hitting enter, until the program finishes
    - you should now have a package.json file
1. Install a package with `npm install some-package --save`
    - The `--save` tells npm to keep a record inside `pacakge.json` that the application depends on the package installed

Let's test this out:

1. `rm -r node_modules`
1. `npm init`
1. `npm install express --save`
1. `rm -r node_modules`
    - simulates another developer downloading your code
1. `npm install`
1. Look inside the `node_mdules` directory to see if `express` was installed

In general, we can tell git to ignore `node_modules` directories so that they don't get added accidentally

1. Create a file called `.gitignore`
1. In it, add the line `node_modules`

We can also edit package.json so that we don't need specify the script that we're going to run.  Do one of the following:

- After doing `npm init`
    - when it says `entry point: (index.js)`, specify which file you want to use (e.g. server.js)
- Edit package.json
    - where it says `"main": "index.js",` change the file name (e.g. server.js)

Now we can simply run `nodemon` without specifying the file name
