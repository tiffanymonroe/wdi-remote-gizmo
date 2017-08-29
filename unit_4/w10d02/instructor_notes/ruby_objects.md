# Everything is an object

[Not quite](http://rubylearning.com/blog/2010/09/27/almost-everything-is-an-object-and-everything-is-almost-an-object/)

[What is an object?](https://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/39-ruby-s-object-model/lessons/127-object-identity-what-is-an-object)

A giveaway that something is an object is if it takes a method.

```ruby
"Hello World".upcase
```

It looks suspiciously like "Hello World" is an object, ie. it exhibits behavior such as `upcase`.

A **class** is a template for creating objects.

The string "Hello World" is an _instance_ of the String class. Just like the string "Cherish the cabin" is an _instance_ of the String class. They are both different, but they are both strings.

What if we make up our own method for every instance of the String class?

```ruby
class String

  def zumpledeboop
    self.upcase.reverse
  end
	
end


p "Hello World".class
p "Hello World".zumpledeboop
```

> "DLROW OLLEH"

[Self in Ruby](https://hackhands.com/three-golden-rules-understand-self-ruby/)

If you've ever wondered how a string can take a method, it's because string is secretly an **object** with **properties** and **methods**.

An **object** is an _instance_ of a **class**.

From one class, you can make myriad objects all with the same methods.

# Make our own objects

We can make our _own_ objects. They will be very similar to the JavaScript ones we are used to, the ones that have properties and methods that can be accessed and altered with **dot notation**.

Let's make a template for our objects. The template is called a **class**. Remember how in JavaScript we uses classes to create objects?

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

# Make it so we can update properties

```ruby
world1.name = "Pangea"
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

# Behavior

Let's make it so the worlds we make will do something.

Let's make it so a world can populate itself with people.

* A world can have many people, but starts with none
	* This means initialize the object with an empty array to hold the people in.

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














