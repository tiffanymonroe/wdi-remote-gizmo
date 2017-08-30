![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

<hr>
Title: Rails New<br>
Type: Lesson<br>
Creator: Thom Page<br>
Duration: 1.5 hr<br>
Topics: Migrations and ActiveRecord<br>
<hr>

# RAILS NEW

### Lesson Objectives
_After this lesson, students will be able to:_

- Initialize a Rails project using the `--api` flag
- Use a postgresql db with Rails
- Run a migration to create a table
- Run migrations to create and rename columns
- Make models and query them with ActiveRecord

<br>
<hr>
11:10

## About Rails

Rails is a server environment just like Node. The big difference is that Rails favors **convention** over **configuration**.

Rails can get things up and running quickly and effectively -- as long you do it _exactly the way Rails tell you to_. For example

* Rails wants you to name your models and controllers a certain way, otherwise it won't work.
* Rails requires you to run a small program called a migration in order to change any database fields.

Node, by comparison is a blank slate where all things are possible. The tradeoff, with Rails, is ease of use for large-scale applications. Whether this is a straightjacket or a wonderful gift is up to you as a developer.

<br>
<hr>

## How we will be using Rails

### Rails 5 API

Our Rails server will have the same purpose as our Node/Express server from Unit 3. It's going to serve only JSON.

Rails JSON APIs are used as powerful backends for Mobile apps and regular Desktop apps.

Rails 5:
> verify that you're running Rails 5 with the command: `rails -v`

New in Rails 5 is the `--api` flag that we will be using.

This flag slims Rails down considerably, removing files, folders, and middleware, etc. that is not needed. The `--api` flag makes Rails much more lightweight.


<br>
<hr>
11:15
#  &#x2600; BUILD A NEW RAILS APP

To start a new rails app, you **do not** have to make a directory. Navigate to `student_examples`.


We are going to build an app called

###`intro_app_api`

The command to build our rails json api with postgres is the following:

```
rails new intro_app_api --api -d postgresql
```

![](https://i.imgur.com/hSALCTa.png)




What's all this stuff?

* `rails new` will make a new project directory and populate it with folders and files

* The name of our app is `intro_app_api`. It's important to name it with `_api` to differentiate it from other apps later.

* The `--api` flag is new in Rails 5 and slims down the app just to serve json.

* With the `-d` flag we specify which type of database to use. In our case, we use `postgresql`

<br>

Terminal feedback will look something like this:

![](https://i.imgur.com/vliTe0q.png) Etc...

<br>
<hr>
11:25

## Files and Folders

`cd intro_app_api`

`atom .`

![](https://i.imgur.com/sA1UmdB.png)

There are many files and folders that Rails makes for us. This is in stark contrast to Express that give us . . . a package.json.

We don't need to look inside these nooks and crannies. The idea is that Rails will do a bunch of stuff for us inside of these 'black boxes'. This is in contrast to Express where we see everything, including all the middleware config.

Rails gives you all this stuff and you just have to play along with it.

Almost everything you will ever do will be in the `app` folder.

You'll do a bit in the `db` folder, in the `config` folder, and the `Gemfile`.

### For today we're focused only on two directories: `app/models` and `db`

&#x1F535; **Here's what we are going to do today:**

- Step One: make a database with table and columns
- Step Two: make a model and interact with it

This is all we will do. There are very specific processes for doing these things. Once these foundations are built, we can begin to free ourselves up a bit.

<br>
<hr>

# &#x26A0; STEP ONE
#### &#x1F449;  MAKING A DATABASE WITH A TABLE AND COLUMNS

<br>
<hr>
11:30

# &#x1F449; CREATE DATABASE

`rails db:create` creates your postgres database based on the name of your Rails app.

![](https://i.imgur.com/DIlpKJY.png)

![](https://i.imgur.com/nhUDDLk.png)

We can check that the database was created by typing

```
rails dbconsole
```

This will open up our postgres CLI.

Close it again with `\q`.

11:33
# &#x1F449; MAKE COLUMNS FOR THE DATABASE

### MIGRATIONS

We create our database tables and give them columns through **Migrations**.

In Mongo our table was a collection. Its 'columns' were the keys we used in our schema.

In SQL this is a **table** that has **columns**.

We are going to make yet another ToDos thingy with very simple data.


&#x1F535; Open the `db` folder. We are going to make some changes to it. For the most part we will not interact with it directly, but rather will do so by generating and running **migrations**.

> Migrations are a convenient way for you to alter your database in a structured and organized manner. 

> Migrations, using Ruby, are database-language independent. 

First, create a migration in Terminal. This migration will allow us to make a **table** in our database:

```
rails generate migration CreateTodos

=> CREATED db/migrate/20161010152405_create_todos.rb
```

> `generate` can be shortened to `g`
> 
> `Create` is a helper that will set up boilerplate for creating a table

* The migration generated a `migrate` folder in the `db` folder.

* Inside it is the migration file we created.

* `db/migrate/20161010152405_create_todos.rb`

* The migration file we just made will allow us to create a table with the columns we want.

The numbers are just a timestamp. All migration files are kept here in sequence so that we have a permanent record of all alterations to our database.

[Why do we use migrations?](http://guides.rubyonrails.org/v3.2.8/migrations.html)

11:38

### GIVE THE MIGRATION SOME DATA

In the migration file: Use Ruby to specify what the columns and datatypes are for our table:

```ruby
class CreateTodos < ActiveRecord::Migration
  def change
     create_table :todos do |t|
        t.string :title
        t.boolean :completed
     end
  end
end
```

The column names are `symbols`

![](https://i.imgur.com/CJQr6At.png)

11:42
# &#x1F449;  Run the migration

We have created the migration, and we have told it what we want it to do. All that's left is to execute it.

When we run the migration it will create/alter our database.

Run the migration with `rails db:migrate`.

```
== 20150710152405 CreateTodosTable: migrating ===============================
== 20150710152405 CreateTodosTable: migrated (0.0000s) ======================
```

![](https://i.imgur.com/wz2VK6D.png)

11:43
### schema.rb

Running the migration screated a `schema.rb` file. This is the schema for all your data.

![](https://i.imgur.com/PTqoX86.png)

#### DO NOT TOUCH THE SCHEMA.RB

*Not to be touched*. *DO NOT MODIFY IT*

Same goes for your migrations. Once you've run a migration *DO NOT TOUCH IT*

11:44
### Check the database itself:

```
$ rails dbconsole
```

Opens up a psql shell

See the columns created for the todos table:

```
SELECT * FROM todos;
```

![](https://i.imgur.com/pn9378E.png)

Quit with `\q`.

Now that our database has been constructed with tables and columns for the tables, let's get some data in there.

### &#x2714; Step 1 complete: making a database with a table and columns

11:45
<br>
<hr>

# &#x2600; BLOG APP

&#x1F535; **Activity (20 mins)**

In `student_examples` for today (NOT inside your Rails project folder)

Perform the following commands, and look back over the lesson to double-check that you are writing the correct syntax. If you get it wrong, you'll probably have to delete the app and start over. 

* Make a new Rails app called `blog_app_api`
* Remember the `--api` flag. If you forget, **delete this app and start over**
* Remember the `-d postgresql`. If you forget, **delete this app and start over**
* Create the db
* Generate a migration for creating a table called **posts**. `rails g migration CreatePosts`
* In the migration file, a post table should have columns for title, author, and content (all strings)
* Run the migration.
* Check the schema, and check the database:

`schema.rb` correct result:

![](https://i.imgur.com/IIJDqKn.png)

In `rails dbconsole`

`SELECT * FROM posts;`

Correct result:

![](https://i.imgur.com/jl6Di19.png)

<br>
<hr>

12:05 - 5 min break , back at 12:10

<br>
<hr>

12:10

# &#x26A0; STEP TWO
#### &#x1F449; MAKING A MODEL AND INTERACTING WITH IT

<br>
<hr>

# &#x1F449; CREATE MODEL

Back to our `intro_app_api` where we are making the **Todos**:

In order to perform database queries using Ruby, we need to create a Todo model in `app/models`

Make a file called `todo.rb` in `app/models`

`todo.rb` **MUST BE LOWERCASE AND SINGULAR**. Rails wants to help you with its **conventions**.

In the file, tell our model to inherit from ApplicationRecord:

`Todo`, the class name, **MUST BE CAPITALIZED AND SINGULAR**. Keep it **conventional**. A rule of thumb is that model names are singular.

```ruby
class Todo < ApplicationRecord
end
```

![](https://i.imgur.com/BbOk24s.png)

All this does for now is wire up our app so that we use Active Record on our Todo model to interface with our database.

12:15

# &#x1F449; ACTIVE RECORD

Active Record, as an ORM Framework, gives us several mechanisms, the most important being the ability to:

- represent models and their data
- represent associations between these models
- represent inheritance hierarchies through related models
- validate models before they get persisted to the database
- perform database operations in an object-oriented fashion
- Active Record is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic.

It's like Mongoose. With Mongoose, we did not have to write raw Mongo queries, and instead could use Mongoose's helper methods. With ActiveRecord, we do not have to write raw SQL queries, and can instead write Ruby to query the database.

> ActiveRecord is to SQL as Mongoose is to Mongo

We can open up a console and just write ActiveRecord queries directly (we couldn't do this with Mongoose).

12:22

## Rails console

Open Rails console

```
rails console
```

OR

```
rails c
```

![](https://i.imgur.com/4uRBFpl.png)

* We can see that our Todos model exists and that we can perform ActiveRecord queries on it, and we can see the SQL statement used to query the database:

```ruby
Todo.all
```

![](https://i.imgur.com/s6MbslU.png)

There are no Todos yet, but the query works!

```ruby
Todo.count
```

![](https://i.imgur.com/Lp6mWi5.png)

Zero todos.

### Create and Save new Todos

- `.new` (creates a new ActiveRecord object template, but doesn't save it to the DB)
- `.save` (saves a new ActiveRecord object template to the database)
- `.create` (calls `.new` + `.save`)


```ruby
todo = Todo.new(title: "First todo", completed: true)
todo.save
```

```ruby
Todo.create(title: "Something", completed: false)
```

![](https://i.imgur.com/lZOqs5V.png)

12:26

### Query Todos

- `.find` (finds by id)

```ruby
Todo.find(1)
```

![](https://i.imgur.com/MjTMsad.png)

- `.where` (takes a key value pairs as arguments to search by)

```ruby
Todo.where(title: "Something", completed: false)
```

![](https://i.imgur.com/QkiKLyK.png)


### Update Todos

- `.update` (takes key value pairs as arguments, with the fields to update)

```ruby
todo = Todo.find(1)
todo.update(completed: true)
```

![](https://i.imgur.com/B7A9nlZ.png)

Or chain the commands together:

```ruby
Todo.find(1).update(completed: true)
```

12:30

### Delete Todos

- `.destroy` can either be called on an ActiveRecord object or takes the id of an ActiveRecord object

```ruby
Todo.destroy(1)
```

![](https://i.imgur.com/E83FDGb.png)

OR

```ruby
Todo.find(1).destroy
```

We will be using these Active Record queries within Rails.

12:31

&#x1F535; **Activity (9 mins)**

Using rails console `rails c`:

1. Create a new Todo
2. Query Todo to see how many there are in the db
3. Create another Todo
4. Update the second Todo
5. Query Todo to see all of them
5. Delete the first Todo

Type `exit` to leave Rails Console

12:40

### &#x2714; Step Two complete: making a model and interacting with it

<br>
<hr>

# REVIEW

1. New Rails project ✔
2. Create the database ✔
3. Create a migration to make a table ✔
4. Insert column fields to the migration file ✔
5. Run the migration -- table and schema made ✔
6. Create a model ✔
7. Test the model with ActiveRecord ✔



<br>
<hr>

## Info

The `--api` flag from the docs:

![](https://i.imgur.com/BzZzZM4.png)

Read more about using Rails as an API [here](http://edgeguides.rubyonrails.org/api_app.html)
