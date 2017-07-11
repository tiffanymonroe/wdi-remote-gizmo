# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game


# Project Week

## Project due date
Your project is due on Monday, July 24th. You will present your project and show your code to classmates and instructors.

**How to Submit Your Project**<br>
Submit an issue (as you normally do for homework) with a link to **your** repo AND a link to your live site. You will be presenting your projects in front of the class. The title for your issue should be `Your Name - Project 1`

## Make a new repo
Before you begin, make a new github repo for your project. **Do not** begin your project within the class repo. For project 1, you will be using [GitHub Pages](https://pages.github.com/) - be sure to follow the directions on how to set up a GitHub Pages repo.

## Attendance
You are required to be present at 10:00 am EDT each day during the project. We will be taking attendance at these times and you will participate in a group standup.

## Standups
We will have student-run stand-ups each morning at 10:00 am EDT where you will answer the following questions:
- What did I work on yesterday
- What am I trying to get done today
- What is preventing me from getting this done.

This meeting should take no longer than 15 minutes.

If you have ideas on how you can help a fellow-student with work that they are stuck on, please follow-up with information AFTER the stand up.

## Meetings with instructors
_Your instructor will contact you to setup a meeting time_

**Tuesday, July 18**<br>
You will meet with your instructor (squad leader) for 15 minutes to get your game idea approved. Be sure to write out what features you will need to build in order to meet MVP

**Wednesday, July 19 - Friday, July 21**<br>
15 minute meetings to check in. We will do things like check your plan / wireframes, discuss your overall progress, and direct you to resources.


## Project Details

### &#x1F534; Mandatory to pass:
#### MVP - minimum viable product

Your game must meet these requirements:

1. Built with HTML, CSS, JavaScript and jQuery<br>
2. Hosted on github pages<br>
3. Commits to github every day - going back to the first day<br>
4. Game must have:<br>

  -  Multiple rounds to play<br>
    - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost
      - Example: Blackjack: a player takes turns playing a hand versus a computer - the player's hand can either win, lose or tie the dealer. If the player has enough money in their bankroll they can keep playing
      - Example: Connect Four: two (non-computer) players take turns adding chips to the board. The game will check if a player won or if the board is full and there are no more plays possible<br><br>
    - Each round must check for a win, loss, tie, no further plays or to continue to another round
      - Example: Blackjack - a player must be able to win several rounds and increase their bankroll
      - Example: Connect four - a player gets four chips in a row (vertically or horizontally)- one person wins, one loses, there are no further plays in this case<br><br>
  2.  A win state - a way for the player to win the game (high score can be considered a win state)<br><br>
  3.  A lose state - a way for the player to lose the game<br>
      - Example: Blackjack - a player must be able to lose all of their money with losing hands and cannot play if their bankroll is at 0
      - Example: Connect Four - the other player has won or there are no possible plays left<br><br>
   4.  A way to keep playing if the game is not over<br><br>
   5.  Must be a two player game (either against the computer or against another player)<br>
     - Example: Blackjack: A player plays against the dealer. The dealer is the computer
     - Example: Connect Four: Two players pass the game between themselves to take turns


### &#x1F535; Not mandatory:
#### Recommended features

- A way to reset the board and play again
- Additionally, you should use CSS to give your game a personal and fun style

###  Advanced features

Work with your instructor to determine your stretch goals

# Deliverables

By the time the project is over, we will expect the following from you:

* A **working game, that meets MVP, built by you**, hosted on the internet
* A **link to your hosted working app**
* A **git repository hosted on Github**  NOT inside your class repository. Frequent commits dating back to the very beginning of the project
* **A `readme.md file** with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

Most importantly a **technical demonstration** of your app which:

* Is 5 minutes in length
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make

## Expectations

### You

As a student you should be doing the following things:

- **Code Planning**
  Plan out your project before you begin. Pseudo-code your project thoroughly! What data structures will you need (objects, arrays)? How will you organize your code? Pseudo-code out any thorny issues you might already anticipate.

- **User Experience planning** What **layout** will your project have on the page (wireframes)? Check out `https://wireframe.cc/` for an in-browser wireframer, or just make a sketch and upload the image somewhere. Write *user stories* from the perspective of the user: "As a user I want to be able to click on x and have y happen". Sign up for Trello `https://trello.com/`, a handy to-do list style project planner.

- **Version Control**  
  Use **git** and **github** for version control, and make frequent incremental commits to prevent large scale implosions. Make a fresh repo outside the class repo for your project.

- **Hosting**  
  Host your application on **githubpages**, or something similar so the class and instructors can use it. Your game must be in its own repo (not in the class repo) in order to have it hosted.

### Us

Since your instructors will be assessing your work, they will look for the following things:

- **Project Workflow**  
Did you you plan your project before you started? Did you use source control as expected for the phase of the program you’re in (detailed above)?

- **Technical Requirements**  
Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

### Suggested Ways to Get Started

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the game (what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems

* **Work through the lessons in class for help and inspiration!** Think about adding relevant code to your game each day - this is a multi-day project so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
<br>
<hr>

## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA
4. Submit a Github issue **on the class Github** repo to receive help from an instructor. Note: You must flag your instructor by including their github handle (ex: @your_instructors_github_handle), inside the comment area of your issue, to notify your instructor that you have created an issue.

## Formatting your GitHub Issue to ask for help

*PUSH OFTEN! Your code on GitHub should be up to date. Submitting an issue and linking us to old, out-of-date code will hinder the process.*

1. **WHAT YOU ARE TRYING TO SOLVE:**
  - Write a detailed explanation of the feature or user story you're working on.

2. **DETAILED DESCRIPTION OF THE BUG/ERROR:**
  - A detailed description of the problem, the bug, and/or the error. This means: the full steps to reproduce, a link to the file on github, and the line number of where the relevant code is.
The error(s) returned, copy and pasted/typed out/screenshot, not paraphrased.
  - If there is other code in a different file that is also essential to the functioning of the code that currently works point us to that and explain the relationship.

3. **WHAT I'VE TRIED**
  - List everything you've done to solve the bug on your own in detail. list all resources you've looked up and tried to implement and provide links. Providing code if you have it surrounded by the md syntax to display nicely is very helpful.

4. **QUESTION**
  - After going through all this what is your questions specifically, more specifically than how can I make this work?

5. **LINKS**
  - provide links to your project and the link to the website (if your site is live).

## Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_
* **[Trello](trello.com)** _(for organizing your project)_
