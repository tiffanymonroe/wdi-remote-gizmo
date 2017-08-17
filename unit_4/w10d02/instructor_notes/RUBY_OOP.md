![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

<hr>
Title: Ruby OOP <br>
Type: Lesson<br>
Duration: Afternoon <br>
Creator: Thom Page<br>
Modified by: Kristyn Bryan<br>
Topics: Ruby Classes and Inheritance<br>
<hr>

# Ruby OOP

### Lesson Objectives

- Write a Ruby Class
- Instantiate a Ruby Class
- Write a Ruby Class with an Initialize method
- Write a Ruby Class that Inherits from another Class

<br>
<hr>

5 min
## SETUP

* In `student_examples` make a file `ruby_oop.rb`
* Write a message and print it to the console.
* Run the file with `pry ruby_oop.rb` OR `ruby ruby_oop.rb`

<br>
<hr>

## RUBY CLASS

What is it? A Class is very much like a constructor function in Javascript. You use a Class as a _template_ for creating objects.

Why would we want to learn about Ruby Classes?

**1. Classes are fundamental to how Rails works**
- You'll see Classes wherever you go in Rails

**2. Ruby is a fantastic object-oriented language**


Let's explore!


## Constructor Function

What were the key components of a constructor function in javascript?

- capitalized name
- saving properties passed as arguments
- methods
- using the `new` keyword to instantiate an instance of that object

```
// JavaScript
var Person = function(name, age) {
  this.name = name;
  this.age = age;

  this.howOld = function() {
    console.log(`Im ${this.age} old.`)
  }
  this.whatsYourName = function() {
    console.log(`My name is ${this.name}.`)
  }
}
```
```
var person1 = new Person("Suzie", 50)
```

<br>
<hr>

## CREATE A CLASS

```
# Ruby

class Person
end
```

That's it.

#### We made an instance of the Object class, called Person

**Let's instantiate the Person class**

Make a new Person

```
person1 = Person.new
```

> When thinking in objects, we consider this _class_ kind of like a blueprint for all other Persons (or objects) we make, and an _instance_ is a clone of that class.

Let's see how we'd give our Person some _attributes_. In Ruby, we don't just give them out in free-floating variables, rather, we always use a method.

Let's start by hard-coding some information about this person into the class.
```
class Person

  def name
    "Elizabeth"
  end

  def age
    99
  end

end
```

Instantiate a Person:

```
person1 = Person.new
person1.name => "Elizabeth"
person1.age => 99
```

We call those(`name` and `age` on `person1`) "getters" or "getter methods", because they're getting information from inside our object.

## "Getter" and "Setter" methods

If we want to **get** a value of an attribute, we can use a getter method.

Getter:

```
def occupation
	@occupation
end
```

If we want to **set** a value of an attribute, we can use a setter method.

Setter:
```
def occupation=(occupation)
	@occupation = occupation
end
```

What are these `@` signs?

<br>
<hr>

## Instance variables

In Ruby, scope is limited to a particular method. By putting an `@` at the beginning of a variable, we are giving it a kind of global scope so that it is available to other methods.

However, the scope is limited just to the _instance_ of the class (which is why it's called an instance variable).


## "Getter" and "Setter" shortcuts

Ruby comes with a shortcut to using getters and setters faster:

```
class Person
  attr_accessor :name, :age, :occupation
end
```

Using `attr_accessor` is the same thing as writing out:
```ruby
class Person
  def occupation
  	@occupation
  end

  def occupation=(occupation)
  	@occupation = occupation
  end
end
```


`attr_accessor` gives you getters and setters for each of the attributes that you inclide in your list.

<br>
<hr>


## The Initialize method
#### with instance variables


So far the info in our Object is hardcoded. How do you set values on instantiation? You use a specific method called `initialize`.

```ruby
class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

end
```
```
new_person = Person.new('Marjory', 1000)
```

The `initialize` method is called immediately right after `.new` is called on a class.


> Remember: All the `@` does is expand the scope of the variables so that they are available within all of the methods. (Without the `@`, the variables are only available within the defining method).

> Here, they're defined inside of Person so they can be seen inside an `instance` of Person but not outside.

&#x1F535; **Activity (5 min)**

* Make a new class called User
* Make it so the user can **get** and **set** values for username, password, and email
* Make so the User can be initialized with specific values
* Create 2 users with details of your choosing.

<hr>

## Adding methods to your class

Just like a constructor function in JavaScripts, Ruby's class objects can hold methods.

```ruby
class Person
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def message
    puts "hello, #{@name}"
  end
end
```
Create a person:

```ruby
jamie = Person.new("Jamie", 200)
```
The person has access to the method:

```ruby
jamie.message
#=> hello, Jamie
```

&#x1F535; **Activity (5 min)**

* Make a method that will print out the user's name and age
* Make a method that will 'scramble' the password
* Make a method that will set 'default' values on the user's attributes when run (overwrites existing values).

<br>
<hr>

## Class Constants

You can create constant variables in your class.

Uppercased letters are commonly used for constant variable names in Ruby.

```ruby
FAVORITE_COLORS = ["red", "white", "blue", "yellow"]
```

We define this constant outside of our initialize, but we can access these in our instance variables.

```ruby
class Person
  attr_accessor :name, :age

  FAVORITE_COLORS = ["red", "white", "blue", "yellow"]

  def initialize(name, age)
    @name = name
    @age = age
    @fave_color = FAVORITE_COLORS.sample
  end

  def message
    puts "hello, #{@name}"
  end
end
```

```ruby
p thom = Person.new("Thom", 70)

p thom
```

&#x1F535; **Activity (5 min)**

* Make a constant variable called `FAVORITE_FOODS` that holds an array `["cheese", "oranges", "strawberries"]`
* Update your initialize method to include a variable called `food` that takes the `FAVORITE_FOODS` array plus any food that is when a person is created. Make sure to update the `attr_accessor` list to include `food`.


# Inheritance

What is inheritance?

Inheritance is a pattern we can implement where one class inherits behavior from another class.

In ruby each class can only have one parent, but have many children.

Call `.ancestors` on any object in ruby.

```
String.ancestors
Array.ancestors
Symbol.ancestors
```

As we can see inheritance is not just something useful to know it's also occurring all the time in the Ruby language itself.

> You'll see the inheritance symbol `<` in Rails quite a bit.

> In Rails we'll build classes that inherit behavior of a controller, a model, a router.


#### EXAMPLE

```
class Country
  def message
    "Greetings Aliens, I am a country of Earth"
  end
end

class USA < Country
end

class NZ < Country
end

country1 = Country.new

usa = USA.new
p usa.message


nz = NZ.new
p nz.message
```

## ACTIVITIES

&#x1F535; **build a Pet class**

 - initialized with
   rescued, gender, disposition

 - a method called sleep on the couch that logs "I am sleepin' on the couch"

 - method called beg for food that logs "I am beggin' for food"

 - add attr_accessor to all attributes

&#x1F535; **build a Cat class**

  - should be initialized with:
    `breed` as a string
    `snark` as a boolean

  - method `meoww` => logs "meoww"

  - add attr_accessor to all attributes

&#x1F535; **build a Dog class**

  - should be initialized with:
    `breed` as a string
    `happy` always true

  method `bark` => logs "woof woof"

  - add attr_accessor to all attributes


<br>
<hr>

### Cat and Dog will Inherit from Pet

Add: `< Pet` to the Cat and Dog class:

```ruby
class Cat < Pet
  [...]
end

class Dog < Pet
  [...]
end

```

Initialize a new Cat and a new Dog class.

Ask for the ancestors of each instance `.ancestors`, you'll see that each inherits from Pet. Cat & Dog  have all the state and behavior that belongs to the pet class as well as their own.


<br>
<hr>
License
<hr>
