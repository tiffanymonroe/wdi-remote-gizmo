# Ruby - Environment

## Lesson Objectives

1. Uninstall rvm
1. Install rbenv
1. View Possible Ruby Versions
1. Install Ruby 2.3.3
1. View Installed Versions of Ruby
1. View Currently Running Version of Ruby
1. Switch to a different Version of Ruby
1. Update Environment Variables
1. Install a gem
1. Run a Ruby File
1. Install Rails
1. Scaffold a CRUD app



## Uninstall rvm

If you have RVM already set up you will need to decide whether you want to continue using RVM or if you'd prefer to switch to rbenv.

To check if you have RVM installed simply run the command `rvm`. If it is not intalled you'll see the message `command not found: rvm`

To uninstall follow these instructions: [uninstall rvm](https://richonrails.com/articles/uninstalling-rvm)

RVM and RBENV do NOT work well together, so having both installed will cause _weirdness_

## Homebrew

1. If you haven't install Homebrew, do so by going to http://brew.sh/
	- copy and paste this into the terminal `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` and hit return
	
1. If brew is already installed (type `brew` and hit enter to see if it is)
1. Run `brew upgrade` to upgrade to the latest version of homebrew
1. Run `brew update` to update the list of installable programs by homebrew

## Install rbenv

0. Check if rbenv already installed: `rbenv`
1. If already exists, upgrade with `brew upgrade rbenv ruby-build`
 
Otherwise

1. Run `brew install rbenv ruby-build`

## View Possible Ruby Versions

1. Run `rbenv install --list`

## Install Ruby 2.3.1

1. Run `rbenv install 2.3.4` 

(might take a long time -- Terminal could just look like it's hanging)

## View Installed Versions of Ruby

1. Run `rbenv versions`

## View Currently Running Version of Ruby

1. Run `rbenv version`

## Switch RBENV to a different Version of Ruby

1. Run `rbenv global 2.3.4`
1. Run `rbenv rehash` to tell computer we've switch versions of ruby
1. Confirm switch with `rbenv versions` `* 2.3.4`

## Update Environment to use new Ruby

1. Run `echo 'eval "$(rbenv init -)"' >> ~/.bash_profile` (replace `.bash_profile` with `.zshrc` if you're using zsh)
1. Run `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile` (replace `.bash_profile` with `.zshrc` if you're using zsh)
1. Run `ruby -v` and confirm ruby version _now in use by the system_ is `2.3.4p301` or somesuch

## Install a gem

Gems are like NPM packages for Ruby, but they're installed globally, as opposed to multiple times for each application that you build

1. List gems with `gem list`
1. Run `gem install pry` to install a gem called pry.  It's a ruby REPL command
1. Run `rbenv rehash` to tell computer we've installed a new gem
1. List gems with `gem list` look for `pry`
1. Rub `pry` to start pry command
1. Inside pry type `2 + 2`
1. If that works, type quit

Note: Might need to update the gem manager with `gem update --system`

## Run a Ruby File

1. Touch first_app.rb and open it in atom
1. In the file type `puts "hello" * 5`
1. In terminal run `ruby first_app.rb`

## Install Rails

1. Run `gem install rails -v 5.0.1` to install the rails commands
2. `rbenv rehash`
3. `rails -v`

Note: if Rails already installed, might need to run `bundle update rails`

## Test Rails
3. Run `rails new blog` to create a new app
4. `cd blog`
5. Run `rails s` to start the server
6. Go to `http://localhost:3000`

## Scaffold a CRUD app

In a new tab (but same directory):

1. Run `rails generate scaffold Article title:string body:string`
2. Run `rails db:migrate`
3. `rails s`
4. Go to `http://localhost:3000/articles`


### Additional resources

[Installing rbenv, ruby, rails, and postgres](https://gorails.com/setup/osx/10.12-sierra)