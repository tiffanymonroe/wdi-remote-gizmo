class World
  def initialize
    # put @ to change scope to globally with class
    @name = "Panthalassa"
    @people = []
  end

  #getter
  def name
    @name
  end

  #setter
  def name=valule
    @name = value
  end

  def populate
    @people << {name: "Lumpy Space Princess", age: 20}
  end

end

world1 = World.new

# p world1
# p world1.name
# p world1.class
