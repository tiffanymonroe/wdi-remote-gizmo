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

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
#
# p nums.uniq
# p nums.push(17)
# p nums.pop
# p nums.length
# p nums.include? 8
#
# colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
#
# p colors.sample
# p colors.reverse
# colors.each {|num| p num.capitalize }


def find_area height, width
  height * width
end

p find_area(3,7)

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]


def multiply_each_by_five arr
  arr * 5
end

nums.each_index {|i| p multiply_each_by_five nums[i]}
