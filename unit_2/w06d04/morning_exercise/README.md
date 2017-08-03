![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

<hr>
Title: Bubble Sort<br>
Type: Morning Exercise<br>
Duration: ~45+ mins<br>
Creator: Thom Page<br>
Topics: sorting algorithms, nested loops<br>
<hr>

* We will be sorting an array of numbers to put them in ascending order.

* We will be using one particular sorting algorithm called Bubble Sort.


<br>
<hr>

# SORTING ALGORITHMS

[Algorithms documentary - 51 mins](https://www.youtube.com/watch?v=T1os88EvPc4)

A sorting algorithm is an algorithm that puts elements of a list in order. 

If you give the algorithm an unsorted array that looks like this:

```
[4, 3, 6, 77, 0];
```

The expected output of the sorting algorithm would return all the numbers in order:

```
[0, 3, 4, 6, 77];
```

Some commonly used sorting algorithms are `Quicksort`, `Merge Sort`, and `Bubble Sort`. 

<br>
<hr>

# BUBBLE SORT

Bubble Sort is rather inefficient and is used mostly to demonstrate the inner workings of a sorting algorithm.


#### How it works:

![](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

Bubble sort steps through the list to be sorted, compares each pair of adjacent items, and swaps the items if they are in the wrong order. 

The algorithm passes through the list repeatedly until there are no more swaps occuring.

Given an unsorted input:

```
[4, 3, 6, 77, 0]
```

The algorithm will first check `4` and `3`, and if they are in the wrong order, it will swap them, giving the result:

```
[3, 4, 6, 77, 0]
```

(3 and 4 are now in order)

The algorithm will then check `4` and `6`, and if they are in the wrong order, it will swap them. Since `4` and `6` are in the correct order, they will not be swapped.

Traversing the array and doing the correct swaps is just a single pass: the entire array will likely not be sorted after a single pass. The algorithm has to do the process again and again until there are no more swaps. 

<br>

## Directions

1. Write a _for loop_ that will make a single pass over an array and swap each pair of numbers if they need to be swapped.

2. BONUS - Write a function that will completely sort an array according to the rules of Bubble Sort. This will require multiple passes over the array.


**You will need a loop within a loop to solve it.**

```
bubbleSort([10, 0, 99, 100, 8, 55, 2, 17, 16, 15, 1000, 1]);

=>
[ 0, 1, 2, 8, 10, 15, 16, 17, 55, 99, 100, 1000 ]

```

<br>

## Strategies

#### Outer loop and inner loop

The inner loop for Bubble Sort should be `for` loop that does the swapping (or not) of the array elements.

The outer loop for Bubble Sort should be a `while` loop that runs _while_ swaps have occured.

* Start with just the inner for loop 
	* Make it so your for loop will go through the array once and do the initial swaps.
	* To swap values, you might need a variable to temporarily hold a value
	
* Write the outer while loop
	* Whether or not a swap has occured should be a boolean value

<br>

&#x1F535; **Setup**

In `morning_exercise`, make a file `bubble_sort.js`

Run it in node: `node bubble_sort.js`
	