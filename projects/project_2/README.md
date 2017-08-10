# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Building Your First Full-Stack Application

## Overview

You will be creating a full stack application using everything you've learned in Unit 2. *You will be working individually for this project*, but we'll be guiding you along the process and helping you as you go. Show us what you've got!

## Project due date

**Friday, August 11**<br>
1. Submit an issue to our class repo (as you normally do for homework) but with the following:
- the title for your issue should be `Your Name - Project 2` by 10 am Eastern.
- a link to your repo
- a link to your live site.

2. You will be presenting your projects in front of the class.

3. You will also add your project to a google sheet with the project name, a brief description and a link to the live site. This sheet will be sent out by the IAs closer to the due date of the project.

## Attendance
You are required to be present at 10:00 am EDT each day during the project. We will be taking attendance - this will count for both morning and afternoon attendance.

## Standups
We will have student-run stand-ups each morning at 10:00 am EDT where you will answer the following questions:

- What did I work on yesterday
- What am I trying to get done today
- What is preventing me from getting this done.

This meeting should take no longer than 15 minutes.

If you have ideas on how you can help a fellow-student with work that they are stuck on, please follow-up with information AFTER the stand up.

## Meetings with instructors
_Your instructor will contact you to setup a meeting time_

**Friday, August 4**<br>
Short meeting with your instructor to get your project idea approved.

**Monday, August 7 - Thursday, August 10**<br>
Possible 15 minute meetings to check in (varies by instructor / your project progress). We will do things like check overall progress and direct you to resources.

## Technical Requirements
### &#x1F534; Mandatory to pass:
#### MVP - minimum viable product

* A working full-stack application, built by you
* Adhere to the **MVC** file structure
* Use **Node.js, Mongoose, Express and EJS**
* Have _at least_ **2 models** (more if they make sense)
* Have complete **RESTful routes** for at least one of your resources with GET, POST, PUT, and DELETE
* Write Mongo queries using the **Mongoose module** and interact with your document database
* A git repository **not inside the class repo**. You will need to start your project in a specific way in order to be able to upload it to Heroku (host it live on the web) **see below for more details**.
* A **git repository hosted on Github**, with a link to your hosted project.
* At **least one** Github commit per day. Commit early, commit often.
* **Be deployed online** and accessible to the public via **Heroku**
* Have a **link to your hosted working app** in the **`README.md`** file in your github repo

Lastly, a **technical demonstration** of your app which:

  * Is ~5 minutes in length
  * Shows off all features of the app
  * Explains the technical details
  * Explains the technical challenges
  * Explains which improvements you might make

---
### &#x1F535; Not mandatory:
#### Recommended features 

(Choose any, this list is not in any order)

* Include **sign up/log in** functionality, with encrypted passwords & an authorization flow.
* Use EJS Partials
* Include portfolio-quality styling
* Use a CSS framework like Skeleton or Bootstrap
* Include User Stories
* Include **wireframes** that you designed during the planning process (uploaded to your github repo)
* **A ``readme.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
* Incorporate **Google Maps**
* Research and implement **AJAX** [Our wiki on APIs](https://github.com/ga-students/wdi-remote-gizmo/wiki/API-Aggregators)

## Potential Project Ideas

### Wiki
 Create an application for a business magnate who wants to have an internally facing wiki for her organization. She wants her employees to be able to write articles in order to inform colleagues about their insights.


### Forum

A freelance client loves discussions with his friends and other people who share his interests, so he wants you to build a forum for people to post new topics and then comment on them.

### Cheerups

The world is a depressing place.

Your task is to create an app that will allow people to create and share "cheerups" - happy little quips to brighten other peoples' days. Cheerups will be small - limited to 139 characters. Members will be able to promote Cheerups that they like and maybe even boost the reputation of the Cheerupper.

## Project 2 Inspiration:

- Cheerups: https://warm-beach-18335.herokuapp.com/cheerups
- Mixtapes: https://project-mixtapes.herokuapp.com/
- Tink & Frog: https://tink-and-frog.herokuapp.com/
- CodeSnips: https://stark-plateau-60254.herokuapp.com/
- flyerPole: https://flyerpole.herokuapp.com/
- LeagueManager: https://aqueous-harbor-40707.herokuapp.com/
- Yarn: https://thawing-chamber-93915.herokuapp.com/
- Crammer: https://study-tool.herokuapp.com/
- GitFit: https://salty-springs-24805.herokuapp.com/
- Civilized Coffee: https://infinite-shelf-28534.herokuapp.com/

## Suggested Ways to Get Started

* **Wireframe** Make a drawing of what your app will look like on each page of your application (what does it look like as soon as you log on to the site? What does it look like once a user logs in, etc.).
* **Break the project down** into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
* Work through the lessons in class for help and inspiration! Think about adding relevant code to your application each day - you are given several days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

## Your Application Files
### Make a New Repo & Setup for Heroku Deployment

Take the following steps to ensure you have the right file structure/set up in order to deploy your site to Heroku. Note that you will have a walkthrough lesson on how to deply to Heroku, but your files will need to be structured properly:

1. make a new github repo for your project **outside** of our class repo.

2. Inside this new repo, create a `.gitignore` file in the root of the repository directory. Put `node_modules` as the content of this file.

3. on `npm init`, specify `server.js` as your entry point

4. if you did not set up your `entry point` in `package.json` correctly, make sure that you edit your `pacakge.json` so that `main` is set to `server.js`

5. Make sure your `server.js` and `package.json` are in the **root** of your project repository


## Useful Resources

* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_
* **[Mongo Documentation](https://docs.mongodb.com/manual/)**
* **[Mongoose Documentation](http://mongoosejs.com/docs/guide.html)**


## Where to go for help during project week

1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA
4. Submit a Github issue **on the class** Github account to receive help from an instructor.

## Formatting your GitHub Issue for the class repo to ask for help

*PUSH OFTEN! Your code on GitHub should be up to date. Submitting an issue and linking us to old, out-of-date code will hinder the process.*

1. **ALERT YOUR INSTRUCTOR**
- You must do @your_instructors_github_handle, inside the comment area of your issue, to notify your instructor that you have created an issue.

1. **LINKS**
- Links to your code and your live site.

1. **WHAT YOU ARE TRYING TO SOLVE:**
  - Write a detailed explanation of the feature or user story you're working on.

1. **DETAILED DESCRIPTION OF THE BUG/ERROR:**
  - A detailed description of the problem, the bug, and/or the error. This means: the full steps to reproduce, a link to the file on github, and the line number of where the relevant code is.
The error(s) returned, copy and pasted/typed out/screenshot, not paraphrased.
  - If there is other code in a different file that is also essential to the functioning of the code that currently works point us to that and explain the relationship.

1. **WHAT I'VE TRIED**
  - List everything you've done to solve the bug on your own in detail. list all resources you've looked up and tried to implement and provide links. Providing code if you have it surrounded by the md syntax to display nicely is very helpful.

1. **QUESTION**
  - After going through all this what is your questions specifically, more specifically than how can I make this work?
