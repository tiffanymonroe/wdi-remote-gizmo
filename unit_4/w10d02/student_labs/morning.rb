class Muppet
  attr_accessor :name

  def initialize name
    @name = name
  end

  def honk
    "#{name} is making a honking sound!"
  end

  def flail
    "#{name} is flailing its arms!"
  end
end

elmo = Muppet.new "Elmo"

p elmo.honk
p elmo.flail

#================================================

species = ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']


class Bird
  attr_accessor :adjective, :name, :species
  def initialize adjective, name, species
    @adjective = adjective
    @name = name
    @species = species.sample
  end

  def hungry
    "#{name} wants some regurgitated worms!"
  end

  def fly
    "Flap! #{name} is taking flight!"
  end
end

bird1 = Bird.new "chirpy", "Susan", species

p bird1.hungry
p bird1.fly
p bird1.adjective
p bird1.name
p bird1.species

#================================================

class Person
  attr_accessor :name, :age

  def initialize name, age
    @name = name
    @age = age
  end
end

tiffany = Person.new "Tiffany", 37

p tiffany

#================================================


class World
  attr_accessor :name, :people

  def initialize name, people
    # put @ to change scope to globally with class
    @name = "Panthelassa"
    @people = []
  end


  def populate
    @people << Person.new
  end

end

world1 = World.new
world1.populate "Tiffany"
