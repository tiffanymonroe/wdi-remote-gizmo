![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Review: git/github, terminal, and anything we've covered so far & HTML Boilerplate <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
    Course: WDIR-Hopper <br>
Competencies: git/github, terminal, html fundamentals <br>
Prerequisites: [Introduction to HTML](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)<br>

---

## Part 1 - Review
- Go over anything we've covered in the last two days
  - git/github homework submission
  - terminal
  - homework
  - anything else?


## Part 1 - Acitvity : UTF-8, HTML Boilerplate, Linking files in HTML via relative and absolute pathing (http/https only)

### Morning Exercise

- Prerequisites
 - [HTML Video 1]( https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)  ~ 14 minutes


- Watch:
  - [UTF-8 : The Unicode Miracle](https://www.youtube.com/watch?v=MijmeoH9LT4) ~ 9.5 minutes
  - [Why HTML seems to tolerate mistakes](https://www.youtube.com/watch?v=-csXdj4WVwA) ~ 10 minutes

## Create boilerplate html
Boilerplate is defined as a standard template of any kind that can (and is often reused without much modification)

**Lesson Objective**

Rather than trying to memorize the boilerplate, build one on your own and take the time to understand each component's function.

- HTML documents have some standard elements that are always included
  - `<!DOCTYPE html>` - put at the top of the document, to declare that this is an HTML5 document
  - Additional boilerplate tags include
  - `<html>`
  - `<head>`
  - `<body>`
  - `<meta charset="utf-8">`
  - `<title>`

Important: What is the function of the `<head>` and `<body>` tags? What kind of tags go inside each one? Where does the `<title>` tag go (`<head>` or `<body>`)? Where on the web page does the text inside the `<title>` tag appear?

Other things to think about:
- What does `<meta charset="utf-8">` do? (hint see above video)
- According to the above video about HTML, what could you guess would happen if you forgot the `<html>` tags?


### Create an HTML file with the above boilerplate elements
 - Make sure (in terminal) you are in today's folder on your local copy of our repo (Today is W01D03) and then go into the `morning-exercise folder`
 - `touch` `boilerplate.html`
 - `atom .`
 - Write your HMTL
 - Make sure the tags are in the correct order
 - Makes sure there is the appropriate amount of nesting for each tag
 - Make sure to include closing tags if a tag is not self-closing (What is a self-closing tag? Can you think of an example?)

 Important: be sure to indent appropriately and check for typos, especially for when you want to go back and reuse this code or check it as a reference

### Create A project folder with boilerplate HTML, CSS and JS files

There are usually a few other common elements that are included in most HTML sites, including folders (for organization), CSS files and JavaScript Files. Let's add them, so you can have a boilerplate ready to go whenever you start a new homework or project.

<details><summary>File Structure</summary>
![file structure](boilerplate-file-structure.png)
</details>

#### Create files and folders
Inside today's Morning Exercise folder, make a new folder (`mkdir`) called `project-boilerplate`

- `cd` into `project-boilerplate`

#### Make HTML file

- touch `index.html`

#### Make JavaScript file
- touch `app.js`
- open `app.js`
- insert an `alert();` inside the `app.js `that gives you a message to know that when you load your `html` into the browser, the `app.js` file is linked. How/where will this alert show up?
 - Note: the text inside the alert must be a string (make sure the text is wrapped in single or double quotes)
- insert a `console.log();`, with another message of your choice. How/where will this console.log show up?
   - Note: the text inside the console.log must be a string(make sure the text is wrapped in single or double quotes)

Note: if you have more than one JavaScript file, it would be typical to put those files all in a folder called `js` (or a similar name  - see example with CSS)

<hr>
#### Make CSS folder and file
- Now,  `mkdir css`
- Inside that folder, touch `styles.css`
- open `styles.css`
- let's give the `body` a `background-color` [of any color of your choosing](http://htmlcolorcodes.com/)
- Take a moment to think about how you can tell if you have successfully linked your stylesheet.

<hr>
#### Start coding your HTML by adding your boilerplate and links to your CSS and JavaScript
- Open `index.html`
- Copy your boilerplate code from earlier( from `boilerplate.html`) into your `index.html` file


- Add a link to your `app.js` (where does it go? In the head? in the body?)
  - Check that it works by looking for the `alert` and `console.log` that you added
    - Feel free to comment out or remove the alert once you are certain your files are linked
- Add a link to your css (where does it go? In the head? in the body?)
- Test it to be sure it works (how can you tell?)
<hr>

#### Add a few more common elements

##### Image tag
- Find an image on the internet that brings you joy
- Copy its URL
- Add an image tag  `<img/>` inside the body that will display your image
 - You will need to ive the `<img/>` tag a src attribute and set it's value to the image's url.
 - It is good practice to also add an alt attribute to an `</img>` tag, why? What does this attribute do?

##### H1 tag
- Add an `<h1>` tag to describe the image you have added

###### Anchor tag `<a>`
- Add an anchor tag `<a>` that will link you back to your `boilerplate.html`

###### Final question
- Use a paragraph tag inside your html and write a short answer to the following: Why were `<b>` (bold) and  `<i>` (italics) tags replaced by `<strong>` (strong) and `<em>` (emphasis) tags as the new standard in HTML 5?


###### Get started on the video on HTML for tonight
- [HTML 2](https://www.youtube.com/watch?v=KhbnrDhWDdE&index=2&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
