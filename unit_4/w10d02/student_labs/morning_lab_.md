![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Ruby classes <br>
Creator: Thom Page <br>
Modified by: Karolin Rafalski <br>
Competencies: Ruby classes<br>

---

## RUBY CLASSES

# 1. Classes

Watch the optional short video [here](https://www.youtube.com/watch?v=r6wVziWXYWI). 6 mins 23 seconds.

**Create Muppets**

1. Create a Muppet class that takes in a `name` and puts `"This muppet is called #{name}!"` on  `initialize`.   
  - Assign the muppet a random color on `initialize`. Hint: make a small array and use `.sample` 
 
**Create Birds**
 
2. Create a Bird class that takes in an `adjective` and a `name` and  puts `"#{name} is a(n) #{adjective} bird!"` on  `initialize`.   
  - Assign the bird a species at random on `initialize`.  Hint: make a small array and use `.sample` 
  - Here is an array of bird species, for your convenience
 
```
  ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']
```
<br>

# 2. Methods

Watch the optional short video here [here](https://www.youtube.com/watch?v=c2a2bZf3LH4). 8 mins 22 seconds.

**Muppet methods**

* Add **methods** to your Muppet
  - Add a `honk` method to your muppet that puts `"#{name} is making a honking sound!"`. Test that it works, comment out your test code. 
  - Example test the following that it gives the expected output:
  
```
q = Muppet.new("K-Rad")
q.honk
```

- Add a `flail` method that puts `"#{name} is flailing its arms!"`. Test that it works.

**Bird methods**

* Add methods to your Bird
  - Add a `hungry` method that puts `"#{name} wants some regurgitated worms!"`. Test that it works.
  - Add a `fly` method that puts `"Flap! #{name} is taking flight!"`. Test that it works.
4. Make your bird's `adjective` and `name` accessible. Test that this works.

<br>

# 3. Person object

Use a Ruby class to make a 'person' object. The person should meet the followng specs:

### Object specs

A Person should have a name and an age.

A Person should be able to do squat-lunges. (A `squat_lunge` method). But, a person should only be able to do so many squat-lunges. Make it so there is is a limit to how many squat-lunges that person can do.

<br>

# 4. Objects within objects

Using your `World` object from before, make it so that when the `populate` method is called, a new `Person` object is added to the world. That is, a new person is made from the person class and added to the `@people` array (instead of just adding a hash to the array).


