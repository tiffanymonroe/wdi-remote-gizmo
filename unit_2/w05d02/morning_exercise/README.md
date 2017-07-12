![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Clock Hand Angle Calculator <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: WDI-Lettuce<br>
    Adapted by: Thom Page for WDIR-Panthalassa<br>
    Course: WDIR-Hopper<br>
Competencies: Logic, Javascript<br>
Prerequisites: Javascript <br>

---

# Morning Exercise

## Setup
1. Use the provided `clock_hands.js` file to write your code for this morning's exercise.

## CLOCK HAND ANGLE CALCULATOR

![clock](http://orpheogroup.com/wp-content/uploads/2014/10/grand-central-clock-crop.jpg)


Write a function `clock` that takes two integers, `hour` and `minute`. The function should calculate the two angles in degrees between the **hour hand** and **minute hand** on a twelve-hour analog clock face.

Note that the hour hand has 'drift'. If the time is **6:30**, the hour hand will be halfway through its travel between **6** and **7**. If the time is **9:45**, the hour hand will be three quarters of the way between **9** and **10**.

Return an "out of range" message if an input is greater than the clock's range.


Expected output:

```
clock(6, 00)

=> [180, 180]
```

```
clock(12, 00)

=> [360, 0]
```

```
clock(12, 15)

=> [277.5, 82.5]
```

```
clock(9, 45)

=> [22.5, 337.5]
```

```
clock(1, 59)

=> [294.5, 65.5]
```

```
clock(500, 34)

=> "out of range"
```
