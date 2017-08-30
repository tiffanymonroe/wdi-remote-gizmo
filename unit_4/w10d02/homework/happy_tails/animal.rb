class Animal

  attr_accessor :name, :species

  def initialize name, species
    @name = name
    @species = species
    @toys = []
  end


  def toys(toy)
    @toys << toy

  end

end

# tink = Animal.new "Tink", "pupper"
# p tink.name
# p tink.toys('raspberry')
