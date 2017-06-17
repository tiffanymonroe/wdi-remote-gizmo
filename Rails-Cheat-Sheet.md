# Rails commands cheat sheet


## Rails ENV commands
$`rails new <app_name_api> --api -d postgresql` to create a new rails api w/ pg

$`rails -T` to show a list of all the various rails commands

$`rails server` to start the rails server (shorthand: $`rails s`)

$`rails console` to start a REPL that let's you interact with the database using Active Record (shorthand: $`rails c`)

## Rails Migration/Database Commands:

$`rails db:create` creates you pg database based on the name of your Rails app

$`rails generate migration <VerbNoun>`, creates a migration, a script that writes sql to add, update, or remove tables from your DB (can shorten `generate` to `g`

$`rails db:migrate` runs the migrations files you've generated to add, update or remove tables from your DB

$`rails db:rollback` you only get one do-over, this command will undo your most recent migration.

$`rails db:drop` drops all data from the database, you'll need to run `rails db:create` after this.

$`rails db:seed`  run the code in the seed file, used to populate your database

## Rails Routing commands:

$`rails routes` lists all available routes in a tabular format