
## jQuery activity

Official jQuery docs: `http://api.jquery.com/`

Refer to the jQuery Cheat Sheet

* Comment out your existing jQuery code except for the closure.
* Remove the html within the body tags (except your scripts, if you have them there).
* Make and link a CSS file to your `index.html`

In `index.html`

* Write in two divs, an outer and an inner div. Only the inner div will have an id:

```
<div>
	<div id="inner-div"></div>
</div>
```

In `app.js`

* Write jQuery to grab the inner div (by id) from the page
* Use jQuery to grab the _parent_ of the inner div from the page

In your CSS file:

* Write a CSS class `big-box` that will make its elements 200px by 200px and the color blue
* Write CSS class `small-box` that will make make its elements 100px x 100px and the color red

In `app.js`

* Use jQuery to give the outer div the `big-box` class
* Use jQuery to give the inner div the `small-box` class

* Use jQuery to remove the inner div from the page 

* Use jQuery to create another div and append it to the `body` of the page 
* Use jQuery to give this new div the class `small-box`
* Use jQuery to add CSS properties to this new div: give it a border-radius of 50%

* Use jQuery to append the new div to the outer div
* Use jQuery to _clone_ the new div and append it to the outer div. Do this three times (you should see four red circles extending from the blue box)

* Use jQuery to grab all the _children_ of the outer div
* Use jQuery to set the css properties of these children to `display: inline-block`

The four red circles should be sitting (uncomfortably) within the blue box

* Using jQuery `.eq()`, grab the first child of the children of the outer div
* Using jQuery, give the first child an id of `first`


<br>
<hr>

