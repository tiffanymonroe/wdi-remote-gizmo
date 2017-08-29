#Reverse It

string = "a man, a plan, a canal, frenemies!"
p string.reverse


#Swap Em

a = 10
b = 30


#Multiply Array


#FizzBuzz

fizzbuzzer = [7, 4, 5]

fizzbuzzer.each do |x|
  if x % 15 == 0
    p 'fizzbuzz'
  elsif x % 3 == 0
    p 'fizz'
  elsif x % 5 == 0
    p 'buzz'
  else
    p 'no fizz, no buzz, no fizzbuzz'
  end
end

#Has Dupes

has_dupes = ['cat', 'dog', 'rabbit', 'hamster', 'dog']

has_dupes
