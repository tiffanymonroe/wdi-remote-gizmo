class Animal
  attr_accessor :name, :species

  def initialize name, species
    @name = name
    @species = species
  end

  def toys
  end

end

tink = Animal.new "Tink", "pupper"
p tink.name
