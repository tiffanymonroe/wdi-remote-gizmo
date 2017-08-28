![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

<hr>
Title: 100 Goblins<br>
Type: Exercise<br>
Duration: 1+ hrs (less if you look at the tips section)<br>
Creator: Microsoft<br>
Adapted by: Thom Page<br>
<hr>

# 100 GOBLINS

This was an interview coding challenge used by Microsoft to challenge its interviewees. It was called 100 Doors but this time, we're using sick Goblins.

## What you should do after we read the problem:

1. As pairs, pseudo-code the entire problem.
2. Once your pseudo-code is written, open the Ruby docs that are listed below.
3. Write code _in Ruby_ that will solve each section of your pseudo-code and return the final result.

![](https://i.imgur.com/Nq4qBwT.png)
<hr>


There are 100 Goblins suffering from acid reflux, and you are a sadistic Goblin doctor with
the cure. You want to torture the Goblins with a little game.  

* You line up all the Goblins and
give each of them the cure in turn, all 100 Goblins.  

* But then you start from the beginning of the line and go over them a second time, removing the cure for every **second** Goblin, starting with the **second** Goblin.  

* Then you do it a third time for every **third** Goblin, starting at the **third** Goblin: if the Goblin you now administer was previously cured, they are now uncured, and if the Goblin was uncured, they are now cured. You do it a fourth time, and go to every fourth Goblin starting with the fourth. The fifth time, you go to every fifth Goblin starting with the fifth ....  

> After you have gone down the line of Goblins 100 times, which Goblins are cured at the end?

Hint: set up an array of goblins first using a datatype good for setting either *true* or *false*
values. It's certainly *false* that all the all goblins are cured at the beginning . . . .


&#x1F535; **Activity**

1. Solve the 100 Goblins problem!

1. Use loops for this exercise! You will eventually need a loop within a loop.

## FINAL RESULT:

2. Once you have your goblins array populated with the final *true* and *false* values after having gone through the entire process of curing and uncuring, translate your final array to another array of numerical values of the *cured Goblins only*.

If the first Goblin is cured, the first number in the array will be 1 (not zero). If the 100th Goblin is cured, the last number in the array will be 100. The expected output (solution) will be a list of all the **perfect squares** up to and including 100.

Perfect squares:

```
=> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

## Ruby Documentation

Load up the documentation for the following methods, `.times`, `.step`, `.each_with_index`:

[`.times`](https://ruby-doc.org/core-1.9.3/Integer.html#method-i-times)

[`.step`](https://ruby-doc.org/core-1.9.3/Range.html)

[`.each_with_index`](https://ruby-doc.org/core-1.9.3/Enumerable.html#method-i-each_with_index)

With these three Ruby methods, instead of for loops, solve the 100 Goblins problem.


## TIPS 
<details>
1. You could push false into an array 100 .times to get your 100 goblins
<br>
2. You could iterate over the goblins as many .times as the .length of the array
<br>
3. You could use the current number as the starting point in a Range for the inner loop
<br>
4. The Range could .step by some incrementing number to skip over goblins
<br>
5. When the iterators are finished, you could get .each_with_index the index value of the goblins that have been cured . . .
</details>
