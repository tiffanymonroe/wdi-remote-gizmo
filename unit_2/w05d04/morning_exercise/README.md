![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Bootstrap - CSS Frameworks <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: Kristyn Bryan & Greg Dunn, WDI-Funke<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIR-Hopper<br>
Competencies: CSS Frameworks, Bootstrap<br>
Prerequisites: CSS, HTML <br>

---

# Morning Exercise

## CSS Frameworks

A CSS framework can save you time when styling applications. A framework is really just a stylesheet that has been designed by someone else that you are implementing into your code.

To implement these styles, you simply add a class to the html element that you'd like to style and give it the class name stated in your framework's documentation.

In addition, you can make changes to the styles using your own stylesheet. Combine and conquer!

You can use Bootstrap to jazz up your projects, but we also want you to be familiar with it because, a lot of times when you jump into a company that has a pre-existing codebase, you will encounter the use of a CSS framework.


### The framework that we will be looking at today:

[Bootstrap](http://getbootstrap.com/)<br>
  _Probably the most popular framework out there right now. Originally created by some guys who were working at Twitter._


## Setup

1. Use the files inside the `bootstrap_example` folder to code along with this morning's exercise.

## Let's Look at Bootstrap

Bootstrap's website catalogs everything that you can use to style your application. Note that their styles are responsive. You can download a file and keep it in your application or use a link to their CDN.

Bootstrap is a very robust framework! It has pretty much everything that you need (plus more). After this lesson, take some time to explore the site to see more of the offerings. Consider using it in your homeworks or projects.

## Code along:

1. Navigate inside your `bootstrap_example` folder.

2. Open the index.html file in your browser `open index.html`

3. Go to [Bootstrap's framework page](http://getbootstrap.com/) to get their stylesheets.

>Direct link to documentation:
http://getbootstrap.com/getting-started/

4. You could download the files (but let's not do that for this exercise):
![](https://i.imgur.com/Y2bjh8G.png)

5. Let's use the Bootstrap CDN link to get the style's to our page:

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`

6. Refresh your browser and take a look at what happened after just initially linking Bootstrap.

7. We'll be using classes from the `CSS` and the `Components` section. You can browse through these sections in the top nav bar on Bootstrap's page to see some options for what we can do.

## Nav bar

>Direct link to documentation:
http://getbootstrap.com/components/#nav

1. Add the `class="nav"` to the `ul` of your nav bar.

2. You can add additional styling to this. Let's add `class="nav-tabs"` to adjust the formatting and make our link into tabs.

![nav](https://i.imgur.com/zRsVdwm.png)

## Adjust the image

>Direct link to documentation:
http://getbootstrap.com/css/#images

1. If we wanted our image to be responsive, we could add the `class="img-responsive"`

2. If we always want it to stay centered, tack on `class="center-block"`

## Container

>Direct link to documentation:
http://getbootstrap.com/css/#overview-container

1. Let's start by wrapping our site in a container: `class = "container"`. What does this do?

We can use .container for a responsive fixed width container.

![container](https://i.imgur.com/VQT8U0F.png)

If we want the container to span the entire width of the viewport, we can use `class="container-fluid"`

![container fluid](https://i.imgur.com/nbdIF1f.png)

## Bootstrap's grid
Let's use the built-in grid system that Bootstrap supplies.

>Direct link  to documentation: http://getbootstrap.com/css/#grid-options

1. On the three paragraphs below the Example header, let's put `class="row"` on a div that surrounds all three.

2. Let's give each of these paragraphs a `class="col-xs-4"`

3. Refresh your browser page.

![grid](https://i.imgur.com/DmpDs9U.png)

## Update a button

>Direct link  to documentation:
http://getbootstrap.com/css/#buttons

Bootstrap has multiple button options:

  - The default button style:
  `class="btn btn-default"`

  ![default button](https://i.imgur.com/avr5c7L.png)

  - quickly style to denote an action (success, alert, negative action, etc.)
    - `class="btn btn-success"`<br>

  ![button success](https://i.imgur.com/t5hwr8l.png)<br>
    - `class="btn btn-danger"`<br>

    ![button
     success](https://i.imgur.com/GKLiOnY.png)

  - Or change the size of the button
  `class="btn btn-primary btn-lg"`<br>

  ![button large](https://i.imgur.com/j3As5WS.png)

1. Choose one and add it in the anchor tag on your index.html to turn the `Learn More` tag to a button.

#### Style the table

>Direct link  to documentation:
http://getbootstrap.com/css/#tables

1. Add Bootstrap's default table style: `class="table"`

![table](https://i.imgur.com/h8zEAQU.png)

2. Adjust it to `class="table-striped"` to make it easier to read.

![striped table](https://i.imgur.com/DHPEEsi.png)

#### Sections that you want to showcase

>Direct link  to documentation:
http://getbootstrap.com/components/#jumbotron

Bootstrap has something called `jumbotron` which has styling to showcase a section.

1. Let's add `class="jumbotron"` to the section marked as `callout` in our index.html.

![jumbotron](https://i.imgur.com/2bPaxXf.png)

NOTE: Bootstrap is fully responsive! Change the sizes of your screen to check it out.

# Other CSS frameworks:

[Skeleton](http://getskeleton.com/)<br>
  _Lightweight framework that has a nice, simple grid system._

[Materialize](http://materializecss.com/)<br>
_This framework is difficult to manipulate, but I like it for the parralax and the cards._

[Pure CSS](http://purecss.io/)<br>
_Similar to skeleton, this is a light framework with a grid system and responsive design._
