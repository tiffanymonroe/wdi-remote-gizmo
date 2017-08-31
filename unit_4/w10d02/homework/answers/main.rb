#Hungry For More:
require 'colorize'

#Commit 4:
require_relative "animal"
require_relative "client"
require_relative "shelter"

ht = Shelter.new "Happy Tails"

# Commit 5 'seed data'
wolfy = Animal.new "Wolfy", "Wolf"
sharky = Animal.new "Sharky", "Great White"
wile = Animal.new "Wile E.", "Coyote"
hamster = Animal.new "Pure Evil", "Demon"
kanga = Animal.new "Roo", "Kangaroo"
hedgehog = Animal.new "Sonic", "Hedgehog"
bunny = Animal.new "Barbara", "Rabbit"
pizza_rat= Animal.new "Pizza Rat", "ROUS"
plantee = Animal.new "Plantee", "Plant"

wolfy.get_toy "bone"

mal = Client.new "Mal Reynolds", "Outer Space"
zoe = Client.new "Zoe Alleyne Washburne", "Outer Space"
wash = Client.new "Wash", "Outer Space"
inara = Client.new "Inara Serra", "Outer Space"
jayne = Client.new "Jayne Cobb", "Outer Space"
kaylee = Client.new "Kaylee Frye", "Outer Space"
simon = Client.new "Simon Tam", "Outer Space"
summer = Client.new "River Tam", "Outer Space"
book = Client.new "Shepard Book", "Outer Space"

book.get_pet bunny

ht.add_animal wolfy
ht.add_animal sharky
ht.add_animal wile
ht.add_animal hamster
ht.add_animal kanga
ht.add_animal hedgehog
ht.add_animal pizza_rat
ht.add_animal plantee

ht.add_client mal
ht.add_client zoe
ht.add_client wash
ht.add_client inara
ht.add_client jayne
ht.add_client kaylee
ht.add_client simon
ht.add_client summer
ht.add_client book


# Commit 4
# Program Loop

options =
[{"num" => "1".bold, "choice" => 'to create an animal' },
  {"num" => "2".bold, "choice" => 'to create a client' },
  {"num" => "3".bold, "choice" => 'to display animals' },
  {"num" => "4".bold, "choice" => 'to display clients' },
  {"num" => "5".bold, "choice" => 'to adopt' },
  {"num" => "6".bold, "choice" => 'to give up an animal' },
  {"num" => "7".bold, "choice" => 'to give an animal a toy'},
  {"num" => "x".bold, "choice" => 'exit' },
]

begin
  puts "Choose:".bold.cyan

  for c in 0...options.length
    puts options[c]["num"] + " " + options[c]["choice"]
  end
  choice = gets
  choice.chomp!

  # Create Animal
  # Commit 4
  if choice == "1"
    puts "Name of animal"
    add_animal_name = gets
    add_animal_name.chomp!
    puts "Species of animal"
    add_animal_species = gets
    add_animal_species.chomp!
    a = Animal.new add_animal_name , add_animal_species
    ht.add_animal a
    puts "Animal added".bold.green

    # Create Client
    # Commit 4
  elsif choice == "2"
    puts "Enter a client name".bold.magenta
    add_client_name = gets
    add_client_name.chomp!
    puts "Enter Client's Location"
    add_client_city = gets
    add_client_city.chomp!
    c = Client.new add_client_name , add_client_city
    ht.add_client c
    puts "Client added".green.bold

    # Show Animals
    # Commit 6
  elsif choice == "3"
    puts "All the animals".magenta.bold
    ht.show_animals

    # Show Clients
    # Commit 6
  elsif choice == "4"
    puts "All the clients".magenta.bold
    ht.show_clients

    # Client Adopts Animal
    # Commit 8
  elsif choice == "5"
    ht.show_client_names
    puts "Enter Client to adopt".blue.bold
    c = gets
    c.chomp!
    puts "================="
    ht.show_animal_names
    puts "enter animal to adopt".blue.bold
    a = gets
    a.chomp!
    puts "================="
    puts "#{c} wants to adopt #{a}!".bold.green
    ht.adopt a, c


    # Client Gives Up Animal
    # Commit 8
  elsif choice == "6"
    ht.show_client_names
    puts "Enter Client who wants to give up animal".red.bold
    c = gets
    c.chomp!
    c = ht.select_client c
    puts "================="
    ht.show_client_pets ht.clients[c]
    puts "================="
    puts "enter animal to give up".blue.bold
    a = gets
    a.chomp!
    puts "================="
    puts "ok next steps coming"
    ht.take_back ht.clients[c] , a


    # Commit 7
    # Give Animal A Toy
  elsif choice == "7"
    puts "Here are all the animals in the shelter"
    ht.show_animal_names
    puts "Type the name of the animal to give a toy"
    animal = gets
    animal.chomp!
    puts "Type the name of the toy to give to #{animal}"
    toy = gets
    toy.chomp!
    ht.give_toy animal , toy

    # Exit out of Program
  elsif choice == "x"
    puts "Thanks for visiting! Come back soon!".bold
    exit

    # Invalid Input
  else
    puts 'Invalid entry. Please try again'.bold.red
  end

  #Not needed to be done this way, extra way to end loop
end until choice =="x"
