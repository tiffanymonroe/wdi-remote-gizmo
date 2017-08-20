![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-HOPPER

---
Title: Ruby classes <br>
Type: Homework<br>
Duration: One evening<br>
Creator: Thom Page <br>
Competencies: Ruby classes, instance methods, inheritance<br>

---

## Note about running your code
It's recommended that you run your code from inside your file and use `pry filename.rb` in your terminal to check your output (Matt Short does not do this in the video!). As you update your code, you may need to quit out of pry and rerun `pry filename.rb` to ensure that your code is pulling the correct information. You can comment out previous code that you don't want to run.

### Code in your file
![atom view](https://i.imgur.com/12YDFyh.png)

### Your terminal
![terminal view](https://i.imgur.com/StNZd0N.png)
<br>

#### Remember
if you encounter an error in pry, type `quit`
<br>
<br>
![pry error](https://i.imgur.com/KqHHQSe.png)

## RUBY CLASSES

# 1. Classes
Watch the short video [here](https://www.youtube.com/watch?v=r6wVziWXYWI). 6 mins 23 seconds.


## Exercises:
1. Create a Muppet class that takes in a `name` and puts `"This muppet is called #{name}!"` on  `initialize`.   
  - Assign the muppet a random color on `initialize`. Hint: make a small array and use `.sample`  
2. Create a Bird class that takes in an `adjective` and a `name` and  puts `"#{name} is a(n) #{adjective} bird!"` on  `initialize`.   
  - Assign the bird a species at random on `initialize`.  Hint: make a small array and use `.sample` 
  - Here is an array of bird species, for your convenience
```
  ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']
  
```
  
  
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br> 
"Commit 1: Initializing Classes".
<hr>

# 2. Instance Methods
Watch the short video here [here](https://www.youtube.com/watch?v=c2a2bZf3LH4). 8 mins 22 seconds.


## Exercises:
* Add **instance methods** to your Muppet
  - Add a `honk` instance method to your muppet that puts `"#{name} is making a honking sound!"`. Test that it works, comment out your test code. 
  - Example test the following that it gives the expected output:
  
```
  # q = Muppet.new("K-Rad")
  # q.honk

```
  - Add a `flail` instance method that puts `"#{name} is flailing its arms!"`. Test that it works.
* Add instance methods to your Bird
  - Add a `hungry` method that puts `"#{name} wants some regurgitated worms!"`. Test that it works.
  - Add a `fly` method that puts `"Flap! #{name} is taking flight!"`. Test that it works.
4. Make your bird's `adjective` and `name` accessible. Test that this works.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br> 
"Commit 2: Instance Methods".
<hr>
 


# 3. Inheritance 
Watch the short video [here](https://www.youtube.com/watch?v=BJWcH8Pnafw). 6 mins 56 seconds.


## Exercises:
1. Create a class called `Dessert` that has instance variables of `@name` and `@sugar_content`
2. Give it an instance method of `eat` that puts `"Yum! This #{name} is sooooo delicious!"`
3. Make two new classes called `Pie` and `DeepFriedDessert` that inherit from `Dessert`
4. Give the `DeepFriedDessert` its own `eat` method that instead puts `"Yum! This #{name} is sooo...ack! ugh! *heart-attack*"`
5. Make a new class `IceCream` that inherits from `Dessert` use `super` to get the instance variables of `@name` and `@sugar-content`. Also give `IceCream` its own unique instance variable of `@toppings`

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br> 
"Commit 3: Inheritance".
<hr>

# 4. The Universe

#### Reps with Classes

## Universe Part One

What's in a Class? A class can contain any number of variables and any number of methods. That is, any number of things and any number of actions. Therefore, let's make a Universe simulator! ;)

1. Make a Class called `Universe`.

2. Universe takes three parameters, `item1`, `item2`, `item3`: these are the three things within this universe we are making-- they could be anything: suns, galaxies, dust, people, lossless mp3s, justice,  temporal lobes, etc. Save these things into an array called `@items`.

3. Give the initialize method an instance variable `@expanding = true`

4. Give the initialize method an instance variable `@conservation = true`

5. Give the initialize method an instance variable
`@crunched = false`

6. Make a method `see_all_things` that will print out all the items in this universe. Test it out.

7. Make a method called `create` that takes a parameter `new_item` and will add the new item to the universe (in the `@items` array). If `@conservation = true` then one random item in the universe is *replaced* by the new thing. If not, then a new thing is added to the `@items` array.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br> 
"Commit 4: the Universe Part One".
<hr>

## Universe Part Two

8. While `@conservation` is true, run the `create` method to add a "mosquito" to your universe. Keep running it until all of the items in your universe are mosquitoes (they should be randomly replaced). You now have a mosquito universe. :(

9. Time to make a parallel universe. Make a new instance of your universe called `parallel`, and put three new things into it.

10. Make a method `check_density` that changes `expanding` to `false` if there are more than ten things in the universe (more than ten items in the `@items` array). This will mean that the universe is now contracting under its own gravity . . .  there's no stable universe in this scenario. We'll come back to this in a minute . . . 

11. Make a method called `energy_conservation` that changes `conservation` from `true` to `false` if all items in the `@items` array are identical. Hint: check out the `.uniq` method.


<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br> 
"Commit 5: the Universe Part Two".
<hr>


## Universe Part Three

12. Make a method called `crunch?` wherein, if `expanding` equals `false`, goes through each item in the `@items` array, sets it to `nil` and prints a string saying the name of the item and that it has been crunched due to gravity. When the entire contents of the array are `nil`, set the array itself to `nil` and print "The Universe has ended." If the universe has ended, set `@crunched` to `true`

13. Write your Universal Simulator that runs the following steps in a loop until the Universe has ended. The Universe has ended when `@crunched` is `true`. You might want to make `@crunched` available with `attr_accessor`. Start by making a new instance of the Universe.
 
	* print the contents of `@items`
	* add an item to `@items`
	* check conservation
	* check density
	* crunch?

Possible output:
```
spam
github
lava
spam has been crunched due to gravity
github has been crunched due to gravity
lava has been crunched due to gravity
radio waves has been crunched due to gravity
The Universe has ended
=> true

```

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br> 
"Commit 6: the Universe Part Three".
<hr>

# HUNGRY FOR MORE?

# 5. Class Methods and 'Self'
Watch the short video [here](https://www.youtube.com/watch?v=0r93ZhzpeqI). 8 mins 28 seconds.

## Exercises:
* Experiment with `self`
  - Add a _class_ method `self.what_is_self` to your Muppet class and have it put `self`.    
  - Add an _instance_ method `what_is_self` to your Muppet class and have it put `self`.    
  - Try calling both of these methods in Pry and see what they return.  
2. Add a class method to make baby Muppets
	- In your Muppet class, add an instance variable that gives your Muppet a characteristic or quality such as 'zany', 'quiet', 'twitchy' to the instance of the Muppet.
	- Add a class method of `make_muppet` to your Muppet class that takes in two Muppets and returns a new Muppet.  
	- The new Muppet should have the color of the first Muppet and the quality of the second Muppet. Make some Muppets.
	 
-----------

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br> 
"Commit 7: Class Methods and Self".
<hr>

...
