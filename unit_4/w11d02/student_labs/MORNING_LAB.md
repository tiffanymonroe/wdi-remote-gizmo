![](https://i.imgur.com/mS4bLMs.png)
# Q+A LAB (30 mins)

#### READ BELOW: WHY RUN A SEPARATE FRONTEND SERVER?

**Why run a separate frontend server?**

Maybe you're thinking you could just make static content that queries your Rails API? To deploy the static content you could plop it up on Github Pages? Avoid Heroku and avoid using another server altogether?

* Nothing is hosted on the Internet without a server. It wouldn’t be ‘locatable’ as it were.

* GitHub pages, while it seems its hosting static content, it is actually spinning up its own server to host your app, it’s not just sitting statically on the internet.

* Deploying to Heroku is 'leveling up' from deploying on Github pages: you're taking more responsiblity for your content.

* You can't deploy static content only to Heroku, you must deploy a server.


Why would we want to separate our app like this into two separate repos and servers, etc.?

- Developer sanity: Front end devs work in one environment, backend in the other, and they never mix.

- Maintainability and single responsibility: see above

- Updating one or the other is more straightforward because of a separation of concerns

- You can build multiple front-end applications that work off a single back-end application—a web version, an android app, and an ios app—all maintained by separate teams but the backend is the same for each. In this case four clean code bases.

- Cost: it costs money to host websites, in the thousands of dollars range, for minimal social media-like apps, less code bases cost less money (use a single API).

#### In your own words, explain to the group why we would run two servers

<br>

#### READ 'UNDERSTANDING CORS': [Understanding CORS](https://spring.io/understanding/CORS)

#### THEN EXPLAIN OR DIAGRAM THE REQUEST-RESPONSE CYCLE OF THE `ACCESS-CONTROL-ALLOW-ORIGIN` HEADER

[More on CORS](https://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/)

<br>

#### ANSWER THIS QUESTION: Does our frontend server have any routes? Why or why not?

<br>

#### EXTRA

* Scaffold a Rails API for **Mousses**
* Make a frontend server that can query the index route

<br>
#### EXTRA READING:

The Options verb:

> The “Preflight” request is a new HTTP verb called OPTIONS.  In a browser implementing CORS, each cross-origin GET or POST request is preceded by an OPTIONS request that checks whether the GET or POST is OK.  If it is, the server must return some headers to allow the subsequent GET or POST.  This is actually a wonderful capability.  The server can allow or disallow remote access on a per-method basis, with access determined by HTTP referrer, IP or any other criterial.

> The OPTIONS request contains Access-Control headers that are part of the CORS specification.  The response must reply to these headers to allow the subsequent GET or POST to proceed.
