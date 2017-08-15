![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-HOPPER

---
Title: World Bank Loan Records Finder <br>
Type: Homework<br>
Duration: Two days <br>
Creator: Thom Page for WDIr-Panthalassa<br>
Course: WDIR-Hopper<br>
Competencies: Angular.js with $http module<br>

---

## WORLD BANK LOAN RECORDS FINDER
*Note*: Two-day homework
This homework is due on Thursday, August 17 at 10 am EST.

###### Using Angular.js to make ajax calls with the $http module

### APP

You will be provided with working server code that delivers an API of World Bank Loan data in JSON format. Your mission is to build a single-page Angular front-end that makes use of the data. You will not change the server code in any way: you are making Angular to suit.

###### Your Angular page should display:
1. The number of records in the database.
2. A clickable list of each unique `region` name in the database.
3. When the `region` name is clicked, a list of all the records associated with that region should appear.
4. A search bar / filter box to narrow down the list of regions.
5. A working form to add a new record to the database.
	- When the data is submitted and processed, the page should immediately reflect the changes

###### IMAGE BELOW  
**Top:** the number of records is displayed.   
**Right**: All region names in the database, duplicates excluded. A search bar / filter box.  
**Left:** All the records for a given region once the region name is clicked. </br></br>
![main](http://i.imgur.com/u9Hf6KZ.png)

</br>
</br>
</br>

**Right:** A form to submit a new record.</br></br>

![newrecord](http://i.imgur.com/4wdv1yl.png)

</br>
</br>
</br>

**Right:** Putting input into the search/filter box changes the region list

![filter](http://i.imgur.com/jYs7yBS.png)

</br>
</br>
</br>

Number of records and search/filter box

![filterclose](http://i.imgur.com/pYmkL3p.png)

</br>
</br>
</br>

## DIRECTIONS AND COMMITS

#### Set up and seed db
* make sure you are on the same level as the `package.json` and `server.js`
* `npm install` your dependencies (already listed in `package.json`).
* start `mongod` in a new tab
* If you run `nodemon` and go to localhost:3000 (or whatever the port number is set to, double-check in your `server.js` file) at the root, you should get a 'cannot GET /' in the browser. This is because there is not yet a public folder or anything attributed to the root. You can check out a JSON service route by going to `/wbinfo/count`. This route gives a count of all records in the database, and should currently read 0 because the database has not been seeded.
<br><br>
* You have a seed route within a seed controller. Seed your database with all the World Bank records by going to `/seed` in your browser **once**. The app will redirect to the `wbinfo` JSON index for verification purposes.

*Made a mistake with seeding the database? go to `/seed/dropdatabase` - this will drop the database.

<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 1: set up and seeded db".
<hr>

#### Set up Angular
* Create your static assets. Your `index.html` and `app.js` will work together with two-way data binding.
* Create your Angular module (call it whatever you like).

	```
	<html ng-app="worldbank">
	```

	```
	var app = angular.module('worldbank', []);
	```
* Create a controller (you just need one) to work with your data. You can call it whatever you like. Give your controller `$http` so that it can make ajax requests.

	```
	<body ng-controller="mainController as ctrl">
	```

	```
	app.controller('mainController', ['$http', function($http) {
		//stuff
	}]);
	```

<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 2: Angular is good to go".
<hr>

#### Get the number of records and display it on the page
*Important* : Routes and angular directives reference at the bottom of this read me; for your reference- be sure to check them out


* Look in the starter code: there is a controller for the World Bank info called `wbinfoController`.
  * The first route in the controller uses the Mongoose `.count()` query. `.count()` is just like `.find()` but instead of returning all the records, it just returns the total number of those records. You don't need to alter this route, just know that it exists and what it does.
* When the page loads, make an ajax request to `/wbinfo/count`.
* Display a count of all records in the database.

<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 3: Count of database records appears on the page".
<hr>

#### Get the country / region names and display them on the page
* Look in the starter code-- in the `wbinfoController` there is a route called `'/uniqueRegions'` that uses the Mongoose `.distinct()` query. This query will find all entries of a certain kind, and exclude duplicates. We can get a list of all regions and they will be unique. You don't need to alter this route, just know that it exists and what it does.
* When the page loads, make an ajax request to `/wbinfo/uniqueRegions`.
* Display all the regions on the page.

<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 4: All region names appear on the page".
<hr>

#### When you click on a region name, all the separate records for that region will appear
* In the starter code, in the `wbinfoController` there is a route called `'/byName/:name'` that uses the Mongoose `.find()` query to retrieve all records _with a particular region name only_. The region name is passed in through `req.params`. You don't need to alter this route, just know that it exists and what it does.
* When the user clicks on a region name from the list, make an ajax request to `'/wbinfo/byName/' + (some variable name)`.
* Display all records associated with the clicked region on the page.

##### MODEL REFERENCE   
###### A `wbinfo` record has five strings    
* `region`  
* `projectabstract`  
* `projectname`  
* `year`  
* `loanamnt`  

<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 5: All records associated with a region appear on the page".
<hr>

#### Make a search box that will filter the region names

* Watch this video on making a search box (the final code is at around `3:32 - 3:40`, skip to that if you like): https://www.youtube.com/watch?v=YFsduR7mBfY
* Implement a search box that will filter the region names.

<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 6: Implemented search box".
<hr>

#### Add in a form to post new data

* In your `index.html`, Make a form that belongs to the parent controller (the form does not have its own controller).

Example code:

```
<form name="newRecordForm" ng-submit="ctrl.processForm()">
	<!-- stuff -->
	<button type="submit">SUBMIT</button>
</form>
```

* Make an empty object in your controller to store form data:

```
app.controller('mainController', ['$http', function($http) {

  this.formdata = {};

  // lots of stuff

}]);
```

* Make `this.formdata = {}` accept data from all the `ng-model`s in the form, and process that object in a function bound to `ng-submit`.

* The function that processes the form should make an ajax POST request to `'/wbinfo'` to create a new record.

Example POST request syntax:

```
   $http({
      method  : 'POST',
      url     : '/wbinfo',
      data    : this.formdata
   }).then(function(data) { });
```


<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 7: Can create new record".
<hr>

### HUNGRY FOR MORE
- List the region names alphabetically in the region list
<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 8: Region names are in alphabetical order".
<hr>

- Clear the form after submit
<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 9: Form is cleared after submit".
<hr>

- Include `delete` functionality (means adding a server route)
<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 10: Record can be deleted".
<hr>

- Include `put` functionality (means adding a server route)
<hr>
** Commit your work.** <br>
The commit message should read: <br>
"Commit 11: Record can be updated".
<hr>





#### LIST OF ROUTES
You have a controller for serving Wbinfo data. You don't need to change these or anything else in the server. The routes are:


- `/wbinfo/count`.
Serves up a count of all records in the database.

- `/wbinfo/uniqueRegions`
Serves up all values for the key `region` excluding duplicates.

- `/wbinfo/byName/:name`
Will deliver all records where the region name is the same as `req.params.name`

- There is also an index route `/wbinfo` for testing to see if all the data is there.

- And `POST /wbinfo` for creating a new record.

Use the information served by these routes in your Angular by using `$http` to get the information.

There is no front-end code given to you, you are building the entirety of the static component of the app in the `public` folder. Your front-end doesn't have to look anything like the examples given above, just as long as the information from the routes is used and the program flow works.

#### LIST OF ANGULAR DIRECTIVES

- `ng-app`
- `ng-controller` you only need one
- `ng-repeat`
- `ng-model`
- `ng-click`
- `ng-submit` within a form element
- `| filter:`

#### LIST OF ANGULAR DEPENDENCIES
- `$http`

</br>
