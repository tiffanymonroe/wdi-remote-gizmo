![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Photo Site<br>
Type: Homework<br>
Duration: Two days <br>
Creator: Kristyn Bryan <br>
Course: WDIR-Gizmo<br>
Competencies: Full CRUD in Express with Mongoose - 2 Model<br>
Website credit goes to Kaylie Weable: https://picblog.herokuapp.com

---

# Photo Site

For the next two evenings, you will be creating a **two-model CRUD application** with Mongoose & MongoDB where users can post photos.

# Suggested breakdown

- Day 1: Full CRUD for one of the models.
- Day 2: Create 2nd model and connect it to the first one.

Use everything that you've been learning to accomplish the following:

## Models & Schemas

When creating a schema for each of your models (User & Photo) think about validations. What do you want to be required (maybe the password?) and what do you want to be unique (maybe the username?).

# User

## Users - Index

There should be a page that you can access from the home page to see all of the users (displaying just the username is enough, but feel free to get creative here).

**2-Model - Think about it:**
You don't need to worry about photos here - it's all about the users.

![all users](https://i.imgur.com/L34LDBm.png)

## Users - New

There should be a page to add a new user. It should take a username and password. For now, the password won't matter, but you may use it in the Hungry for More section.

**2-Model - Think about it:**
You don't need to worry about photos here - it's all about the users. But remember, a user has to be created before they can add a photo!

![create a user](https://i.imgur.com/PZsvffO.png)

## User - Show

There should be a show page for the user's photos. On this page, you should be able to see the user's username, all pictures that this particular user has posted, and their photo information.

There should also be a button to either **edit** or **delete** the user.

**2-Model - Think about it:**
Is the user’s id a part of the route? In which case there would be two params for one user’s particular photo. Would that look like `users/1/8` or like `photos/1/8`?

![user show page](https://i.imgur.com/eLTvBnI.png)

## User - Update & Delete
If you click on button to **edit** a user, it should take you to an edit form.

If you click on the **delete** button, the user should be deleted.

![user edit](https://i.imgur.com/sphNXrr.png)

**2-Model - Think about it:**
If we delete a user, we also need to delete their photos. Will that automatically happen when we delete the user?

# Photo

## Photo - Index

The home (index) page should show all of the pictures that have been submitted.

**2-Model - Think about it:**
You don't need to worry about users here - it's all about the photos.

![home page](https://i.imgur.com/fJE4RSG.png)

## Photo - New

There should be a page to add a new photo.

Think about how you're going to allow the user to enter (or how you can secretly grab) the following:

1. their username (required)
2. the url of a photo hosted online somewhere (you won't be storing any photos, just storing the URL) (required)
3. Information about the photo (not required for the user to fill out)

**2-Model - Think about it:**
We have to consider the users here. The user should be created before they can add a photo. Your users should be holding on to their photos. If someone tries to add a photo and their username isn't in your user database, don't let them add a picture. Maybe suggest that they create an account.

How are you going to grab the user to push this new photo into the user's photo array?

![add a photo](https://i.imgur.com/P5vm77x.png)

## Photo - Show

There should be a page to show the individual photo.

If there is a description that comes with the photo, this should be displayed as well.

This page should have a button that could take you to a page to **edit** or **delete** the photo.

**2-Model - Think about it:**
Showing one photo should be easy, but we have to think about the route. Does the route correspond to the user id or independent of the user model?

![photo show page](https://i.imgur.com/EbtzZJe.png)

## Photo - Update & Delete
If you click on button to **edit** a photo, it should take you to an edit form.

If you click on the **delete** button, the photo should be deleted.

**2-Model - Think about it:**
Update and delete photo seems straightforward just to update the main Photo model, but should it also reference the user and the user’s array of embedded photos?

![edit photo](https://i.imgur.com/1IiROmh.png)

# Data

## Seed Data

After you set up your models, consider making some seed data to help test your application.

# Commits
Make a commit after each section that you complete (or more frequently).

# Hungry for more?

## CSS Framework

- Use the CSS Framework Boostrap. Either use the CDN or download the minimized css file.

- Choose at least 3 things to style in your application with Bootstrap. You can style the rest of your page however you'd like.

<hr>
**Commit your work.** <br>
The commit message should read: <br>
"Bootstrap used in app and styled: LIST AT LEAST 3 THINGS THAT YOU STYLED".
<hr>

## Register a User

You've collected the user's password. Research how you might use this to verify a user's identity when they sign-in:

- [sessions](https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions)

- [express-sessions on npm](https://www.npmjs.com/package/express-sessions)

- [bcrypt](https://codahale.com/how-to-safely-store-a-password/)

- [bcrypt on npm](https://www.npmjs.com/package/bcrypt)
