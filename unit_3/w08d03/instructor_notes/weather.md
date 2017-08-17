## Lesson Objectives
1.  Use an api key with openWeatherMap
2.  use the request module on node to make the request
3.  Learn how to hide our keys in our .env file


# Get our key
1.  go to [openWeathermapApi](https://home.openweathermap.org/) and sign up 
for a key

2. past the key in the variable I created inside of `/bin/weather.js`

```
const apiKey = '4507ec27b0a5b32877e856da0ceca6c9'
```

- install the npm module request 

3.  Lets test out the request

```
request("https://api.openweathermap.org/data/2.5/weather?q=chicago&APPID=" + apiKey, function  (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body);
      console.log(typeof body)
      const parsedBody = JSON.parse(body)
      console.log(parsedBody.main.temp, parsedBody.name)
    
    });
```

- notice to access the object we have to parse it from JSON into a regular string

4.  Now lets create a function like we did earlier today to export it so we can you it in a get route

```
const request = require('request');

const apiKey = '4507ec27b0a5b32877e856da0ceca6c9'

const getWeather = (res, city) => {

  const responseToClient = (res, data) =>{
    res.send(data)
  }

    request("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body);
      console.log(typeof body)
      const parsedBody = JSON.parse(body)
      responseToClient(res, body)
      console.log(parsedBody.main.temp, parsedBody.name)
    });
}



module.exports = getWeather;
```


5.  Now lets create our endpoint in `controllers/weather.js`

```
const express = require('express');
const router = express.Router();
const getWeather = require('../bin/weather.js')

router.get('/', (req, res) => {
  getWeather(res, 'chicago')
})




module.exports = router;
```

6.  Test this out go to 'localhost:3000/weather'
- You should see the json object


### Now lets play with angular

const app = angular.module('myApp', []);

```
app.controller('BaseCtrl', ['$http', function($http){
    console.log(' this is happening ')
    const controller = this;

    this.message = '',
    this.getWeather = function() {
      console.log('called')
        $http({
            method: 'GET',
            url: '/weather'
        }).then(
            function(response){
                console.log(response, ' this is response')
                controller.message = response.data.main.temp + " in " + response.data.name
                // $scope.photos = response

            },
            function(err){
                console.log(err);
            }
        );
    }

}]);

```

- Our view

```
// html

<html ng-app="myApp">
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js" charset="utf-8"></script>

    </head>
    <body ng-controller="BaseCtrl as base">

    <h1>{{base.message}}</h1>
    <button ng-click="base.getWeather()">Get Weather</button>


         <script src="/app.js" charset="utf-8"></script>
    </body>
</html>
```


## Lets hide our keys in a .env file

- This is a file that will remain on our computer and store our enviroment variables so no one else can see them 

1.  go look at the docs for the dotenv module on npm 
2.  npm install dotenv
3.  touch a .gitignore
4.  touch a .env file
6.  in the `.gitignore` file add the following code `.env`
5. `git add` and `git commmit` now we are ready to edit the .env file
6.  add the following code to your .env file

```
API_KEY='4507ec27b0a5b32877e856da0ceca6c9'

```

7.  Now we can go to `bin/weather.js` and change the `apiKey` variable to the following

```
const apiKey = process.env.API_KEY
```

- This gives us access to our APIKEY that we stored in our enviroment variable that only we can see




## Try to add a Post route so we can allow the user to pick our city

```
// controller code for angular

    this.postWeather = function() {
      console.log('called')
      const data = {
        city: controller.query
      }
      console.log(controller.query, 'post')
        $http({
            method: 'POST',
            url: '/weather',
            data: data

        }).then(
            function(response){
                console.log(response, ' this is response from post')
                controller.message = response.data.main.temp + " in " + response.data.name
                // $scope.photos = response

            },
            function(err){
                console.log(err);
            }
        );
    }


```

```
// controller server code

router.post('/', (req, res) => {
  console.log(req.body.city, 'req.body')

  getWeather(res, req.body.city)

})

```

