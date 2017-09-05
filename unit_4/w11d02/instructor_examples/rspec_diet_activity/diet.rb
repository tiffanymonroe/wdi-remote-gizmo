
# 1. Write a method called no_donuts that takes in a number of donuts as an argument. If the number of donuts is greater than zero then this method should return "Get back on your diet!" otherwise it should return "Good job, Rick!"

#----Write code here for #1----
def no_donuts num
  if num > 0
    "Get back on your diet!"
  else
    "Good job, RICK!"
  end
end
#------------------------------

# 2. Rick's diet has been going well and we're going to cut him some slack. Write a new method called less_donuts that takes in a number of donuts as an argument and tells Rick good job when he eats less than 3 donuts, to slow down if he's eaten exactly 3 donuts, and to get back on his diet if he eats more than 3 donuts.

#----Write code here for #2----
def less_donuts num
  if num < 3
    "Good job, RICK!"
  elsif num == 3
    "Slow down!"
  else
    "Get back on your diet!"
  end
end
#------------------------------

# 3. We've decided to give Rick a little more control over his diet. Write a method called some_donuts that takes in two arguments - the number of donuts he has eaten and a maximum donut intake. This method should tell Rick good job if he eats less than half his maximum intake and to get back on his diet when he exceeds his maximum intake.

#----Write code here for #3----
def some_donuts num, max
  if num < max / 2
    "Good job, RICK!"
  else
    "Get back on your diet!"
  end
end
#------------------------------

# Hungry for More? (no pun indended)
# 4. Rick has decided to track both his donut intake and his cookie intake. Write a method called `new_diet` that takes in two arguments - number of donuts and number of cookies. As long as he eats zero donuts OR zero cookies this method should return "Good job!". If he eats 1 or more donuts AND 1 or more cookies it should tell him to get back on his diet.

#----Write code here for #4----
def new_diet donuts, cookies
  if donuts == 0 || cookies == 0
    "Good job!"
  else
    "Get back on your diet!"
  end
end
#------------------------------

# Hungry for Even More? (pun intended)
# 5. Rick needs some motivation to stay on track with his healthy eating. Write a method called `motivation` that takes in a string. If the string equals `diet`, this method should tell Rick "Never gonna give you up." If the string says `fans` tell Rick "Never gonna let you down". Otherwise, tell Rick "Never gonna run around and dessert you" (again, pun intended).

#----Write code here for #5----
def motivation str
  if str == "diet"
    "Never gonna give you up."
  elsif str == "fans"
    "Never gonna let you down."
  else
    "Never gonna run around and dessert you."
  end
end
#------------------------------
