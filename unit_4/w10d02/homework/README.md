# crispy-disco
Happy Tails Reboot

# Happy Tails

![HAPPY TAILS](http://www.htpet.net/i/Logo.jpg)

#### Prompt

> You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals.
Specification:



## Object Specs:

### Animal:

- An animal should have a name.
- An animal should have a species.
- An animal can have multiple toys, but doesn't start with any.
- An animal should have a method to 'get' a toy


### Client:

- A client should have a name.
- A client should have a city of residence.
- A client can have multiple pets (animals), but it doesn't start with any.


### Shelter:

- A shelter should have a name
- A shelter can have multiple animals, but it doesn't start with any.
- A shelter can have multiple clients, but it doesn't start with any.
- A shelter should be able to display all of its clients.
- A shelter should be able to display all of its animals.
- A shelter should be able to facilitate an adoption (one of its clients adopting one of the animals from shelter)
- A shelter should be able to facilitate a return (one of its clients returning his/her pet to the shelter)

## Steps :

### Commit 0

- `mkdir happy_tails` in the hw folder for tonight
- `cd happy_tails`
- `touch animal.rb client.rb shelter.rb main.rb `

**Reminder:**
** To run a file in Terminal:**

```
ruby client.rb
```

#### Video review: Classes
Watch the short video [here](https://www.youtube.com/watch?v=r6wVziWXYWI). 6 mins 23 seconds.

#### Video review: Instance Methods
Watch the short video here [here](https://www.youtube.com/watch?v=c2a2bZf3LH4). 8 mins 22 seconds.


### Commit 1
- Inside the `animal.rb` file, define a class `Animal`, according to the specs above
- The name and species should be defined on initialization of a new instance of the class (ie. user inputs the name and species on instantiation of a new object)
- Test that you can make a new animal and give it a name and species
- Test that you can access the name of the animal
- Test that you can give the animal at least one toy (a toy should just be a string like 'bone')
- Leave your test code in the file, but comment it out

### Commit 2
- Inside the `client.rb` file, define a class `Client`, according to the specs above (user should be able to input name and city on instantiation of a new object)
- Test your code, as you did with the Animal class
- Leave your test code in the file, but comment it out

### Commit 3
- Inside the `shelter.rb` file, define a class `Shelter`, according to the specs above (user should be able to input name of the shelter on instantiation of a new object)
- You will not be able to test all of your methods yet: ie. adoption and return. For those methods, you can define them and write pseudocode of what they should do (see below).
- Test the code that you can, and comment out your tests


**Example:**
```
def adopt animal
 # comment out some pseudocode
 # about what this method should do
 # build out this functionality when you get to the correct commit
end
```

- Note: as you build out this program you'll likely want to access certain properties, such as the name of an animal or client. You may also need to create new functionality. As those prompts come up, be sure to come back to these files and update/upgrade them as needed.





### Commit 4

-  `main.rb` will be the main program loop
- Require all your files into `main.rb`. This will allow you to use the classes you defined in the other files. Use `require_relative`

**Example:**
 ```
 require_relative "shelter"
```
- When executed, the `main.rb` program should create a new shelter for you.

**Example:**

```
 happy_tails = Shelter.new ("Happy Tails")
```

- Write a program loop that has the following functionality (the program loop does not need to be a class)
- It should also display a menu of options for the user to choose from:
- Create an animal
- Create a client
- Quit

**Example:**
**Note: Feel free to write this however you want, this is just an example to get yourself started**

```
  puts "Chose one of the following options"
  puts "type q to quit"
  choice = gets
  choice.chomp!
  if choice == "q"
    puts "Thanks for visiting! Come back soon!"
    exit
 else
   puts "Oops! Invalid Entry, please try again "
  end
```


- When creating an animal or client, the user is prompted for information like names, species etc. Newly created animals and clients should be added to the shelter.
- HINT: Allow the user to _loop_ back to the menu options over and over again, _until_ the user choses to quit


### Commit 5
- within `main.rb` write code to create 3 new clients and 3 new animals. This should happen on file load, before the prompts, so you don't have to repopulate your shelter every time you restart your file


### Commit 6

- Add options to the menu so that a user can:
  - Display all animals
  - Display all clients

### Commit 7

  - Add options to the menu so that an animal that is in the shelter can be given a toy

### Commit 8

- Add options to the menu so that a user can:
	- Facilitate client adoption of an animal. This means the client now has the animal and the animal should no longer be a part of the shelter.
	- Facilitate client putting an animal up for adoption. This means the client no longer has the animal and it should be added to the shelter.

## Hungry For More : Choose Any

### Commit 9


#### 3. Inheritance
Watch the short video [here](https://www.youtube.com/watch?v=BJWcH8Pnafw). 6 mins 56 seconds.

- Use inheritance to define a puppy classes that inherits from Animal.
- Add one more property to the puppy class : `potty_trained`, set the default value to false
- Create methods on shelter to display all animals or just puppies.
- Add further options to the menu so that a user can:
	- Display all puppies


### Commit 10

- Limit the number of animals a client can adopt to 2 per client. If they try to adopt more than that, yell at them.
- If you haven't already, refactor your code to have `attr_reader`'s and `attr_writer`'s. HINT : `attr_accessor` is both of them in one
- Refactor your code to make sure it is DRY (Don't Repeat Yourself) and all your methods are in the appropriate classes.


### Commit 11

- Add a new class that inherits from your client class called CatLady. A cat lady only takes cats, and takes as many cats as there is space in a computer's memory.

### Commit 12
- Install and require the gem `colorize`
- check out the docs [here](https://github.com/fazibear/colorize)
- add colors and font styles to your app to improve the UI/UX

### Commit 13

- Create a seeds.rb file
- seed.rb initializes a shelter as well as a few animals and clients so you have some data to start with when you run your program.
-  you can copy paste your code from commit 3, and add some more clients and animals, if you like
- require your seed file in your `main.rb` file. Your seed file will instantiate all your objects. So you should no longer have `Client.new()` or `Shelter.new()` anywhere in your `main.rb` file. All object instantiations should be in `seed.rb`
- Alter seed.rb to create kittens or puppies

### Commit 14

#### Video review: Class Methods and 'Self'
Watch the short video [here](https://www.youtube.com/watch?v=0r93ZhzpeqI). 8 mins 28 seconds.

- Experiment with `self`

### Commit 15
- Finish hangman!
