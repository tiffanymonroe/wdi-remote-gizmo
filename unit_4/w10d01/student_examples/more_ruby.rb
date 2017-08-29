# 100.times {|num| p num}

# arr = [1, 2, 3]
#
# arr.length.times {|num| p arr[num]}
#
#
# words = ['the', 'cat', 'in', 'the', 'hat']
#
# # words.each {|current_word| p current_word.upcase}
#
# words.each do |w|
#   if w == "cat"
#     p w
#   elsif w == 'hat'
#     p w.upcase
#   else p "neither cat nor hat"
#   end
# end

# books = [
# 	{ title: 'Madame Bovary', author: 'Gustave Flaubert' },
# 	{ title: 'Gravity\'s Rainbow', author: 'Thomas Pynchon' },
# 	{ title: 'Silence', author: 'Shusaku Endo' },
# 	{ title: 'Radio Free Albemuth', author: 'Philip K Dick' },
# 	{ title: 'The Goldfinch', author: 'Donna Tartt' },
# 	{ title: 'Pilgrim at Tinker Creek', author: 'Annie Dillard' },
# 	{ title: 'Too Much Happiness', author: 'Alice Munro' }
# ]
#
# #array of hashes
#
# books.each do |book|
#   if book[:title].length > 15
#     p book[:title]
#   else
#     p "title length is greater than 15 characters"
#   end
# end
#
# books.each do |book|
#   p "#{book[:title]}, by #{book[:author]}"
# end

p "hello world".class

p [1,2,3].class

p({ name: "Timmy", age: 45 }.class)

p :what.class

p (0..100).class
