![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

<hr>
Title: Ruby Lab - Morning <br>
Type: Lab<br>
Duration: 1 hr<br>
Creator: Thom Page<br>
<hr>

### SETUP

* In `student_labs` make a file `morning_lab.rb`
* Work inside this file. Run it with `pry morning_lab.rb` or `ruby morning_lab.rb`

# RESEARCH

## Basic Stuff! Strings

Perform the following tasks using string methods:

1. Reverse the string, `"sarcophagus"`.
2. Return the substring, `"undulating"`, from the string, `"Are these artichokes undulating?"`.
3. Convert the string, `"90210"`, to an integer.
4. Capitalize the letter `"m"` in the string `"meeseeks"`.
5. Capitalize all of the letters in the string `"Capitalize all of the letters in the string"`.


<br>
<hr>


# BUILT-IN RUBY METHODS

One of the great things about Ruby is the plethora of useful methods. Many complicated operations can be done just by finding the right method.

Here are some exercises to become more acquainted with the following Ruby methods:

1. `.each`
2. `.class`
3. `.select`
4. `.reject`
5. `.flatten`
6. `.permutation.to_a`
7. `.first`
8. `.last`
9. `.count`
10. `.reduce`
11. `.uniq`
12. `.shuffle`
13. `.each_slice`
14. `.sample`
15. `.each_cons`

<br>
<hr>

## PART ONE
Given the following array

```
arr = [["Live", "Laugh", "Love"], {hello: 'hi back'}, false, 333.333, nil, nil, ["Joy", "Joke", "Jerk"]]
```

1. Use `.each` and `.class` to print the class of each array element to the console

2. Use `.select` and `.class` to return an array of only those elements whose class is Array. http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-select

3. Use `.reject` and `.class` to return an array of only those elements whose class is not Hash. http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-reject

4. Use `.flatten` on the result of your previous `.select` operation to flatten out the array

5. Use `.permutation.to_a` on the flattened result to return all possible permutations of all the items within the inner arrays.

6. Use `.count` to get the number of those permutations.

<br>
<hr>

## PART TWO

Given the following array

```
numbers = [4, 7, 8, 7, 9, 0, 4]
```

1. Use `.permutation.to_a` and `.count` to return a count of all permutations

2. `.select` only those permutations where the `.first` number is 7 and the `.last` number is also 7, and return a `.count` of those permutations.

3. Use `.reduce` to get the sum of the array.

4. Use `.reduce` to get the product of the array.

<br>
<hr>

## PART THREE

Given the following array

```
strings = ["Paloma", "Grits", "Ziti", "Carbohydrates", "Grits", "Corn", "Wizard_robe", "Ziti", "Corn", "Corn", "Maize"]
```

and the empty hash

```
hash = {}
```

1. Using `.each` and `.uniq`, populate the hash using the elements in the array as keys. Remember that keys must be unique, so don't include any double-ups. Set the values of those keys to "Fun" except for Maize, which is "Not Fun".

<br>
<hr>

## PART FOUR

```
students = ["An", "Todd", "Mark", "Jim", "Cathleen", "Ky", "Biren", "Geraldine", "Hanna", "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]
```

1. Pretend that group projects are coming up again, and you have to split the class up into random pairs. Use `.shuffle` and `.each_slice` to generate groups of two. http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-each_slice.

2. Use `.sample` to return a single random student who will win a prize! http://ruby-doc.org/core-2.1.4/Array.html#method-i-sample

3. Use `.sample` to return four random students to be taken on vacation (use an argument with the .sample method)

<br>
<hr>

## PART FIVE

**MAKE YOUR OWN PROBLEM**

Look into the Ruby method `.each_cons`, http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-each_cons

Make your own problem where the answer should use `.each_cons`.
