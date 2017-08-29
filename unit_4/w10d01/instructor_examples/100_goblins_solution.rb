# 1. Pseudo code
# 2. Write code to solve each section

# Line up my goblins (array?) - false
goblins = Array.new(100, false)

# goblins_two = []
# 100.times {goblins_two << false}

# 100.times do |i|
#   goblins_two.push(false)
# end

p goblins

# Toggle each time you do it
# Incremend the "step" everytime.

# USE A RANGE AN INCREASE THE STEP: range.step(2) {|x| puts x}

100.times do |i|
  (i...goblins.length).step(i + 1) do |gob|
    goblins[gob] = !goblins[gob]
    p gob
  end
end

p "-----------------"
p goblins


# 1st time through:
# Starting at Goblin number: 1 at index 0; Go every time (every 1).
# Give each 100 goblins the cure (in turn) - true
# Iterate through goblins. For each index, change it to true. Toggle works.


#2nd time:
# start from the beginning of the line and go over them a second time, removing the cure (false) for every second Goblin, starting with the second Goblin (index 1).Toggle?

# 3rd time:
# starting at the 3rd goblin (index 2), go every 3 goblins, if cured (true), turn it to uncured (false). If uncured(false), turn to cured (true). Toggle?

# 4th time:
# Starting at the 4th goblin (index 3), go every 4 goblins. Toggle.

# Do the same up to 100

# Which goblins are cured? Cured is true (evaluate if the value is true, if it is, then we can get the number). Ex: If the first goblin is cured, index would be: 0, but be considered Goblin number: 1. Need to return as an array.

cured_goblins = []

goblins.each_with_index do |value, index|
  if value == true
    cured_goblins << index.next
  end
end

p "++++++"
p cured_goblins
