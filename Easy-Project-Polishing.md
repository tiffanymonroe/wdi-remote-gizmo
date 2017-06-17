You don't have to be an amazing designer or a CSS janissary to be able to polish up your project and make it look professional. 

There are some straightforward styles and patterns you can implement to achieve this.

## Don't use true black

If you have a dark font or dark background, don't use pure black but a dark gray. Similarly, if you have a dark background don't just use a white font color but a slightly off white.

![http://www.webdesignerdepot.com/2009/08/the-dos-and-donts-of-dark-web-design/](http://netdna.webdesignerdepot.com/uploads/dark_web_design/textcontrast.jpg)

From [webdesignerdepot.com](http://www.webdesignerdepot.com/2009/08/the-dos-and-donts-of-dark-web-design/)

## Add white space

Make sure your content isn't all just scrunched to the far left following HTML block flow. 

Provide white space around divs, input fields in forms, dynamically built lists, etc.

When adding white space, make sure it's consistent. For example, all header elements have 25px of white space surrounding them, and any non-header element has 10px. 


## Fonts

Use a font, don't just rely on Helvetica or the serif font that the browser provides. 

[20 best fonts from google webfonts](http://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html)

When you select a font from Google Fonts, it also provides a sidebar that suggests font pairings.

### Don't go font crazy

Pick **one** for headers and **one** for the copy. **OR** pick **one** font and use **one** weight for headers and **one** weight for the copy.

Avoid cursive type fonts. If you're using colors, make sure it's readable.

## Add pointers to buttons and links!

Dynamically built buttons, links, and `ui-srefs` frequently will lack the styling that you typically interact with online.

[Types of cursor pointers](https://css-tricks.com/almanac/properties/c/cursor/)

There are 25 different types of pointers. The main one — and possibly the only one — you want to add is `cursor: pointer;` on any element in your app that's clickable. 

The `pointer` style will change the cursor to -> ![pointer](https://www.kirupa.com/html5/images/pointer_cursor.png) when the user's cursor hovers over the element.

## Style buttons

Again doesn't have to be crazy intense with box shadow, hover effects, and bouncing, but just expanding the width and height a bit, adding a border, and a background color, etc. You want to move away from relying on the default styling elements provided by the browser.

[Designing CSS Buttons Techniques and Resources](https://www.smashingmagazine.com/2009/11/designing-css-buttons-techniques-and-resources/)

## Unordered lists and hrefs

Get rid of the bullet styling on list elements with `list-style: none;`

Get rid of the default underline and blue color styling on links. 

## Favicon

Setup the middleware to serve a favicon for your project:

https://github.com/expressjs/serve-favicon

Generate a favicon:
- http://www.favicon.cc/
- http://www.favicon-generator.org/