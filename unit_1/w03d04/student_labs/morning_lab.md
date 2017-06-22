![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Grids and Pyramids<br>
Type: Lab <br>
Duration: 45 - 60 mins<br>
Creator: Thom Page <br>
Topics: jQuery, JS control flow<br>

---

# REPS

Run a function that generates a checkerboard

![](http://math.hws.edu/eck/cs124/javanotes3/c3/checkerboard.gif)

The board does not have to be in a perfect grid, just as long as there are 64 square divs with alternating colors.

You can perform these steps in order:

* Generate 64 divs
* Give each div a class that will provide size and color
* Give each alternating div a different class somehow

BONUS:

Make it a perfect 8 x 8 grid

<br>
<hr>

# PYRAMID

Make a six-tiered pyramid made out of triangles that looks like this:

![](https://i.imgur.com/S0zDk0h.png)

After you have made the pyramid, make it so you can run a function and input the number of 'tiers' or 'rows' of the pyramid to be displayed.

Row one will have one triangle, row two will have two triangles ... row twenty will have twenty pyramids, etc.

When it is complete, you can have a result like this:

```
generatePyramid(16)
```

![](https://i.imgur.com/O2IeAu6.png)

Triangle CSS:

```
.triangle {
  display: inline-block;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid red;
}
```

You can use `text-align: center` on each row to center the triangles:

```
.row {
  text-align: center;
}
```

<br>

**Major Spoiler - do not read if you want to do this on your own**

Use a _for loop_ to generate the rows. Inside this loop, use another _for loop_ to generate the triangles (the quantity of which will be determined by that triangle's row number).

<br>
<hr>
