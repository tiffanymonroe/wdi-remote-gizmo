# a word is chosen from words
# a message is displayed giving a clue
# user can enter a guess
# result??

# indefinite loop

dictionary = ["toothpicks", "cloth", "lamp",
"soup", "scissors", "headphones", "donkeys"]

class Word

	def initialize word
		letters = word.split('')
		@letters_display = letters.map do |l|
			{ letter: l, hidden: true }
		end
	end

	def letters_display
		@letters_display
	end

	def render
		@letters_display.each do |l|
			if l[:hidden]
				print " _ "
			else
				print l.letter
			end
		end
	end

end

word = Word.new dictionary.sample

loop do

	puts "Guess which word I have chosen!"
	word.render
	input = gets.chomp

	if input == word
		puts "yeahhhh you got it."
		break
	else
		puts "WRONG"
		puts "press enter or (q)uit"
		confirm = gets.chomp
		break if confirm == "q"
	end

end































