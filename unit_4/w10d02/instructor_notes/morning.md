
# Objects

Abstraction

> A Structure is one of the 5 data types in programming. A structure is used to represent information about something more complicated than a single number, character, or boolean can do (and more complicated than an array of the above data types can do). For example, a Student can be defined by his or her name, gpa, age, uid, etc. Each of these pieces of information should be labeled with an easily understood descriptive title, and then combined to form a whole (the structure).

> We use the "DOT" notation to access a structure stored in a variable, thus, car.max_speed, car.number_of_doors, car.ac, are all valid references to a structure.

Abstraction

> A template by which Objects can be constructed
> 
> A blueprint (or recipe) of how to build an object and information about what defines an object.

<br>

# Everything is an object

[Not quite](http://rubylearning.com/blog/2010/09/27/almost-everything-is-an-object-and-everything-is-almost-an-object/)

[What is an object?](https://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/39-ruby-s-object-model/lessons/127-object-identity-what-is-an-object)

Lets do a simple test. Let's look at a string. If a string is just text, how come we can use methods on it? When programming in Ruby, a string looks like text but is really an object. 

A giveaway that something is an object is if it takes a method.

```ruby
"Hello World".upcase
```

It looks suspiciously like "Hello World" is an object, ie. it exhibits behavior such as `upcase`.

An even bigger giveaway is if that object belongs to a class. 

```ruby
"Hello World".class
```
> String

Not only are we using a method but we are also looking at a class! Oh yeah, this guy's an object for sure.

Even a **block** is an object. An anymous block is called a lambda, and it belongs to the Proc class:

```ruby
p lambda { |n| p n }.class
```

> `#<Proc:0x007fcacc1474b0@objects.rb:1 (lambda)>`

[Proc docs](https://ruby-doc.org/core-2.4.1/Proc.html)

## Classes

A **class** is a template for creating objects.

The string "Hello World" is an object that is an _instance_ of the String class. Just like the string "Cherish the cabin" is an object that is an _instance_ of the String class. They are both different objects, but they are both strings.

What if we make up our own method for every instance of the String class?

```ruby
class String

  def zumpledeboop
    self.upcase.reverse
  end
	
end

p "Hello World".class
p "Hello World".zumpledeboop
p "Cherish the cabin".zumbledeboop
```

> "DLROW OLLEH"

[Self in Ruby](https://hackhands.com/three-golden-rules-understand-self-ruby/)

If you've ever wondered how a string can take a method, it's because a string is secretly an **object** with **methods**.

An **object** is an _instance_ of a **class**.

From one class, you can make myriad objects all with the same methods.

11:20

# Make our own objects

* create a file `objects.rb` in `student_examples`

We can make our _own_ objects. They will be very similar to the JavaScript ones we are used to, the ones that have properties and methods that can be accessed and altered with **dot notation**.

Let's make a template for our objects. The template is called a **class**. Remember how in JavaScript we used classes to create objects?

This is the same thing, but in Ruby.

```ruby
class World

  def name
    "Panthalassa"
  end

end


world1 = World.new

p world1
p world1.name
p world1.class
```

> `#<World:0x007ff2f90277b0>`
> 
> `"Panthalassa"`
> 
> `World`

The first thing we see is the object itself. It looks strange, but that's OK.

The next thing is the name of that world.

Last, we see that `world1` is an object created by the **World** class.

11:33

# Make it so we can update properties

```ruby
world1.name = "Booger-town"
```

Does not work, instead we have to make a **setter method** in the class.

First, abstract `name` into an **instance variable** that will have scope over all methods in the class.

We can make an **initialize** method in our class that will automatically run when we instantiate an object.

```ruby
class World

  def initialize
    @name = "Panthalassa"
  end

  def name
    @name
  end

end

world1 = World.new
p world1.name
```

The **initialize** method is just like the **constructor** method we used in JavaScript classes.

Then, make a setter method with special
`something=input` syntax:

```ruby
class World

  def initialize
    @name = "Panthalassa"
  end

  def name
    @name
  end
	
  def name=value
    @name = value
  end

end


world1 = World.new
world1.name = "Booger-town"
p world1.name
```

We are getting closer to making objects that behave like JS objects.

11:52

# Behavior

Let's make it so the worlds we make will do something.

Let's make it so a world can populate itself with people.

**Object Specs:**

* A world can have many people, but starts with none
	* This means initialize the object with an empty array to hold the people in.

* World can populate itself with one person at a time. A person has properties.
	* Make a method `populate` that will push a hash into the people array.

```ruby
class World

  def initialize
    @name = "Panthalassa"
    @people = []
  end

  def name
    @name
  end

  def people
    @people
  end

  def name=value
    @name = value
  end

  def populate
    @people << { name: "Lumpy", age: 20 }
  end

end


world1 = World.new

p world1.people

world1.populate
world1.populate
world1.populate

p world1.people
```

> [{:name=>"Lumpy", :age=>20}, {:name=>"Lumpy", :age=>20}, {:name=>"Lumpy", :age=>20}]

12:05

# Provide data to new object

All the worlds we make will start out the same. What if we want to start off with different worlds?

We can provide input to the **initialize** method:

```ruby
  def initialize name
    @name = name
    @people = []
  end
```

```
world1 = World.new "Panthalassa"
world2 = World.new "Booger-town"
world3 = World.new "Spiky hair ville"
world4 = World.new "Frosted tips ville"
```

```
p world1.name
p world2.name
p world3.name
p world4.name
```


>"Panthalassa"
"Booger-town"
"Spiky hair ville"
"Frosted tips ville"

Add in `shape`. Add getters and setters.

```ruby
  def initialize name, shape
    @shape = shape
    @name = name
    @people = []
  end
```

12:13

# Provide data to object method

```ruby
  def populate name, age
    @people << { name: name, age: age }
  end
```

```ruby
world3.populate "Bart Simpson", 10
p world3.people
```

> [{:name=>"Bart Simpson", :age=>10}]

12:16

# Remove getters and setters

```ruby
class World

	attr_reader :people
	attr_accessor :name, :shape

	def initialize name, shape
		@shape = shape
		@name = name
		@people = []
	end

	def populate name, age
		@people << { name: name, age: age }
	end

end
```

# Extra

Another class




















