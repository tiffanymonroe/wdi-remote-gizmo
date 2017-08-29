# p 'hello world'
#
# adjective = 'Big Bad'
#
# p "Hello #{adjective} World"
#
# greeting = 'hello world'
#
# p greeting.upcase!
#
# p greeting

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

p nums.uniq
p nums.push(17)
p nums.pop
p nums.length
p nums.include? 8

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

p colors.sample
p colors.reverse
colors.each {|num| p num.capitalize }
