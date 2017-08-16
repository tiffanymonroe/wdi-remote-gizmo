# API's with Angular

## Lesson Objectives
1. Use a npm module to call the twitter api
2.  use angular to get the tweets

## OAuth

-  OAuth is simply an authorization protocol that deals 
  with third party application to access user data without exposing 
  passwords

-  This is something used alot with website like Microsoft, Google (gmail), Facebook, and Twitter.

- Basically OAuth(Open Authorization) is a token-based authentication and authorization.    

#### It usually contains these for elements to verify the client and application

1.  Consumer key - is essentially the API key associated with the application. This key is what identifies the client. Remeber, a client is a website/service that is making a call to an endpoint.

2.  Consumer secret - is the client password that is used to authenticate with the authentication server, which is a Twitter/gmail/facebook/etc. server that authenticates the client.

3.  Access token  - is what is issued to the client once the client successfully authenticates itself (using the consumer key & secret). This access token defines the privileges of the client (what data the client can and cannot access). 

4.  Access token secret  - is what is sent with the access toke as a passwrod every time the client makes a call to the respective endpoint.  

- [OAuth](https://tools.ietf.org/html/rfc6749)


### First lets start by installing the twit npm module

- lets go to google and find the npm documentation for twit
- remember to look for when the module was last updated, and how the documentation looks,
  and what version it is on.  

- npm install twit

## /controllers/twitter.js

-  Lets initiazize the code 

```
const Twit = require('twit');

const T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
```

## okay so now we need to go get our authorization

- go to [apps.twitter.com](https://apps.twitter.com/);

1. Click on create app

* Give it a name, it can be anyting
* Give it a description 
* Give it a website name, since we are doing this localy we can make a placehoder http://somethicom
* Leave the callback url blank thats is useful if we are authenitcating are app via gmail or something, were focusing on making restful calls right now.


2.  Copy and paste your consumer Key and Secret into our code
3.  Generate Access Tokens and paste them in to our code.  


```
const T = new Twit({
  consumer_key:         'GGXjItT2DIIuCqwunS2cEM84I',
  consumer_secret:      'cLpCGro4elUMrs6wB3hmSBEg2xqIV7NCTcZVeNvXuHjsKI9ml8',
  access_token:         '3373072335-HENAgtLucH7fbDHcR7tRYRRH6jLMd7KveE9dnNl',
  access_token_secret:  'MOl10OQdwQIJR1hSRNbw9cWjVe4Fe8UcrJC0MThgUaJWK',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
```

## Try to write a function that searches tweets for tweets with the word dog

- Use the end point `search/tweets`

- How can you test this, Try running the file from the command line

```
  T.get('search/tweets', { q: 'bunny since:2011-07-11', count: 10 })
                    .catch((err) => {
                      console.log(err)
                    })
                    .then((result) => {
                       let tweets = result.data.statuses;
                        console.log(tweets)
                        response(res, tweets)
                    })
```

## lets modularize this and setup an endpoint for angular

1.  Create a bin foler with a file named `twitbot.js` in it.
2. Paste the Twit code into this file 

```
// twitbot.js
const Twit = require('twit');

const T = new Twit({
  consumer_key:         'GGXjItT2DIIuCqwunS2cEM84I',
  consumer_secret:      'cLpCGro4elUMrs6wB3hmSBEg2xqIV7NCTcZVeNvXuHjsKI9ml8',
  access_token:         '3373072335-HENAgtLucH7fbDHcR7tRYRRH6jLMd7KveE9dnNl',
  access_token_secret:  'MOl10OQdwQIJR1hSRNbw9cWjVe4Fe8UcrJC0MThgUaJWK',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

T.get('search/tweets', { q: 'dog since:2015-07-11', count: 10 })
                    .catch((err) => {
                      console.log(err)
                    })
                    .then((result) => {
                       let tweets = result.data.statuses;
                        console.log(tweets)
                        response(res, tweets)
                    })
```


## challenge 
1. try to write a function that you can export to get tweets in the `twitbot.js`
2. You will use this function in the `twitter.js` file.  
3.  In the `twitter.js` set up a get route for your angular route to call, and use the function you wrote in `twitbot.js` to get tweets and then send them to the client


```
// twitbot.js
const Twit = require('twit');

const T = new Twit({
  consumer_key:         'GGXjItT2DIIuCqwunS2cEM84I',
  consumer_secret:      'cLpCGro4elUMrs6wB3hmSBEg2xqIV7NCTcZVeNvXuHjsKI9ml8',
  access_token:         '3373072335-HENAgtLucH7fbDHcR7tRYRRH6jLMd7KveE9dnNl',
  access_token_secret:  'MOl10OQdwQIJR1hSRNbw9cWjVe4Fe8UcrJC0MThgUaJWK',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})




const getTweets = (res) => {

  const response = (res, data) => {
    res.send(data)
  }

  T.get('search/tweets', { q: 'bunny since:2011-07-11', count: 10 })
                    .catch((err) => {
                      console.log(err)
                    })
                    .then((result) => {
                       let tweets = result.data.statuses;
                        console.log(tweets)
                        response(res, tweets)
                    })

}


module.exports = getTweets;

```

```
// twitter.js 

const express = require('express');
const router = express.Router();
const getTweets = require('../bin/twitbot.js')



router.get('/getTweets', (req, res) => {
  getTweets(res);
})



module.exports = router;

```


### Connect with angular

1.  Try to call the API endpoint with anguler

```
const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
    console.log(' this is happening ')
    const controller = this;
    this.getTweets = function() {
        $http({
            method: 'GET',
            url: '/tweets/getTweets'
        }).then(
            function(response){
                console.log(response, ' this is response')

            },
            function(err){
                console.log(err);
            }
        );
    }
}])
```

- how can you see if this is working? Open up the console

# Things to expand on
1.  list out the tweets using angular
2.  Change the query object in the tweets api call
3.  figure out a way to send user input to the query parameters 
to make an interface for the api calls
4.  Experiment with different endpoint, what are they? google Twitter api endpoints





















https://apps.twitter.com/
