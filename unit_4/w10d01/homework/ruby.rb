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


# def find_area height, width
#   height * width
# end
#
# p find_area(3,7)
#
# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
#
#
# def multiply_each_by_five arr
#   arr * 5
# end
#
# nums.each_index {|i| p multiply_each_by_five nums[i]}



# book = {
#   title: 'The Great Gatsby',
#   author: 'F Scott Fitzgerald',
#   year: 1925,
#   price: 10
# }
#
# lamp = {
#   type: 'reading',
#   brand: 'Ikea',
#   price: 25
# }
#
# table = {
#   type: 'bed side',
#   brand: 'Crate & Barrel',
#   color: 'birch',
#   price: 50
# }
#
# def print_price hash
#   hash[:price]
# end
#
# p print_price book
# p print_price lamp
# p print_price table
#
# def print_item_sums hash1, hash2
#   hash1 + hash2
# end
#
# p print_item_sums book[:price], lamp[:price]


euler = (1...1000).select {|i| i % 3 == 0 || i % 5 == 0}

p euler.reduce(:+)
