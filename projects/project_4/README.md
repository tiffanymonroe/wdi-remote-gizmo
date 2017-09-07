# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #4: Ruby on Rails - Group Project

## Overview

For your 4th project, you will be collaborating to make an application using Ruby on Rails as the backend with an angular front end.

Use your imagination to find an app idea that you feel excited to build! Everyone will get a chance to **be creative**, and work through some really **tough programming challenges**, but you'll have partners to help you carry the load.

## Project due date
**Wednesday, September 13 at 10 am Eastern**<br>
Submit an issue (as you normally do for homework) with a link to your repo AND a link to your live site by 10 am Eastern. You will be presenting your projects in front of the class.

NOTE: Only one person will need to submit the issue. The title for your issue should be `Your Names - Project 4`.

## Attendance
You are required to be present at 10:00 am EDT each day during the project. We will be taking attendance - this will count for both morning and afternoon attendance.

## Standups
We will have student-run stand-ups each morning at 10:00 am EDT where you will answer the following questions:
- What did I work on yesterday
- What am I trying to get done today
- What is preventing me from getting this done.

This meeting should take no longer than 15 minutes.

If you have ideas on how you can help a fellow-student with work that they are stuck on, please follow-up with information AFTER the stand up.

## Zoom
The class Zoom room will close around 10:30 am each day during project week (enough time for attendance and standup). Your group must decide how and when they would like to work together. Some groups choose to make a Zoom room of their own and work together (sometimes silently, sometimes in a pair-programming fashion to solve problems). Other groups decide to skip the Zoom hangouts and just work on their own. As a team, it is up to you all to come to an agreement on how you would like to work - feel free to adjust throughout the project.

Note: Your personal Zoom rooms only stay open for about 40 minutes at a time. You will have to make a new room after 40 minutes, so just prepare for this.

## TA Hours
There will **not** be daytime TA hours during project week. TAs will be available for help in the evenings during their regularly scheduled hours. During group project weeks, it is important to work together to solve problems.

## Meetings with instructors
**Thursday, September 7**
You will have a 15 minute meeting with an instructor in the afternoon to get your project approved

**Friday, September 8 - Tuesday, September 12**
This varies depending on instructor, but you will have check-in meetings via Slack or Zoom. During this time we will check your tracker, overall progress, and direct you to resources.

## What You'll Do Today
_Your instructor will contact you to setup a meeting time for project approval_

- Meet to discuss your ideas with your teammate(s) and choose one idea (remember, you can always use other ideas for your next project(s))
- Create a new Github repo *OUTSIDE* of your class repository.
- Create your user stories and add them to your `README.md`
- Write what features will meet MVP and then list out other features as stretch goals
- Make wireframes and add them to your `README.md` (or put images and add links)
- Create your daily tracker

## File Setup
- Each of you, locally, should create a new folder to house your Project_4. This folder should be outside of your class repo.
- One person should create two new Github repositories. One will be for your front end and one will be for your backend.
- Everyone should clone these two repos from Github into the new Project_4 folder that they've created.
- Everyone should go inside of each of their new local repo folders and create `.gitignore` files. [Here is a list of useful .gitignores](https://github.com/github/gitignore) 

## Technical Requirements
### &#x1F534; Mandatory to pass:
#### MVP - minimum viable product

* **Rails backend:** Serve a JSON API with all CRUD operations available across your models (example: one model allows index and show, the other allows create, update, delete . The Rails API must be hosted.
* At least one **fully functional Angular front end app.** The frontend server must be hosted.
* **Configure CORS**, and your app, so that only the intended frontend app(s) can alter the database. Configure CORS so that anyone can read data from the hosted API.
* **AND *AT LEAST ONE* OF THE FOLLOWING:**
  * one-to-many relationship
  * many-to-many relationship
* A **working full-stack application, built by you & your group members**
* Two **git repositories hosted on Github**, with a link to your hosted project,  and frequent commits dating back to the **very beginning** of the project. Commit early, commit often
* At **least** one Github commit per day per member
* A **daily tracker** that all group members use (Trello, github issues, or another similar tracker)
* **Be deployed online** and accessible to the public via Heroku
* Have a **link to your hosted working app** in the `README.md` file in your github repo
* **A ``readme.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, and notes to yourself/group members so you can come back to your project later and be able to pick up your train of thought, etc
* **Info filled out in the google sheet** - you can add it [here](https://docs.google.com/spreadsheets/d/11aBR4u3N_qLqB4EH3GnCgV9zg-JTAMixkMQayYXFkck/edit?usp=sharing).

ALSO, don't forget: a **technical demonstration** of your app which:

  * Is ~5-10 minutes in length
  * All group members should speak during the presentation
  * Shows off all features of the app
  * Explains the technical details
  * Explains the technical challenges
  * Explains which improvements you might make

Additionally, we would like each group member to answer at least at least one of the following questions:

1) What went well for your group?
2) What was your groups biggest struggle?
3) What was the most useful tool that your group relied on the most
4) What was the most surprising aspect of working in a group/a thing (or things) you didn’t anticipate

  ---
### &#x1F535; Not mandatory:
#### Recommended features

* **third party API** with a gem
* authentication with [**Javascript Web Tokens**](https://github.com/ga-students/wdi-remote-gizmo/tree/master/unit_4/w11d04/instructor_notes)
* A **second front end app** using either jQuery, React, Vue, Swift, etc.
* A **second front end app for a mobile device** using [Ionic](https://ionicframework.com/) or [React Native](https://facebook.github.io/react-native/releases/next/)
* What about using **graphs or visuals** on your data? Chart.js , D3.js
* **Include portfolio-quality styling**
* **Use a CSS framework** like skeleton or bootstrap
* **Include User Stories**
* **Include wireframes** that you designed during the planning process (uploaded to your github repo)


### Suggested Ways to Get Started

<details><summary>List of ways to get started</summary>

* **Wireframe** Make a drawing of what your app will look like on each page of your application (what does it look like as soon as you log on to the site? What does it look like once a user logs in, etc.).

<br>

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

<br>

* Create your **user stories**

<br>

* Create a **Trello board** and break down the user stories into cards

<br>

* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems

<br>

* Work through the lessons in class for help and inspiration! Think about adding relevant code to your application each day - you are given 5 days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.

<br>

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

<br>

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

<br>

* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

</details>

### Useful Resources

* **[Group Work](https://github.com/ga-students/wdi-remote-gizmo/blob/master/projects/project_4/working_in_groups.md)**
* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_
* **[Building The Perfect Rails 5 API Only App](http://sourcey.com/building-the-prefect-rails-5-api-only-app/)**

## Where to go for help during project week

1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA
4. Submit a Github issue **on the class** Github account to receive help from an instructor.

## Formatting your GitHub Issue for the class repo to ask for help

*PUSH OFTEN! Your code on GitHub should be up to date. Submitting an issue and linking us to old, out-of-date code will hinder the process.*

1. **ALERT YOUR INSTRUCTOR**
- You must do @your_instructors_github_handle, inside the comment area of your issue, to notify your instructor that you have created an issue.

2. **LINKS**
- Links to your code and your live site.

3. **WHAT YOU ARE TRYING TO SOLVE:**
  - Write a detailed explanation of the feature or user story you're working on.

4. **DETAILED DESCRIPTION OF THE BUG/ERROR:**
  - A detailed description of the problem, the bug, and/or the error. This means: the full steps to reproduce, a link to the file on github, and the line number of where the relevant code is.
The error(s) returned, copy and pasted/typed out/screenshot, not paraphrased.
  - If there is other code in a different file that is also essential to the functioning of the code that currently works point us to that and explain the relationship.

5. **WHAT I'VE TRIED**
  - List everything you've done to solve the bug on your own in detail. list all resources you've looked up and tried to implement and provide links. Providing code if you have it surrounded by the md syntax to display nicely is very helpful.

6. **QUESTION**
  - After going through all this what is your questions specifically, more specifically than how can I make this work?
