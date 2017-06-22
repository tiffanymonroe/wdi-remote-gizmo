![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: HTML Mockup <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Instructor:Kristyn Bryan<br>
Modified from Lab Created by: Matt Huntington
    Course: WDIR-Hopper<br>
Competencies: HTML <br>
Prerequisites: Basic HTML <br>

---
# Morning Exercise

<hr>

# HTML
*Tags, Content, Attributes, & Semantic HTML*

**NOTE** We will not be discussing all of the notes in this section, but they are here for your reference.

## Lesson Objectives

1. Describe what HTML is
1. Describe what a tag is
1. Describe what the content of a tag is
1. List some common tags

## What is HTML?

HTML stands for Hyper Text Markup Language.  It's a way to give structural meaning to text.  It allows computers and programmers to easily determine what the purpose of a chunk of text does.

## Tags

HTML creates this meaning by surrounding text with tags.  Tags look like this:

hypothetical:<br>
`<example-tag></example-tag>`

literal: <br>
`<h1></h1>`

Note that there is an opening and a closing part of the tag.  We call these "opening" and "closing" tags.

## Tag Content

**Between** the opening and closing tags, we insert the text or "content" of the tag.  The final result would look like this:

hypothetical: <br>
`<example-tag>Content Goes in here</example-tag>`

literal: <br>
`<h1>The New York Times</h1>`  

Tags can also be placed **within** other tags to denote relationship:

```html
<ul> //outer tag opening
  <li></li> //inner tag
</ul> //outer tag closing
```

Note that when placing a tag inside another tag, you should indent the new tag to show it is a **child** of its **parent** tag.

## List some common tags

In general, we don't create our own tags.  Instead there are a [set of predefined tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) with functionality already associated with them.

<hr>

### Initializing a page

Every site should start with (we call this the boilerplate):

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

- When using Atom as your text editor, you can type `HTML` + `tab` and the boilerplate code will be autocompleted for you!

#### DOCTYPE
- This is a tag that is special and doesn't get closed.  
- It also is the only tag that can have non-alpha-numeric (letters/numbers) values in it.

####  html
- shows where the html begins

####  head
- contains content specifically for the browser, not the user, to see.

####  body
- contains all the content that the user will see when viewing the html in a web browser like Chrome, Firefox, etc.

<hr>

### Basic tags

####  h1, h2, h3, h4, h5, h6
  - These are headers.  Imagine you're giving a lecture and you want to have an outline.  These will help a computer/programmer figure out what are the title, sub sections, sub-sub sections, etc. of your outline.
  - The lower the number, the more important the header is.  h1 tags are generally the title of the page.  h2 denote a section, and so on.

#### p
  - These are paragraphs

<hr>

### Specific structure

Of course a website is more than just headers and paragraphs.  It has many sections to it that a normal outline doesn't.  Here are some of the more common tags we use to give structure to the page

#### header
  - could contain elements like a log and a nav bar.  Perhaps the title of the page too?

#### footer
  - could contain disclaimers, copyrights, and less important links (privacy, terms and conditions, legal, etc).

####  main
  - the bulk of your site goes in here

####  section
  - within some of the tags listed above, there can be different sections.  Use this tag to block each section off

####  nav
  - this will hold navigation links

####  article
  - if you're writing a blog, or have a page with many self contained sections, this might work well

####  aside
  - this is for tangential material.  Sidebars, inserts, etc.

<hr>

### generic structure

Sometimes we need a tag that doesn't fit into any of the previously defined categories.  If this is the case, we can use one of two generic tags

#### div
  - used to block out chunks of content

#### span
  - use to block out small bits of content (e.g. words, sentences, etc)

<hr>

### elements

Some elements are not structural, but actually make the content display differently

#### ul/ol/li
  - creates a list, either unordered (ul) or ordered (ol)
  - inside each `ul` or `ol` is a set of `li` list item elements.
#### em
  - this will emphasize a chunk of text, usually making it italics
#### strong
  - this will emphasize a chunk of text, usually making it bold.

#### decorative elements

Some elements do not contain content and instead are purely for decoration.  Elements that do not contain content are written like so `<no-content-tag/>`.  Note there is no closing tag and the slash comes before the final `>`

#### hr
  - horizontal rule, `<hr/>` creates a divider
#### br
  - break, `<br/>`, starts a new line in a chunk of text.

<hr>

## Tag Attributes

- We can add more meaning to a tag by adding "attributes" to it.  
- This looks like

hypothetical:<br>
`<some-tag my-attribute="attribute-value"><some-tag>`

literal:<br>
`<h3 class="bananas"><h3>`

or

hypothetical:<br>
`<self-closing-tag attribute="value"/>`.

literal:<br>
`<img class="bananas"/>`

- Again, in general, we don't create our own attributes, but instead choose from [predefined ones](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) which have specific functionality depending on what tag they're attached to.

<hr>

## Common tags that have attributes

### a
  - Anchor tag.  Creates a clickable link to another page.  Uses the `href` attribute to do so
  - example: `<a href="http://www.google.com">This link will go to Google</a>`
  - note that the actual URL (location) of the page is hidden, and that only the content is shown.

### img
  - self closing, but contains a `src` attribute with is the URL to an image
  - examle: `<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>`

### video
  - like `img` but goes to a video
  - example: `<video src="http://www.w3schools.com/html/mov_bbb.mp4"/>`
  - also has attributes like `autoplay`, `controls`, `loop`

### audio
  - like `img` and `video`
  - example: `<audio controls="true" src="http://www.w3schools.com/tags/horse.mp3"/>`

<hr>

## Semantic HTML

- HTML tags and attributes are supposed to give structure and meaning your content, not appearance.

- Sometimes you might want the title of the page (h1) to be smaller than the titles of the sub sections (h2).  You should still use the tag that conveys the proper meaning, even if the initial result doesn't look right. You can adjust the font sizes with your CSS.

<hr>

# Activity

## Directions
Look at the image below and create this webpage using HTML (no styling yet). Write your code inside the `mockup_practice` folder inside the file `index.html` that is inside your `morning_exercise` folder (so that is: `unit_01/w01d04/morning_exercise/mockup_practice/index.html`).

**IMPORTANT** Make sure to check your work in the browser *as you write your code*.

>:elephant: Reminder:<br>
Using the command `open index.html` inside the terminal when you are inside the folder with your `index.html` file will open your application in your browser.

## Commit Your Work

1. Get used to committing your work! After you create a tag, push the work.

>:elephant: Reminder:<br>
  - `git add .` to add the file
  - `git commit -m"add a message"` to make a commit
  - `git push origin master` to push it the work to your branch of the class github repo

## The Mockup
![Mockup](https://i.imgur.com/XLnBkER.png)

## The Resources
1. URL for image: http://blog.taxact.com/wp-content/uploads/Complete-Guide-to-Employee-Stock-Options-and-Tax-Reporting-Forms.jpg

1. For text to fill the paragraphs, use [a Lorem Ipsum generator](http://www.lipsum.com/) (this is just one of many that you can use).

1. The links that you create do not have to go anywhere, but you should be able to click on them.

>:elephant: Reminder:<br>
Use a `#` to make a "dummy" link.

## Hungry for More?

1. Create an `about.html` file which has similar content to the index.  

2. Have the "About" link in the `index.html` file send you to `about.html`.

3. Have the "Home" link send you to the `index.html` page.

4. Add a `style.css` file, link it, and use what you know about CSS from Fundamentals to start styling this website.
